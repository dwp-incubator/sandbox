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

app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain').send('How do World!');
});

app.get('/customers/:id', function (req, res) {
  var customerId = parseInt(req.params.id);
  res.json(customers[customerId]);
});

app.get('/customers', function (req, res) {
  res.json(customers);
});

app.post('/customers', function(req, res){
  var customer = req.body;
  customer.id = nextId;
  customers[customer.id] = customer;
  nextId++;
  res.sendStatus(201);
  res.set('Content-Type', 'text/plain')
    .set('Location',url)
    .status(201)
    .send(url);
})

app.listen(port, function () {
    util.log(`New Server running at http://${hostname}:${port}/`);
});
