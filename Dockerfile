FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD npx prisma generate && npm run dev