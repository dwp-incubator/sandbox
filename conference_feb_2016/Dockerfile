# Build with the tag "dwp/handsonnode":
#   docker build -t dwp/handsonnode .
# Run "dwp/handsonnode" with port 8080 published and ./app linked to /opt/handsonnode/app:
#   docker run -d -p 8080:8080 --name web -v `pwd`/app:/opt/handsonnode/app dwp/handsonnode

# Base image is node 5.2
FROM node:5.2.0

# Install the dependencies in package.json
RUN npm install -g nodemon

# Make a /opt/handsonnode including intermediate directories
RUN mkdir -p /opt/handsonnode

# Make port 8080 publishable to the host
EXPOSE 8080

# CD to /opt/handsonnode
WORKDIR /opt/handsonnode

# When run, by default use nodemon to run app.js
CMD [ "nodemon", "-L", "app/app.js" ]
