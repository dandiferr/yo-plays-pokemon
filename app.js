var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + 'public'));

app.get('/yo_cb', function(req, res) {
  io.emit('yo', req.query);
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
