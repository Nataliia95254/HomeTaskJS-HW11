
const http = require('http');
const hostname = 'localhost';
const port = 3000;
const os = require("os");
let userName = os.userInfo().username;
const greeting = require("./personalmodule.js");
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8;', );
  res.write(`Date of request: ${greeting.date}`);
    res.write(greeting.getMessage(userName));
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
