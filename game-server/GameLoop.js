var gameLoopCaller = require('node-gameloop');
const server = require('http').createServer();

const io = require('socket.io')(server);
server.listen(42069);

var World = require('./World.js');

const world_width = 80;
const world_height = 80;

var world = new World(world_width, world_height, 120);

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

module.exports.startGame = function startGame(msPerFrame) {
    gameLoopCaller.setGameLoop(gameLoop, msPerFrame);
}

var total_frame_count = 0;
var print_every_frames = 120;

var delta_index = 0;
var time_sum = 0;
var frame_sample_size = 300;
var delta_array = new Array(frame_sample_size);
delta_array.fill(0);

function gameLoop(delta) {
    world.update(delta);

    var food_ids = world.getEatenFood();

    if (food_ids) {
        io.emit('removeFood', food_ids);
    }

    io.emit('worldRepresentation', world.toClientRepresentation());

    time_sum -= delta_array[delta_index];
    time_sum += delta;
    delta_array[delta_index] = delta;
    if (++delta_index == frame_sample_size) {
        delta_index = 0;
    }

    total_frame_count++;
    if (total_frame_count % print_every_frames == 0) {
        console.log(frame_sample_size / time_sum);
    }
}
