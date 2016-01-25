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
  const url = `http://${hostname}:${port}/customers/${nextId}`;
  var customer = req.body;
  customer.id = nextId;
  customers[customer.id] = customer;
  nextId++;
  res.set('Content-Type', 'text/plain')
    .set('Location',url)
    .status(201)
    .send(url);
});

app.listen(newPort, () => {
    util.log(`New Server running at http://${hostname}:${newPort}/`);
});

http.createServer((req, res) => {
    if (req.url.startsWith('/customers')){
      if (req.method === 'POST'){
          res.writeHead(307, { 'Location': `http://${hostname}:${newPort}/customers` });
          res.end();
      }else if(req.method === 'GET'){
        var path = req.url.substring(1);
        var pathComponents = path.split('/');
        if (pathComponents.length == 2) {
          var idComponent = pathComponents[1];
          var customerId = parseInt(idComponent);
          res.writeHead(302, { 'Location': `http://${hostname}:${newPort}/customers/${customerId}` });
          res.end();
        }else{
          res.writeHead(302, { 'Location': `http://${hostname}:${newPort}/customers` });
          res.end();
        }

      }else{
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end(`No plans for the ${req.method} method`);
      }
    }else{
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('How do World\n');
    }
}).listen(port, hostname, () => {
    util.log(`Server running at http://${hostname}:${port}/`);
});
