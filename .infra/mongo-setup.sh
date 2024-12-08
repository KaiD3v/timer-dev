#!/bin/bash
set -e

echo "Starting MongoDB replica set initialization..."

# Wait for all MongoDB instances to be running
max_attempts=30
attempt=0

while [ $attempt -lt $max_attempts ]; do
    if mongosh --host mongo1 --eval "db.runCommand({ ping: 1 })" &&
       mongosh --host mongo2 --eval "db.runCommand({ ping: 1 })" &&
       mongosh --host mongo3 --eval "db.runCommand({ ping: 1 })"; then
        echo "All MongoDB instances are ready."
        break
    fi
    
    echo "Waiting for MongoDB instances to be ready..."
    sleep 5
    ((attempt++))
done

if [ $attempt -eq $max_attempts ]; then
    echo "ERROR: MongoDB instances did not become ready in time."
    exit 1
fi

# Check if replica set is already initialized
is_initialized=$(mongosh --host mongo1 --quiet --eval "
try {
    const config = rs.config();
    config && config.members && config.members.length > 0;
} catch (e) {
    false;
}
")

if [ "$is_initialized" = "true" ]; then
    echo "Replica set is already initialized. Checking status..."
    
    # Verify and repair replica set if needed
    mongosh --host mongo1 --eval '
    const status = rs.status();
    if (status.ok) {
        const primaryCount = status.members.filter(m => m.stateStr === "PRIMARY").length;
        
        if (primaryCount === 0) {
            print("No PRIMARY found. Attempting to force reconfiguration.");
            rs.reconfig(rs.config(), { force: true });
        } else if (primaryCount > 1) {
            print("Multiple PRIMARY nodes detected. Resolving.");
            rs.reconfig(rs.config(), { force: true });
        }
    }
    
    print("Replica set status:");
    printjson(rs.status());
    '
    
    echo "Replica set is already configured and verified."
    exit 0
fi

# Initiate replica set with explicit configuration
mongosh --host mongo1 --eval '
rs.initiate({
    _id: "rs0",
    members: [
        { _id: 0, host: "mongo1:27017", priority: 3 },
        { _id: 1, host: "mongo2:27017", priority: 2 },
        { _id: 2, host: "mongo3:27017", priority: 1 }
    ]
})
'

# Wait for replica set to stabilize
sleep 15

# Verify replica set status
mongosh --host mongo1 --eval '
const status = rs.status();
printjson({
    ok: status.ok,
    members: status.members.map(m => ({
        name: m.name,
        health: m.health,
        state: m.state,
        stateStr: m.stateStr,
        priority: m.priority
    }))
})
'

echo "MongoDB replica set initialization complete."