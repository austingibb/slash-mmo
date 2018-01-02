const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/client')); 

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/client/client.html');
});

server.listen(42069);

var game = require('./game-server/game-loop.js');
var World = require('./game-server/world.js');

const world_width = 80;
const world_height = 80;
var world = new World(world_width, world_height, 120);

game.addFrameCallback(onWorldFrame);
game.startGame(world,
    {
        msPerFrame: 16,
        printFPS: true,
        frameSampleSize: 300,
        printEveryFrames: 600
    }
);

function onWorldFrame() {
    var food_ids = world.getEatenFood();

    if (food_ids) {
        io.emit('removeFood', food_ids);
    }

    io.emit('worldRepresentation', world.toClientRepresentation());
}

var client_count = 0;
io.on('connection', function (socket) {
    var client_id = client_count++;
    console.log('Client ' + client_id + " connected!");

    world.addPlayer(client_id);

    var setup_object = {};
    setup_object.world_width = world_width;
    setup_object.world_height = world_height;
    setup_object.client_id = client_id;
    socket.emit('setupInfo', setup_object);

    socket.on('slashto', function (position) {
        world.playerSlash(client_id, position.x, position.y);
    });

    socket.on('disconnect', function () {
        world.clearPlayer(client_id);
        io.emit('removePlayer', client_id);
    });
});

//var SlashMathUtils = require('./game-server/SlashMathUtils.js');

//var quad_tree_object = {
//    x: -1,
//    y: -1,
//    width: -1,
//    height: -1
//}

//var circle_one = {
//    pos: {
//        x: 1,
//        y: 1
//    },
//    r: 0.5
//}

//var circle_two = {
//    pos: {
//        x: 4,
//        y: 3
//    },
//    r: 0.75
//}

//SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);
//var Player = require('./game-server/Player.js');
//var lerp = require('lerp');

//class TestPlayer extends Player {
//    _extendInterpolationFunction(oldVal, newVal, alpha) {
//        return lerp(oldVal, newVal, alpha);
//    }

//    _recoilInterpolationFunction(oldVal, newVal, alpha) {
//        return lerp(oldVal, newVal, alpha);
//    }

//    _getDecayPoints(delta, radius, points) {
//        return 0;
//    }

//    _slashRadiusFromPoints(points) {
//        return 20;
//    }

//    _getExtendTransitionTime(radius, points) {
//        return 10;
//    }

//    _getRecoilTransitionTime(radius, points) {
//        return 10;
//    }

//    _getExtendedTime(radius, points) {
//        return 10;
//    }

//    _getCooldownTime(radius, points) {
//        return 10;
//    }

//    _getMaximumVulnerableRadius(radius, points) {
//        return 2;
//    }

//    _getMinimumVulnerableRadius(radius, points) {
//        return 1;
//    }
//}

//var player = new TestPlayer(0, 0, 0, 5);

//player.slashTo(5, 10);

//player.update(2);

//player.update(3);

//player.update(5);

//player.update(5);

//player.update(5);

//player.update(2);

//player.update(3);

//player.update(5);

//player.update(5);

//player.update(5);


//var player1 = new TestPlayer(0, -2, -2, 5);
//var player2 = new TestPlayer(1, 2, 0, 5);

//player1.slashTo(3, 3);
//player2.slashTo(2, 20);
//player1.update(5);
//player2.update(5);

//player1.update(4);
//player2.update(4);

//var result = player1.winsEncounter(player2);