var math = require('mathjs');

module.exports.ClosestPointOnCircle = function ClosestPointOnCircle(circle_x, circle_y, point_x, point_y, radius, distance) {
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