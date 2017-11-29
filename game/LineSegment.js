var math = require('mathjs');
var SAT = require('./SAT.js');

class LineSegment {
    constructor(x1, y1, x2, y2) {
        this._point1 = new SAT.Vector(x1, y1);
        this._point2 = new SAT.Vector(x2, y2);

        this._point_diff_vector = this._point2.clone().sub(this._point1);

        this._polygon_points = [LineSegment._zero_vector, this._point_diff_vector];
        this._polygon = new SAT.Polygon(this._point1, this._polygon_points);
    }

    getPointOne() {
        return this._point1;
    }

    getPointTwo() {
        return this._point2;
    }

    getPolygon() {
        return this._polygon;
    }

    updatePointOne(x, y) {
        console.log(x + ", " + y);
        this._point1.x = x;
        this._point1.y = y;
    }

    updatePointTwo(x, y) {
        var xdiff = x - this._point2.x;
        var ydiff = y - this._point2.y;

        this._point_diff_vector.x += xdiff;
        this._point_diff_vector.y += ydiff;

        this._point2.x = x;
        this._point2.y = y;

        this._polygon.setPoints(this._polygon_points);
    }

    crossesOther(otherSegment) {
        return SAT.testPolygonPolygon(this._polygon, otherSegment._polygon);
    }
}

LineSegment._zero_vector = new SAT.Vector(0, 0);

module.exports = LineSegment;