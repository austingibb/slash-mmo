var $ = require('jquery');
var paper = require('paper');

var Path = paper.Path;
var Point = paper.Point;

var canvas = document.getElementById('game-canvas');

paper.setup(canvas);

// Create a white rectangle in the background
// with the same dimensions as the view:
var background = new Path.Rectangle(paper.view.bounds);
background.fillColor = 'white';

var minWaist = 0;
var maxWaist = 30;
var minDistance = 0;
var maxDistance = 1000;
var minRadius = 30;
var maxRadius = 90;

$("#game-canvas").mousemove(function (event) {
    var point_one = new Point(200, 200);
    var point_two = new Point(event.pageX, event.pageY);

    var dist = point_two.getDistance(point_one);
    var radius_one = clamp(map(dist, minDistance, maxDistance, maxRadius, minRadius), minRadius, maxRadius);
    var radius_two = clamp(map(dist, minDistance, maxDistance, minRadius, minRadius), minRadius, minRadius);
    drawConnectedCircles(paper, point_one, point_two, radius_one, radius_two);
});

var previous_connected_shape;
var circle_one;
var circle_two;

var control_circles = {};

function drawControlCircle(paper, id, point, radius) {
    //if (control_circles[id]) {
    //    control_circles[id].remove();
    //}

    //control_circles[id] = new paper.Path.Circle(point, radius);
    //control_circles[id].fillColor = new paper.Color(0, 0, 0);
}

function drawConnectedCircles(paper, point_one, point_two, radius_one, radius_two) {
    var dist = point_one.getDistance(point_two);

    var waist = radius_two;

    if (previous_connected_shape) {
        previous_connected_shape.remove();
    }

    if(circle_one) {
        circle_one.remove();
    }

    if (circle_two) {
        circle_two.remove();
    }

    var connected_shape = new paper.Path();

    drawControlCircle(paper, "p_1", point_one, 2);
    drawControlCircle(paper, "p_2", point_two, 2);

    var diff_vec = point_two.clone();
    diff_vec = diff_vec.subtract(point_one);

    var diff_vec_radius_one = diff_vec.clone();
    diff_vec_radius_one = diff_vec_radius_one.normalize();
    diff_vec_radius_one = diff_vec_radius_one.multiply(radius_one);

    drawControlCircle(paper, "dv_1", diff_vec_radius_one.add(point_one), 2);

    var diff_vec_radius_two = diff_vec.clone();
    diff_vec_radius_two = diff_vec_radius_two.multiply(-1);
    diff_vec_radius_two = diff_vec_radius_two.normalize();
    diff_vec_radius_two = diff_vec_radius_two.multiply(radius_two);

    drawControlCircle(paper, "dv_2", point_two.add(diff_vec_radius_two), 2);

    var mid_point_relative = diff_vec.clone();
    mid_point_relative = mid_point_relative.subtract(diff_vec_radius_one);
    mid_point_relative = mid_point_relative.add(diff_vec_radius_two.multiply(.6));
    mid_point_relative = mid_point_relative.multiply(0.2);
    mid_point_relative = mid_point_relative.add(diff_vec_radius_one);

    var mid_point = mid_point_relative.add(point_one);

    drawControlCircle(paper, "m_1", mid_point, 2);

    var diff_vec_waist = diff_vec.clone();
    diff_vec_waist = diff_vec_waist.normalize();
    diff_vec_waist = diff_vec_waist.multiply(waist);

    var connecting_point_distance;

    var angle_shift = 360 / 12;
    for (i = 2; i < 10; i++) {
        var angle = i * angle_shift + 0.5 * angle_shift;
        var rotated_diff_vec = diff_vec_radius_one.clone();
        rotated_diff_vec = rotated_diff_vec.rotate(angle);

        var rotated_diff_vec_added = rotated_diff_vec.add(point_one);

        connected_shape.add(rotated_diff_vec_added);
        drawControlCircle(paper, "c_" + i + "_1", rotated_diff_vec_added, 2);
    }

    var waist_point_one = diff_vec_waist.clone();
    waist_point_one = waist_point_one.rotate(-90);

    var waist_point_one_added = waist_point_one.add(mid_point);
    var dist_waist_point_one_circle_center = waist_point_one_added.getDistance(point_one);

    if (dist_waist_point_one_circle_center > radius_one) {
        connected_shape.add(waist_point_one_added);
        drawControlCircle(paper, "w_1", waist_point_one_added, 2);
    }

    for (i = 2; i < 10; i++) {
        var angle = i * angle_shift + 0.5 * angle_shift;
        var rotated_diff_vec = diff_vec_radius_two.clone();
        rotated_diff_vec = rotated_diff_vec.rotate(angle);

        var rotated_diff_vec_added = rotated_diff_vec.add(point_two);

        var dist_rotated_diff_vec_circle_center = rotated_diff_vec_added.getDistance(point_one);

        if (dist_rotated_diff_vec_circle_center < radius_one) {
            var rotated_diff_vec_on_circle = rotated_diff_vec_added.subtract(point_one);
            rotated_diff_vec_on_circle = rotated_diff_vec_on_circle.normalize(radius_one);
            rotated_diff_vec_on_circle = rotated_diff_vec_on_circle.add(point_one);
            rotated_diff_vec_added = rotated_diff_vec_on_circle;
        }

        connected_shape.add(rotated_diff_vec_added);
        drawControlCircle(paper, "c_" + i + "_2", rotated_diff_vec_added, 2);
    }

    var waist_point_two = diff_vec_waist.clone();
    waist_point_two = waist_point_two.rotate(90);
    var waist_point_two_added = waist_point_two.add(mid_point);

    var dist_waist_point_two_circle_center = waist_point_two_added.getDistance(point_one);

    if (dist_waist_point_two_circle_center > radius_one) {
        connected_shape.add(waist_point_two_added);
        drawControlCircle(paper, "w_2", waist_point_two_added, 2);
    }

    connected_shape.closed = true;
    connected_shape.smooth({
        type: 'catmull-rom'
    });
    connected_shape.fillColor = new paper.Color(1, 0, 0);

    circle_one = new paper.Path.Circle(point_one, radius_one);
    circle_two = new paper.Path.Circle(point_two, radius_two);
    //circle_one.strokecolor = 'black';
    //circle_two.strokecolor = 'black';
    circle_one.fillColor = new paper.Color(1, 0, 0);
    circle_two.fillColor = new paper.Color(1, 0, 0);

    paper.view.draw();

    previous_connected_shape = connected_shape;
}

function proj(v_one, v_two) {
    var compound = v_one.dot(v_two) / v_two.length;
    var proj = v_two.clone();
    proj = proj.normalize();
    proj = proj.multiply(compound);
    return proj;
}

function clamp(val, min, max) {
    if (val < min) {
        val = min;
    }
    else if (val > max) {
        val = max;
    }

    return val;
}

function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}