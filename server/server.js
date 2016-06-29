var port = process.env.PORT || 5000;

/*var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/../client')).listen(port, function(){
    console.log('Server running on ' + port + '...');
});*/



var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});