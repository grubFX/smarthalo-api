FROM node:24-alpine as builder

WORKDIR /app
COPY package.json package-lock.json tsconfig.json nodemon.json ./
COPY src ./src
RUN npm ci
RUN npm run build

EXPOSE 3000
