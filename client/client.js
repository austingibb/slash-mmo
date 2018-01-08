var World = require('./client-world.js');
var WorldRenderer = require('./world-renderer.js');

var $ = require('jquery');
var paper = require('paper');
var io = require('socket.io-client');

var socket = io("http://localhost:42069");

var canvas = document.getElementById('game-canvas');
paper.setup(canvas);

var client_id = -1;
var world_width = 0;
var world_height = 0;

var world;
var world_renderer;

socket.on('setupInfo', function (setup_object) {
    players = {};
    food_list = {};

    client_id = setup_object.client_id;
    world_width = setup_object.world_width;
    world_height = setup_object.world_height;

    world = new World(world_width, world_height, client_id);
    world_renderer = new WorldRenderer(paper, world);
});

socket.on('worldRepresentation', function (world_representation) {
    for (var player_id in world_representation.player_list) {
        world.updatePlayer(world_representation.player_list[player_id]);
    }

    for (var food_id in world_representation.food_list) {
        world.updateFood(world_representation.food_list[food_id]);
    }

    if (world) {
        world_renderer.renderAll(canvas.width, canvas.height);
    }
});

socket.on('removePlayer', function (player_id) {
    world.removePlayer(player_id);
    world_renderer.removePlayer(player_id);
});

socket.on('removeFood', function (food_ids) {
    food_ids.forEach(function (food_id) {
        world.removeFood(food_id);
        world_renderer.removeFood(food_id);
    });
});

canvas.addEventListener('click',
    function canvasClicked(event) {
        var click_x = event.offsetX;
        var click_y = event.offsetY;
        var position = {};
        position.x = world_renderer.canvasToWorldX(click_x);
        position.y = world_renderer.canvasToWorldY(click_y);
        socket.emit('slashto', position);
    },
    false
);
