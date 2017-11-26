var expect = require("chai").expect;
var slashMathUtils = require("../game/SlashMathUtils.js");
var math = require('mathjs');

describe("SlashMathUtils", function () {
    describe("ClosestPointOnCircle", function () {
        it("Can Find Closest Point 45 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = 1.5;
            var point_y = 1.5;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(2) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(math.sqrt(2) / 2, 0.0001);
        });

        it("Can Find Closest Point 150 Degrees Inside Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) * 2;
            var point_y = 2;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Inside Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Beyond Non-Unit Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 0.3;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(radius * math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(radius * 0.5, 0.0001);
        });

        it("Can Find Closest Point 150 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) * 2;
            var point_y = 2;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 210 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) * 2;
            var point_y = - 2;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(- 0.5, 0.0001);
        });

        it("Can Find Closest Point 330 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) * 2;
            var point_y = - 2;
            var radius = 1;

            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(- 0.5, 0.0001);
        });
    });
});