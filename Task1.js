const http = require('http');
const hostname = 'localhost';
const port = 3000;
const os = require("os");
let userName = os.userInfo().username;
const path = require('path');
let pathObj = path.parse(__filename);

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write('<h1>System information</h1><br>');
  res.write('Current user name: ' + userName);
  res.write('<br>OS type: ' + os.type());
  res.write('<br>System work time: ' + ((os.uptime())/60).toFixed(2) + ' minutes');
  res.write('<br>Current work directory: ' + pathObj.dir);
  res.write('<br>Server file name: ' + pathObj.base);

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});