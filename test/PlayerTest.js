var expect = require("chai").expect;
var lerp = require('lerp');
var Player = require("../game-server/Player.js");
var math = require('mathjs');

class TestPlayer extends Player {
    _extendInterpolationFunction(oldVal, newVal, alpha) {
        return lerp(oldVal, newVal, alpha);
    }

    _recoilInterpolationFunction(oldVal, newVal, alpha) {
        return lerp(oldVal, newVal, alpha);
    }

    _getDecayPoints(delta, radius, points) {
        return 0;
    }

    _slashRadiusFromPoints(points) {
        return 20;
    }

    _getExtendTransitionTime(radius, points) {
        return 10;
    }

    _getRecoilTransitionTime(radius, points) {
        return 10;
    }

    _getExtendedTime(radius, points) {
        return 10;
    }

    _getCooldownTime(radius, points) {
        return 10;
    }

    _getMaximumVulnerableRadius(radius, points) {
        return 2;
    }

    _getMinimumVulnerableRadius(radius, points) {
        return 1;
    }
}

describe("Player", function () {
    describe("When Slashing To Point", function () {
        it("Goes Through All Four States Correctly", function () {
            var player = new TestPlayer(0, 0, 0, 5);

            player.slashTo(5, 10);

            player.update(2);
            expect(player._state).to.equal(Player.State.EXTENDING);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.closeTo(1, 0.001);
            expect(player._segment.getPointTwo().y).be.closeTo(2, 0.001);

            expect(player.getHeadCircle().r).be.closeTo(1.1, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.9, 0.0001);

            player.update(3);
            expect(player._state).to.equal(Player.State.EXTENDING);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.closeTo(2.5, 0.001);
            expect(player._segment.getPointTwo().y).be.closeTo(5, 0.001);

            expect(player.getHeadCircle().r).be.closeTo(1.25, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.75, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.EXTENDED);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(1.5, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.5, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.EXTENDED);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(1.5, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.5, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.RECOILING);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(1.5, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.5, 0.0001);

            player.update(2);
            expect(player._state).to.equal(Player.State.RECOILING);
            expect(player._segment.getPointOne().x).be.closeTo(1, 0.001);
            expect(player._segment.getPointOne().y).be.closeTo(2, 0.001);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(1.6, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.4, 0.0001);

            player.update(3);
            expect(player._state).to.equal(Player.State.RECOILING);
            expect(player._segment.getPointOne().x).be.closeTo(2.5, 0.001);
            expect(player._segment.getPointOne().y).be.closeTo(5, 0.001);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(1.75, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(1.25, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.COOLDOWN);
            expect(player._segment.getPointOne().x).be.equal(5);
            expect(player._segment.getPointOne().y).be.equal(10);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(2, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(2, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.COOLDOWN);
            expect(player._segment.getPointOne().x).be.equal(5);
            expect(player._segment.getPointOne().y).be.equal(10);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(2, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(2, 0.0001);

            player.update(5);
            expect(player._state).to.equal(Player.State.IDLE);
            expect(player._segment.getPointOne().x).be.equal(5);
            expect(player._segment.getPointOne().y).be.equal(10);
            expect(player._segment.getPointTwo().x).be.equal(5);
            expect(player._segment.getPointTwo().y).be.equal(10);

            expect(player.getHeadCircle().r).be.closeTo(2, 0.0001);
            expect(player.getTailCircle().r).be.closeTo(2, 0.0001);
        });

        it("Can Limit the Slash to the Slash Radius", function () {
            var player = new TestPlayer(0, 0, 0, 5);

            player.slashTo(21, 21);

            player.update(5);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.closeTo(math.sqrt(2) * 5, 0.001);
            expect(player._segment.getPointTwo().y).be.closeTo(math.sqrt(2) * 5, 0.001);

            player.update(5);
            expect(player._segment.getPointOne().x).be.equal(0);
            expect(player._segment.getPointOne().y).be.equal(0);
            expect(player._segment.getPointTwo().x).be.closeTo(math.sqrt(2) * 10, 0.001);
            expect(player._segment.getPointTwo().y).be.closeTo(math.sqrt(2) * 10, 0.001);
        });
    });

    describe("when deciding who wins encounter", function () {
        it("can resolve both extending into each other first wins", function () {
            var player1 = new TestPlayer(0, -2, -2, 5);
            var player2 = new TestPlayer(1, 2, 0, 5);

            player1.slashTo(3, 3);
            player1.update(5);

            player2.slashTo(2, 10);
            player1.update(4);
            player2.update(4);

            var result = player1.winsEncounter(player2);
            expect(result).to.equal(true);
        });

        it("can resolve both extending into each other second wins", function () {
            var player1 = new TestPlayer(0, 0, 0, 5);
            var player2 = new TestPlayer(1, 2, 0, 5);

            player1.slashTo(3, 3);
            player1.update(5);

            player2.slashTo(2, 10);
            player1.update(4);
            player2.update(4);

            var result = player1.winsEncounter(player2);
            expect(result).to.equal(false);
        });

        it("can resolve both extending, but one is beyond intersection point", function () {
            var player1 = new TestPlayer(0, -2, -2, 5);
            var player2 = new TestPlayer(1, 2, 0, 5);

            player1.slashTo(3, 3);
            player2.slashTo(2, 20);
            player1.update(5);
            player2.update(5);

            player1.update(4);
            player2.update(4);

            var result = player1.winsEncounter(player2);
            expect(result).to.equal(true);
        });
    });
});