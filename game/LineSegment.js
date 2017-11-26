var math = require('mathjs');

module.exports = function LineSegment(x1, y1, x2, y2) {
    this._point1 = [x1, y1];
    this._point2 = [x2, y2];

    this.updatePointOne = updatePointOne;
    this.updatePointTwo = updatePointTwo;
    this.getPointOne = getPointOne;
    this.getPointTwo = getPointTwo;

    this.crossesOther = crossesOther;
}

function getPointOne() {
    return this._point1;
}

function getPointTwo() {
    return this._point2;
}

function updatePointOne(x, y) {
    this._point1[0] = x;
    this._point1[1] = y;
}

function updatePointTwo(x, y) {
    this._point2[0] = x;
    this._point2[1] = y;
}

function crossesOther(otherSegment) {
    // method is likely to need optimization. If the game lags check if any improvements can be made here. 
    intersectionPoints = math.intersect(this._point1, this._point2, otherSegment._point1, otherSegment._point2);
    // if the two lines actually intersect
    if (intersectionPoints != null
        // the intersecting x is between this segment's x values
        && math.min(this._point1[0], this._point2[0]) <= intersectionPoints[0] && intersectionPoints[0] <= math.max(this._point1[0], this._point2[0])
        // the intersecting y is between this segment's y values
        && math.min(this._point1[1], this._point2[1]) <= intersectionPoints[1] && intersectionPoints[1] <= math.max(this._point1[1], this._point2[1])
        // the intersecting x is between other segment's x values
        && math.min(otherSegment._point1[0], otherSegment._point2[0]) <= intersectionPoints[0] && intersectionPoints[0] <= math.max(otherSegment._point1[0], otherSegment._point2[0])
        // the intersecting y is between other segment's y values
        && math.min(otherSegment._point1[1], otherSegment._point2[1]) <= intersectionPoints[1] && intersectionPoints[1] <= math.max(otherSegment._point1[1], otherSegment._point2[1])) {

        return true;
    }

    return false;
}