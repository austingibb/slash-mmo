var expect = require("chai").expect;
var LineSegment = require("../game-server/LineSegment.js");

describe("Line Segment", function () {
    describe("Determining Segment Intersection", function () {
        it("Returns False for Basic Non-Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.5, 0, 1, -1);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
        });

        it("Returns False for Vertical Non-Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.5, -1, 0.5, 0);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
        });

        it("Returns False for Horizontal Non-Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.75, 0.5, 1.25, 0.5);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
        });

        it("Returns False for Parallel Non-Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0, 1, 1, 2);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
        });

        it("Returns True for Basic Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0, 1, 1, 0);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Point to Point Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(1, 1, 2, 1.25);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Parallel Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(-0.5, -0.5, 0.5, 0.5);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Vertical Segment Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.5, 0, 0.5, 1);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Horizontal Segment Intersection", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0, 0.5, 1, 0.5);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Horizontal Vertical Segment Intersection", function () {
            var segment_1 = new LineSegment(0.5, 0, 0.5, 1);
            var segment_2 = new LineSegment(0, 0.5, 1, 0.5);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns True for Segment Intersection After Point Update", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.25, 0, 1, -1);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);

            segment_2.updatePointTwo(0.5, 3);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);
        });

        it("Returns False for Segment Non-Intersection After Point Update", function () {
            var segment_1 = new LineSegment(0, 0, 1, 1);
            var segment_2 = new LineSegment(0.25, 0, 0.5, 3);

            expect(segment_1.crossesOther(segment_2)).to.equal(true);

            segment_2.updatePointTwo(1, -1);

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
        });
    });

    describe("Updating and Getting Points", function () {
        it("Can Get Both Points", function () {
            var segment_1 = new LineSegment(0, 1, 2, 3);
            expect(segment_1.getPointOne().x).to.equal(0);
            expect(segment_1.getPointOne().y).to.equal(1);
            expect(segment_1.getPointTwo().x).to.equal(2);
            expect(segment_1.getPointTwo().y).to.equal(3);
        });

        it("Can Update Both Points", function () {
            var segment_1 = new LineSegment(0, 1, 2, 3);
            segment_1.updatePointOne(4, 5);
            segment_1.updatePointTwo(6, 7);
            expect(segment_1.getPointOne().x).to.equal(4);
            expect(segment_1.getPointOne().y).to.equal(5);
            expect(segment_1.getPointTwo().x).to.equal(6);
            expect(segment_1.getPointTwo().y).to.equal(7);
        });
    });
});