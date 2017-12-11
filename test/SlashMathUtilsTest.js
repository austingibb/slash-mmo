var expect = require("chai").expect;
var SlashMathUtils = require("../game-server/SlashMathUtils.js");
var math = require('mathjs');

describe("SlashMathUtils", function () {
    describe("closestPointOnCircle", function () {
        it("Can Find Closest Point 45 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = 1.5;
            var point_y = 1.5;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(2) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(math.sqrt(2) / 2, 0.0001);
        });

        it("Can Find Closest Point 150 Degrees Inside Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) * 2;
            var point_y = 2;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Inside Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 30 Degrees Beyond Non-Unit Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) / 4;
            var point_y = 1 / 4;
            var radius = 0.3;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(radius * math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(radius * 0.5, 0.0001);
        });

        it("Can Find Closest Point 150 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) * 2;
            var point_y = 2;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(0.5, 0.0001);
        });

        it("Can Find Closest Point 210 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = - math.sqrt(3) * 2;
            var point_y = - 2;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(- math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(- 0.5, 0.0001);
        });

        it("Can Find Closest Point 330 Degrees Beyond Circle", function () {
            var circle_x = 0;
            var circle_y = 0;
            var point_x = math.sqrt(3) * 2;
            var point_y = - 2;
            var radius = 1;

            var closestPointOnCircle = SlashMathUtils.closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius);
            expect(closestPointOnCircle[0]).be.closeTo(math.sqrt(3) / 2, 0.0001);
            expect(closestPointOnCircle[1]).be.closeTo(- 0.5, 0.0001);
        });
    });

    describe("randomRange", function () {
        it("Gives Random Values in Range", function () {
            var min = 20;
            var max = 21;
            for (var i = 0; i < 10000; i++) {
                var val = SlashMathUtils.randomRange(min, max);
                expect(min <= val && val < max).equal(true);
            }
        });
    });

    describe("pointInRect", function () {
        it("can determine point is in rectangle", function () {
            var x = .75;
            var y = .25;

            var rect_x1 = 0;
            var rect_y1 = 0;

            var rect_x2 = 1;
            var rect_y2 = 1;

            var result = SlashMathUtils.pointInRect(x, y, rect_x1, rect_y1, rect_x2, rect_y2);
            expect(result).to.equal(true);
        });

        it("can determine point is in rectangle with reversed rect points", function () {
            var x = .75;
            var y = .25;

            var rect_x1 = 0;
            var rect_y1 = 0;

            var rect_x2 = 1;
            var rect_y2 = 1;

            var result = SlashMathUtils.pointInRect(x, y, rect_x1, rect_y2, rect_x2, rect_y1);
            expect(result).to.equal(true);
        });

        it("can determine point is on rectangle edge", function () {
            var x = .75;
            var y = 1;

            var rect_x1 = 0;
            var rect_y1 = 0;

            var rect_x2 = 1;
            var rect_y2 = 1;

            var result = SlashMathUtils.pointInRect(x, y, rect_x1, rect_y1, rect_x2, rect_y2);
            expect(result).to.equal(true);
        });

        it("can determine point is not in rectangle based on x", function () {
            var x = -.75;
            var y = 1;

            var rect_x1 = 0;
            var rect_y1 = 0;

            var rect_x2 = 1;
            var rect_y2 = 1;

            var result = SlashMathUtils.pointInRect(x, y, rect_x1, rect_y1, rect_x2, rect_y2);
            expect(result).to.equal(false);
        });

        it("can determine point is not in rectangle based on y", function () {
            var x = .75;
            var y = 1.1;

            var rect_x1 = 0;
            var rect_y1 = 0;

            var rect_x2 = 1;
            var rect_y2 = 1;

            var result = SlashMathUtils.pointInRect(x, y, rect_x1, rect_y1, rect_x2, rect_y2);
            expect(result).to.equal(false);
        });
    });

    describe("update quadtree object with circle bounds", function () {
        it("can put the bounding rectangle around top left bottom right circles", function () {
            var quad_tree_object = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            var circle_one = {
                pos: {
                    x: 1,
                    y: 0.6
                },
                r: 0.5
            }

            var circle_two = {
                pos: {
                    x: 4,
                    y: 3
                },
                r: 0.75
            }

            SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);

            expect(quad_tree_object.x).be.closeTo(0.5, 0.00001);
            expect(quad_tree_object.y).to.closeTo(0.1, 0.00001);
            expect(quad_tree_object.width).to.closeTo(4.25, 0.00001);
            expect(quad_tree_object.height).to.closeTo(3.65, 0.00001);
        });

        it("can put the bounding rectangle around bottom right top left circles", function () {
            var quad_tree_object = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            var circle_one = {
                pos: {
                    x: 4,
                    y: 3
                },
                r: 0.75
            }

            var circle_two = {
                pos: {
                    x: 1,
                    y: 0.6
                },
                r: 0.5
            }

            SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);

            expect(quad_tree_object.x).be.closeTo(0.5, 0.00001);
            expect(quad_tree_object.y).to.closeTo(0.1, 0.00001);
            expect(quad_tree_object.width).to.closeTo(4.25, 0.00001);
            expect(quad_tree_object.height).to.closeTo(3.65, 0.00001);
        });

        it("can put the bounding rectangle around top right bottom left circles", function () {
            var quad_tree_object = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            var circle_one = {
                pos: {
                    x: 5,
                    y: 0.6
                },
                r: 0.5
            }

            var circle_two = {
                pos: {
                    x: 1,
                    y: 3
                },
                r: 0.75
            }

            SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);

            expect(quad_tree_object.x).be.closeTo(0.25, 0.00001);
            expect(quad_tree_object.y).to.closeTo(0.1, 0.00001);
            expect(quad_tree_object.width).to.closeTo(5.25, 0.00001);
            expect(quad_tree_object.height).to.closeTo(3.65, 0.00001);
        });

        it("can put the bounding rectangle around circle overshadowing other", function () {
            var quad_tree_object = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            var circle_one = {
                pos: {
                    x: 4,
                    y: 2.5
                },
                r: 2
            }

            var circle_two = {
                pos: {
                    x: 8,
                    y: 2
                },
                r: 0.5
            }

            SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);

            expect(quad_tree_object.x).be.closeTo(2, 0.00001);
            expect(quad_tree_object.y).to.closeTo(0.5, 0.00001);
            expect(quad_tree_object.width).to.closeTo(6.5, 0.00001);
            expect(quad_tree_object.height).to.closeTo(4, 0.00001);
        });

        it("can put the bounding rectangle around circle containing other", function () {
            var quad_tree_object = {
                x: -1,
                y: -1,
                width: -1,
                height: -1
            }

            var circle_one = {
                pos: {
                    x: 4,
                    y: 5
                },
                r: 2
            }

            var circle_two = {
                pos: {
                    x: 4,
                    y: 5
                },
                r: 0.5
            }

            SlashMathUtils.updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object);

            expect(quad_tree_object.x).be.closeTo(2, 0.00001);
            expect(quad_tree_object.y).to.closeTo(3, 0.00001);
            expect(quad_tree_object.width).to.closeTo(4, 0.00001);
            expect(quad_tree_object.height).to.closeTo(4, 0.00001);
        });
    });
});