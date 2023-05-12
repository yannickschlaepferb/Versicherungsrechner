FROM node:18-bullseye as files
WORKDIR VersicherungsrechnerProgramm
RUN git clone https://github.com/yannickschlaepferb/Versicherungsrechner.git .
WORKDIR /VersicherungsrechnerProgramm
RUN npm ci
RUN npm run build

FROM node:18-bullseye
WORKDIR /VersicherungsrechnerProgramm
COPY --from=files /VersicherungsrechnerProgramm .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]