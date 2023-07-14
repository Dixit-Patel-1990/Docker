
# Docker Projects


[1. To run redis server in docker container](#redis)

[2. To run simpleweb application in docker container](#simpleweb)

[3. Docker compose usage and example](#docker-compose)
# redis

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

# simpleweb

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

# docker-compose

This application is designed to increment count by 1 everytime user visits it.

Used Concept of docker-compose to create, start and stop multiple containers together.

### Commands

#### To generate image and start containers using docker compose
```cmd
docker-compose up --build
```


#### To Stop the running containers using docker compose
```cmd
docker-compose down
```

#### To list all the running containers, you need to be inside a folder where your docker-compose.yml file is. than run command below
```cmd
docker-compose ps
```
## Authors
- [@Dixit Patel](https://github.com/Dixit-Patel-1990/Docker)
