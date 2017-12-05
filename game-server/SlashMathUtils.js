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