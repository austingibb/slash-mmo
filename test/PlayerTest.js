var expect = require("chai").expect;
var lerp = require('lerp');
var Player = require("../game/Player.js");
var math = require('mathjs');

describe("Player", function () {
    describe("When Slashing To Point", function () {
        it("Changes Head Position", function () {
            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
            var playerHeadPos = player.getHeadPos();
            expect(playerHeadPos[0]).to.equal(0);
            expect(playerHeadPos[1]).to.equal(0);

            player.slashTo(1, 2);
            playerHeadPos = player.getHeadPos();
            expect(playerHeadPos[0]).to.equal(1);
            expect(playerHeadPos[1]).to.equal(2);
        });

        it("Changes Head Position onto Circle on Point Outside Radius", function () {
            var player = new Player(0, 0, 1, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
            var playerHeadPos = player.getHeadPos();
            expect(playerHeadPos[0]).to.equal(0);
            expect(playerHeadPos[1]).to.equal(0);

            player.slashTo(2, 2);
            playerHeadPos = player.getHeadPos();
            expect(playerHeadPos[0]).be.closeTo(math.sqrt(2) / 2, 0.0001);
            expect(playerHeadPos[1]).be.closeTo(math.sqrt(2) / 2, 0.0001);
        });

        it("Interpolates to Head Linearly With Lerp", function () {
            var player = new Player(0, 0, 10, lerp, directPointsToRadius, directPointsToCooldownTime, halfPointsToTransitionTime, noDecay);
            // slash transition should take 5ms because transition time is half points and points start at 10
            player.slashTo(1, 2);
            var playerTailPos = player.getTailPos();
            expect(playerTailPos[0]).to.equal(0);
            expect(playerTailPos[1]).to.equal(0);
            player.update(1);
        });
    });
});

function directPointsToRadius(points) {
    return points;
}

function directPointsToCooldownTime(radius, points) {
    return points;
}

function halfPointsToTransitionTime(radius, points) {
    return points / 2;
}

function noDecay(delta, radius, points) {
    return 0;
}