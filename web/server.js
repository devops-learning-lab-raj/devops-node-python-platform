const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((_req, res) => {
  res.writeHead(200, {'content-type':'application/json'});
  res.end(JSON.stringify({service:'web-gateway', message:'Node gateway demo'}));
}).listen(port, () => console.log(`gateway listening on ${port}`));
