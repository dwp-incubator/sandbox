#4.1 Run Mongo in docker with mapped port

- Start a new docker container using the official mongo docker image

> To find the latest official docker use `docker search mongodb` and make sure to select the official one for this tutorial. You should see an [X] under the official column

Invoking the following will pull down the official mongodb image if it cannot find it locally:

```shell
docker run -d -p 27017:27017 -t mongo
``

The above command also maps the port 27017 on the host to the same port of the container?

