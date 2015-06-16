var express = require('express'); // Use the express library. 
var app = express(); // Create our app. 

app.set('views', './views');
app.set('view engine', 'ejs');

// app.use('/static', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
var http = require('http');

// alert("Lol");

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.render('index', { header: 'index!'});
});



server = http.createServer(app); // Create an HTTP server.
server.listen(process.env.PORT || 4000); // Listen on the default port, or on 4000 if there's not one.
console.log('Hello')