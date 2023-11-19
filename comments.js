// Create web server
// create a route for /comments
// send back some json
// listen on port 3000

// Path: comments.js
// create web server
// create a route for /comments
// send back some json
// listen on port 3000

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // set header content type
  res.setHeader('Content-Type', 'application/json');
  // set header status code
  res.statusCode = 200;
  // send back json data
  res.end(JSON.stringify({
    user: 'todd',
    id: 1,
  }));
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});