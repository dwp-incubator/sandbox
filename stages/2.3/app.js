const util = require('util');
const http = require('http');

const port = 8000;
const hostname = '127.0.0.1';

var customers = [];

http.createServer((req, res) => {
    if (req.url === '/customers'){
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      if (req.method === 'POST'){
        res.end('TODO: Create Customer and return 201 http status code');
      }else if(req.method === 'GET'){
        res.end('TODO: Return all Customers with a 200 http status code');
      }else{
        res.end(`No plans for the ${req.method} method`);
      }
    }else{
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('How do World\n');
    }
}).listen(port, hostname, () => {
    util.log(`Server running at http://${hostname}:${port}/`);
});
