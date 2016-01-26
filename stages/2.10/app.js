const util = require('util');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const customerService = require('./lib/customer');

const port = 8000;
const newPort = 8001;
const hostname = '127.0.0.1';

const app = express();

app.use(bodyParser.json())

app.get('/',  (req, res) => {
  res.set('Content-Type', 'text/plain').send('How do World!');
});

app.get('/customers/:id',  (req, res) => {
  var customerId = parseInt(req.params.id);
  var customer = customerService.getById(customerId);
  if(customer === undefined){
    res.sendStatus(404);
  }else{
    res.json(200);
  }
});

app.get('/customers',  (req, res) => {
  res.json(customerService.list());
});

app.post('/customers', (req, res) => {
  var details = req.body;
  var newCustomer = customerService.create(details);
  const url = `http://${hostname}:${port}/customers/${newCustomer.id}`;
  res.set('Content-Type', 'text/plain')
    .set('Location',url)
    .status(201)
    .send(url);
});

app.put('/customers/:id', (req, res) => {
  var customerId = parseInt(req.params.id);
  var details = req.body;
  details.id = customerId;
  if(!customerService.update(details)){
    res.sendStatus(404);
  }else{
    res.sendStatus(204);
  }
});

app.delete('/customers/:id', (req, res) => {
  var customerId = parseInt(req.params.id);
  if(!customerService.delete(customerId)){
    res.sendStatus(404);
  }else{
    res.sendStatus(204);
  }
});

app.listen(port, () => {
    util.log(`New Server running at http://${hostname}:${port}/`);
});
