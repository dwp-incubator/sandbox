#3.2 Introduce docker volumes and show how a mapped volume allows code changes to be picked up by nodemon

- Installed npm inside the Dockerfile
- Removed the ADD step
- Changed the CMD step to run `nodemon` instead of `node`
- To demonstrate the change **(make sure that the docker container is running0**:

Change the handler:

```javascript
app.get('/',  (req, res) => {
  res.set('Content-Type', 'text/plain').send('How do World!');
});
```

to the following:

```javascript
app.get('/',  (req, res) => {
  res.set('Content-Type', 'text/plain').send('Hello from docker');
});
```

The output from the Docker process should display the change once the file is saved.


