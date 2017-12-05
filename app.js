var game = require('./game-server/GameLoop.js');
game.startGame(16);

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
//}

//var player1 = new TestPlayer(0, -2, -2, 5);
//var player2 = new TestPlayer(1, 2, 0, 5);

//player1.slashTo(3, 3);
//player2.slashTo(2, 20);
//player1.update(5);
//player2.update(5);

//player1.update(4);
//player2.update(4);

//var result = player1.winsEncounter(player2);