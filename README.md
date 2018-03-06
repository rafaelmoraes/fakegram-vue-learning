# Fakegram Vue.js learning

> This repository is only to me learning [Vue.js](https://vuejs.org). =]

## Setup with Node.js and npm.

Install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) package manager and follow the instructions in [fakegram](https://github.com/rafaelmoraes/fakegram-vue-learning/tree/master/fakegram) and [fakegram-api](https://github.com/rafaelmoraes/fakegram-vue-learning/tree/master/fakegram-api).


## Setup with Docker and Docker Compose.
Install [docker](https://www.docker.com/community-edition#/download) and [docker-compose](https://docs.docker.com/compose/install/), wait the install process finish, so execute in your terminal:
```bash
# Build docker images, this command is only necessary at first time
sudo docker-compose build
```

```bash
# Start required containers
sudo docker-compose up -d
```

```bash
# Open terminal session on fakegram container
sudo docker-compose exec fakegram bash
```

Now you should are inside the fakegram container, you can access this app on your web browser for that, execute the commands below and access [http://localhost:8080](http://localhost:8080).
```bash
cd fakegram

npm install

npm run dev
```

For stop and remove the containers execute the command below:
```bash
sudo docker-compose down
```
