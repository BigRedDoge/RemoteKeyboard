var express = require('express');
var app = express();
var path = require('path');
var http = require('http').createServer(app);

var PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set('index', '/public/index.html');


//app.set('public', path.join(__dirname, 'public'));
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
    //res.render('index'); 

});
  
http.listen(PORT, function() {
    console.log(`listening on *:${PORT}`);
});