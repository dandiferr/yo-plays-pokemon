var socket = io();

socket.on('yo', function(yo) {
  console.log(yo);
  GameBoyKeyDown(yo.btn);
});
