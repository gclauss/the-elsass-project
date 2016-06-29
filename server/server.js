var port = process.env.PORT || 5000;

var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);


function getRandom(array) {
	var randomFloat = Math.random();
	var randomInt = Math.floor(array.length*randomFloat);
	try {
		return array[randomInt];
	} catch(e) {
		console.log('math error');
		return array[0];			
	}
}

var villages = [
	{name : "Truchtersheim", exists : true},
	{name : "Schluchendorf", exists : false, author : 'Geoffroy'},
	{name : "Hoplagheim", exists : false, author : 'Martin'},
	{name : "Bredelagheim", exists : false, author : 'Martin'},
	{name : "Manalawihr", exists : false, author : 'Martin'},
	{name : "Untersheim-le-haut", exists : false, author : 'Martin'},
	{name : "Schloukheim", exists : false, author : 'Martin'},
	{name : "Nachparisheim", exists : false, author : 'Martin'},
	{name : "Haltelawihr", exists : false, author : 'Martin'},
	{name : "Bierbuchberg", exists : false, author : 'Martin'},
	{name : "Flammenwiller", exists : false, author : 'Martin'}
];

server.get('/random-village', function() {
	res.send(JSON.stringify(getRandom(villages)));
});

server.get(/\/?.*/, restify.serveStatic({
    directory: __dirname + '/../client',
    default : 'index.html'
}));


server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});