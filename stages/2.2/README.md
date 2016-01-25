#2.2 Introduce nodemon

Nodemon is great for development purposes.  As opposed to using the `node` executable directly, using `nodemon` instead means any changes you make to the project will trigger `nodemon` to restart the application automatically.

## Install nodemon

Install using the *Node Package Manager (npm)*.  For convenience too, install this globally using the `-g` flag.

```shell
npm install -g nodemon
```

## Run the application using nodemon

Start the application with `nodemon`

```shell
nodemon app.js
```

You will see some information output to the screen.  

## Change the application and see the restart

Open up the `app.js` and change the message 'Hello World\n' to 'How do World\n'.  The first thing you will notice is that `nodemon` should have restarted the application.

## Check the new message is output

In your browser, refresh the screen and you should now see the new message **How do World**.
