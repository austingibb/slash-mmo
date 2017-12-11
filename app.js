var game = require('./game-server/GameLoop.js');
game.startGame(16);
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