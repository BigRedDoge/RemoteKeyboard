var express = require('express');
var app = express();
var path = require('path');
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var PORT = 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.set('index', '/public/index.html');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
    
    socket.on('keypress', function(key) {
        console.log(key);

    });

    socket.on('disconnect', function() {
        console.log('keyboard disconnected');
    });
});
  
http.listen(PORT, function() {
    console.log(`listening on *:${PORT}`);
});