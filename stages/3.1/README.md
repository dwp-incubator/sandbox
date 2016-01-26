#3.1 Dockerise the Node project with an ADD of the app folder and run using port mapping

- Create a Docker container using an Alpine base box
- Ensure the dependencies are added before the base box is created.
- Expose the port which the application is exposing
- Build the docker image with a tag of 'dwp/training'

```shell
docker build -t dwp/training ./
```

- Check the size of the docker image! :-)

```shell
docker images
```

- Start up a new container and give it a meaningful name.

```shell
docker run -d -p 8000:8000 --name training -t dwp/training
```
