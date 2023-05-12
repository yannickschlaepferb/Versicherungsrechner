FROM node:14.18.0-bullseye-slim

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

WORKDIR /app

RUN git clone https://github.com/yannickschlaepferb/Versicherungsrechner.git .

WORKDIR /app/VersicherungsrechnerProgramm

RUN npm ci

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]