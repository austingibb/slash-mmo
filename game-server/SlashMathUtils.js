var math = require('mathjs');

module.exports.closestPointOnCircle = function closestPointOnCircle(circle_x, circle_y, point_x, point_y, radius, distance) {
    if (distance == undefined) {
        distance = math.distance([circle_x, circle_y], [point_x, point_y]);
    }

    var centerPositionMatrix = math.matrix([circle_x, circle_y]);
    var pointMatrix = math.matrix([point_x, point_y]);
    var normalizedCenterToPointVector = math.divide(math.subtract(pointMatrix, centerPositionMatrix), distance);
    var scaledCenterToPointVector = math.multiply(normalizedCenterToPointVector, radius);
    var pointOnCircleMatrix = math.add(scaledCenterToPointVector, centerPositionMatrix);

    var xOnCircle = math.subset(pointOnCircleMatrix, math.index(0));
    var yOnCircle = math.subset(pointOnCircleMatrix, math.index(1));

    return [xOnCircle, yOnCircle];
}

module.exports.pointInRect = function pointInRect(x, y, rect_x1, rect_y1, rect_x2, rect_y2) {
    var tmp = rect_x1;
    rect_x1 = math.min(rect_x1, rect_x2);
    rect_x2 = math.max(tmp, rect_x2);

    tmp = rect_y1;
    rect_y1 = math.min(rect_y1, rect_y2);
    rect_y2 = math.max(tmp, rect_y2);

    return (rect_x1 <= x && x <= rect_x2 && rect_y1 <= y && y <= rect_y2);
}

module.exports.randomRange = function randomRange(min, max) {
    return math.random() * (max - min) + min;
}

module.exports.map = function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

module.exports.updateQuadTreeObjectWithCircleBounds = function updateQuadTreeObjectWithCircleBounds(circle_one, circle_two, quad_tree_object) {
    var circle_one_lowest_x = circle_one.pos.x - circle_one.r;
    var circle_one_lowest_y = circle_one.pos.y - circle_one.r;
    var circle_two_lowest_x = circle_two.pos.x - circle_two.r;
    var circle_two_lowest_y = circle_two.pos.y - circle_two.r;

    var circle_one_highest_x = circle_one.pos.x + circle_one.r;
    var circle_one_highest_y = circle_one.pos.y + circle_one.r;
    var circle_two_highest_x = circle_two.pos.x + circle_two.r;
    var circle_two_highest_y = circle_two.pos.y + circle_two.r;

    var lowest_x = math.min(circle_one_lowest_x, circle_two_lowest_x);
    var lowest_y = math.min(circle_one_lowest_y, circle_two_lowest_y);

    var highest_x = math.max(circle_one_highest_x, circle_two_highest_x);
    var highest_y = math.max(circle_one_highest_y, circle_two_highest_y);

    quad_tree_object.x = lowest_x;
    quad_tree_object.y = lowest_y;
    quad_tree_object.width = highest_x - lowest_x;
    quad_tree_object.height = highest_y - lowest_y;
}

//module.exports.angleBetween = function angleBetween(v1, v2) {
//    var dotmagmag = this.dot(v) / (this.mag() * v.mag());
//    // Mathematically speaking: the dotmagmag variable will be between -1 and 1
//    // inclusive. Practically though it could be slightly outside this range due
//    // to floating-point rounding issues. This can make Math.acos return NaN.
//    //
//    // Solution: we'll clamp the value to the -1,1 range
//    var angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
//    if (this.p5) {
//        if (this.p5._angleMode === constants.DEGREES) {
//            angle = polarGeometry.radiansToDegrees(angle);
//        }
//    }
//    return angle;
//};