var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);