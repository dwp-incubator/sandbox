const util = require('util');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const port = 8000;
const newPort = 8001;
const hostname = '127.0.0.1';

var customers = {};
var nextId = 1;

const app = express();

app.use(bodyParser.json())

app.get('/',  (req, res) => {
  res.set('Content-Type', 'text/plain').send('How do World!');
});

app.get('/customers/:id',  (req, res) => {
  var customerId = parseInt(req.params.id);
  res.json(customers[customerId]);
});

app.get('/customers',  (req, res) => {
  res.json(customers);
});

app.post('/customers', (req, res){ =>
  var customer = req.body;
  customer.id = nextId;
  customers[customer.id] = customer;
  nextId++;
  res.sendStatus(201);
  res.set('Content-Type', 'text/plain')
    .set('Location',url)
    .status(201)
    .send(url);
});

app.put('/customers/:id', (req, res) => {
  var customerId = parseInt(req.params.id);
  var customer = req.body;
  customer.id = customerId;
  customers[customerId] = customer;
  res.sendStatus(204);
});

app.delete('/customers/:id', (req, res) => {
  var customerId = parseInt(req.params.id);
  delete customers[customerId];
  res.sendStatus(204);
});

app.listen(port, () => {
    util.log(`New Server running at http://${hostname}:${port}/`);
});
