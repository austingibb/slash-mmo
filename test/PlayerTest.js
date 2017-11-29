//var expect = require("chai").expect;
//var lerp = require('lerp');
//var Player = require("../game/Player.js");
//var math = require('mathjs');

//describe("Player", function () {
//    describe("When Slashing To Point", function () {
//        it("Changes Dot Mode and Cooldown", function () {
//            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
//            expect(player.isDot()).to.equal(true);
//            expect(player.isCoolingDown()).to.equal(false);

//            player.slashTo(1, 2);
//            expect(player.isDot()).to.equal(false);
//            expect(player.isCoolingDown()).to.equal(true);

//            player.update(5);
//            expect(player.isDot()).to.equal(true);
//            expect(player.isCoolingDown()).to.equal(true);

//            player.update(5);
//            expect(player.isDot()).to.equal(true);
//            expect(player.isCoolingDown()).to.equal(false);
//        });

//        it("Changes Head Position", function () {
//            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
//            var playerHeadPos = player.getHeadPos();
//            expect(playerHeadPos[0]).to.equal(0);
//            expect(playerHeadPos[1]).to.equal(0);

//            player.slashTo(1, 2);
//            playerHeadPos = player.getHeadPos();
//            expect(playerHeadPos[0]).to.equal(1);
//            expect(playerHeadPos[1]).to.equal(2);
//        });

//        it("Changes Head Position onto Circle when Point is Outside Radius", function () {
//            var player = new Player(0, 0, 1, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
//            var playerHeadPos = player.getHeadPos();
//            expect(playerHeadPos[0]).to.equal(0);
//            expect(playerHeadPos[1]).to.equal(0);

//            player.slashTo(2, 2);
//            playerHeadPos = player.getHeadPos();
//            expect(playerHeadPos[0]).be.closeTo(math.sqrt(2) / 2, 0.0001);
//            expect(playerHeadPos[1]).be.closeTo(math.sqrt(2) / 2, 0.0001);
//        });

//        it("Requires Transition Time to be Less Than Cooldwon Time", function () {
//            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, doublePointsToTransitionTime, noDecay);
//            expect(player.isDot()).to.equal(true);
//            expect(player.isCoolingDown()).to.equal(false);

//            player.slashTo(1, 2);
//            expect(player.isDot()).to.equal(false);
//            expect(player.isCoolingDown()).to.equal(true);

//            player.update(10);
//            expect(player.isDot()).to.equal(true);
//            expect(player.isCoolingDown()).to.equal(false);
//        });

//        it("Interpolates to Head Linearly With Lerp", function () {
//            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
//            // slash transition should take 5ms because transition time is half points and points start at 10
//            player.slashTo(1, 2);
//            var playerTailPos = player.getTailPos();
//            expect(playerTailPos[0]).to.equal(0);
//            expect(playerTailPos[1]).to.equal(0);

//            player.update(1);
//            expect(playerTailPos[0]).be.closeTo(1 / 5, 0.0001);
//            expect(playerTailPos[1]).be.closeTo(2 / 5, 0.0001);

//            player.update(3);
//            expect(playerTailPos[0]).be.closeTo(4 / 5, 0.0001);
//            expect(playerTailPos[1]).be.closeTo(8 / 5, 0.0001);

//            player.update(3);
//            expect(playerTailPos[0]).be.closeTo(1, 0.0001);
//            expect(playerTailPos[1]).be.closeTo(2, 0.0001);
//        });
//    });
//});

//function directPointsToRadius(points) {
//    return points;
//}

//function directPointsToCooldownTime(radius, points) {
//    return points;
//}

//function halfPointsToTransitionTime(radius, points) {
//    return points / 2;
//}

//function doublePointsToTransitionTime(radius, points) {
//    return points * 2;
//}

//function noDecay(delta, radius, points) {
//    return 0;
//}