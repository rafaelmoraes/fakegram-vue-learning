FROM node:9
LABEL maintainer="Rafael Moraes"
LABEL version="1"

RUN npm install -g vue-cli@2.7.0

EXPOSE 8080
