var gameLoopCaller = require('node-gameloop');
var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

//io.on('connection', function (socket) {
//    console.log('A user connected');
//    socket.on('setUsername', function (data) {
//        console.log(data);
//        socket.io
//        if (users.indexOf(data) > -1) {
//            socket.emit('userExists', data + ' username is taken! Try some other username.');
//        } else {
//            users.push(data);
//            socket.emit('userSet', { username: data });
//            SendAllMessagesTo(socket.id);
//        }
//    });

//    socket.on('msg', function (data) {
//        //Send message to everyone
//        data.message = data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
//        messages.push(data);
//        NewMessage(data);
//    })
//});

module.exports.startGame = function startGame(msPerFrame) {
    gameLoopCaller.setGameLoop(gameLoop, msPerFrame);
}

function gameLoop(delta) {

}