import IO from 'koa-socket';

const chat = new IO({
  namespace: 'chat'
});

chat.on('connection', (sock) => {

  sock.socket.broadcast.emit('user connected');

  sock.socket.on('disconnect', function() {
    console.log('disconnected!');
  });

  sock.socket.on('chat message', (msg) => {
    sock.socket.broadcast.emit('chat message received', {message: msg, user: 'other'});
  });
});


module.exports = chat;
