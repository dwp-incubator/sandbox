var express = require('express');
var bodyParser = require('body-parser');
var ensureJson = require('express-ensure-ctype')('json');
var Customer = require('./customer');

// Port to listen to
const PORT=8080; 

// Create the server
var app = express();

// Parse request bodies as Json
app.use(bodyParser.json());

// Get all Customers
app.get('/customers', function(request, response, next) {
  Customer.findAll(function(err, result) {
    response.status(200).json(result); // 200 = OK
  });
});

// Get one Customer
app.get('/customers/:id', function(request, response, next) {
  Customer.findById(request.params.id, function(err, customer) {
    if (err) return next(err);
    response.status(200).json(customer); // 200 = OK
  });
});

// Create a Customer
app.post('/customers', ensureJson, function(request, response, next) {
  Customer.save(request.body, function(err, r) {
    if (err) return next(err);
    var url = "http://" + request.headers.host + request.url + "/" + request.body._id;
    response.status(201).send(url); // 201 = Created
  });
});

// Update a Customer
app.put('/customers/:id', ensureJson, function(request, response, next) {
  request.body._id = request.params.id;
  Customer.save(request.body, function(err, r) {
    if (err) return next(err);
    response.status(202).send("ok"); // 202 = Accepted
  });
});

// Delete a Customer
app.delete('/customers/:id', function(request, response, next) {
  Customer.deleteById(request.params.id, function(err, r) {
    if (err) return next(err);
    response.status(202).send("ok"); // 202 = Accepted
  });
});

// Start the server
app.listen(PORT);
console.log("Started on " + PORT);
