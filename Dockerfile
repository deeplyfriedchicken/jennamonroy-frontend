FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN apk update && apk upgrade && \
    apk add --no-cache git