var SAT = require('./game/SAT.js');
var LineSegment = require('./game/LineSegment.js');

var segment_1 = new LineSegment(0, 0, 1, 1);
var segment_2 = new LineSegment(-0.5, -0.5, 0.5, 0.5);
segment_1.crossesOther(segment_2);
//var game = require('./game/GameLoop.js');
//game.startGame(16);
