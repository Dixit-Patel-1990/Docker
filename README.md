
# Docker Projects


[1. To run redis server in docker container](##1.redis)

[2. To run simpleweb application in docker container](##2.simpleweb)
## 1.redis

To run redis server in docker container run following commands after cloning this repository.

### Commands

#### Change directory
```cmd
cd redis
```

#### Build image out of docker file
```cmd
docker build -t dixitpatel/redis:latest .
```
#### Run the image in container
```cmd
docker run -it dixitpatel1008/redis
```
#### Map port of outside world to docker container and start the container
```cmd
docker run -p 8080:8080 dixitpatel1008/redis
```
## 2.simpleweb

To run simpleweb application in docker container run following commands after cloning this repository.

### Commands

#### Change directory
```cmd
cd redis
```
#### Build image out of docker file
```cmd
docker build -t dixitpatel/simpleweb:latest .
```
#### Run the image in container
```cmd
docker run -it dixitpatel1008/simpleweb
```
#### Map port of outside world to docker container and start the container
```cmd
docker run -p 8080:8080 dixitpatel1008/simpleweb
```
## Authors
- [@Dixit Patel](https://github.com/Dixit-Patel-1990/Docker)
