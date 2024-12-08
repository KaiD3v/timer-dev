# Makefile for Docker Compose project

# Default target
.DEFAULT_GOAL := help

# Variables
COMPOSE = docker-compose
PROJECT_NAME = timer-dev

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  up       : Start all services in detached mode"
	@echo "  down     : Stop and remove all containers"
	@echo "  restart  : Restart all services"
	@echo "  build    : Build or rebuild services"
	@echo "  logs     : View logs from all services"
	@echo "  ps       : List containers"
	@echo "  clean    : Remove all containers, networks, and volumes"

# Start services
.PHONY: up
up:
	$(COMPOSE) up -d

# Stop services
.PHONY: down
down:
	$(COMPOSE) down

# Restart services
.PHONY: restart
restart: down up

# Build or rebuild services
.PHONY: build
build:
	$(COMPOSE) build

# View logs
.PHONY: logs
logs:
	$(COMPOSE) logs -f

# List containers
.PHONY: ps
ps:
	$(COMPOSE) ps

# Deep clean - removes containers, networks, volumes, and images
.PHONY: clean
clean:
	$(COMPOSE) down -v --rmi all
	docker system prune -f

# Rebuild and start services
.PHONY: rebuild
rebuild: build up