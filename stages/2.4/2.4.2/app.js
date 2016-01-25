const util = require('util');
const http = require('http');

const port = 8000;
const hostname = '127.0.0.1';

var customers = {};
var nextId = 1;

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
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var path = req.url.substring(1);
        var pathComponents = path.split('/');
        if (pathComponents.length == 2) {
          //Looks like we have a customer ID in the path
          var idComponent = pathComponents[1];
          var customerId = parseInt(idComponent);
          res.end(JSON.stringify(customers[customerId]));
        }else{
          res.end(JSON.stringify(customers));
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
