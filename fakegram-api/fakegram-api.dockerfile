FROM node:9
LABEL maintainer="Rafael Moraes"
LABEL version="1"

COPY . /var/www
WORKDIR /var/www
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
