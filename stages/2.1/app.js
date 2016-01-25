const util = require('util');
const http = require('http');

const port = 8000;
const hostname = '0.0.0.0';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    util.log(`Server running at http://${hostname}:${port}/`);
});
