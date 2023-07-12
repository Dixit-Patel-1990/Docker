

<!---------------------------------- COMMANDS ---------------------------------------->

<!-- To build image out of docker file -->
docker build -t dixitpatel/simpleweb:latest .

<!-- To run the image -->
docker run -it dixitpatel1008/simpleweb

<!-- To map port of outside world to docker container and start the container -->
docker run -p 8080:8080 dixitpatel1008/simpleweb
