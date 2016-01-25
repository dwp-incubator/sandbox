const util = require('util');
const http = require('http');
const express = require('express');

const port = 8000;
const newPort = 8001;
const hostname = '127.0.0.1';

var customers = {};
var nextId = 1;

const app = express();

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/plain').send('How do World!');
});

app.get('/customers', function (req, res) {
    res.json(customers);
});

app.listen(newPort, function () {
    util.log(`New Server running at http://${hostname}:${newPort}/`);
});

http.createServer((req, res) => {
    if (req.url.startsWith('/customers')){
      if (req.method === 'POST'){
        
        var payload = Buffer(0);

        req.on('data', (data) => {
          payload = Buffer.concat([payload, data]);
        });

        req.on('end', () => {
          const url = `http://${hostname}:${port}/customers/${nextId}`;
          const customer = JSON.parse(payload);
          customer.id = nextId;
          customers[customer.id] = customer;
          nextId++;
          res.writeHead(201, { 'Content-Type': 'text/plain', 'Location': url });
          res.end(url);
        });

      }else if(req.method === 'GET'){
        var path = req.url.substring(1);
        var pathComponents = path.split('/');
        if (pathComponents.length == 2) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          //Looks like we have a customer ID in the path
          var idComponent = pathComponents[1];
          var customerId = parseInt(idComponent);
          res.end(JSON.stringify(customers[customerId]));
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
