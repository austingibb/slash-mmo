var expect = require("chai").expect;
var LineSegment = require("../game/LineSegment");

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

            expect(segment_1.crossesOther(segment_2)).to.equal(false);
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
    });
});