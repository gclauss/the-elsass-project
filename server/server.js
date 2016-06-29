var port = process.env.PORT || 5000;

var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get(/\/docs\/public\/?.*/, restify.serveStatic({
  directory: './public'
}));


server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});