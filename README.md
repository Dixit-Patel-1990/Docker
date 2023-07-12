
# Docker Projects

## 1. To run redis server in docker container 

### Commands

#### Change directory
CD redis

#### build image out of docker file 
docker build -t dixitpatel/redis:latest .

#### run the image in container
docker run -it dixitpatel1008/redis

#### map port of outside world to docker container and start the container
docker run -p 8080:8080 dixitpatel1008/redis

## 2. To run simpleweb application in docker container 

### Commands

#### Change directory
CD redis

#### build image out of docker file 
docker build -t dixitpatel/simpleweb:latest .

#### run the image in container
docker run -it dixitpatel1008/simpleweb

#### map port of outside world to docker container and start the container
docker run -p 8080:8080 dixitpatel1008/simpleweb

## Authors
- [@Dixit Patel](https://github.com/Dixit-Patel-1990/Docker)
