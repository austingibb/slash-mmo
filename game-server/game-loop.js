var gameLoopCaller = require('node-gameloop');

var world;
var game_started = false;
var properties = {
    msPerFrame: 16,
    printFPS: false,
    frameSampleSize: 300,
    printEveryFrames: 120
};
var total_frame_count = 0;
var delta_index = 0;
var time_sum = 0;
var delta_array;

var frame_callback_array = new Array();

module.exports.startGame = function startGame(world_passed, properties_passed) {
    if (game_started) return;

    world = world_passed;
    for (var key in properties_passed) properties[key] = properties_passed[key];

    delta_array = new Array(properties.frameSampleSize);
    delta_array.fill(0);

    gameLoopCaller.setGameLoop(gameLoop, properties.msPerFrame);
    game_started = true;
}

module.exports.addFrameCallback = function addFrameCallback(callback) {
    frame_callback_array.push(callback);
}

function gameLoop(delta) {    
    world.update(delta);

    frame_callback_array.forEach(function (callback) {
        callback();
    });

    time_sum -= delta_array[delta_index];
    time_sum += delta;
    delta_array[delta_index] = delta;
    if (++delta_index == properties.frameSampleSize) {
        delta_index = 0;
    }

    total_frame_count++;
    if (total_frame_count % properties.printEveryFrames == 0) {
        console.log("At frame " + total_frame_count + " sampling the last " + properties.frameSampleSize + " frame(s) FPS is " + properties.frameSampleSize / time_sum);
    }
}
