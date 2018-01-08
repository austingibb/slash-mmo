var PlayerState = require('constants').PlayerState;

class PlayerRenderer {
    constructor(paper, color, debug) {
        this._paper = paper;
        this._color = color;

        this._debug = debug;

        if (debug) {
            this._control_circles = {};
        }
    }

    _drawControlCircle(paper, id, point, radius) {
        if (this._control_circles[id]) {
            this._control_circles[id].remove();
        }

        this._control_circles[id] = new this._paper.Path.Circle(point, radius);
        this._control_circles[id].fillColor = new this._paper.Color(0, 0, 0);
    }

    cleanup() {
        if (this._circle_one) this._circle_one.remove();
        if (this._circle_two) this._circle_two.remove();

        if (this._connected_shape) this._connected_shape.remove();
    }

    render(point_one, point_two, radius_one, radius_two) {
        var waist = radius_two;

        if (this._connected_shape) {
            this._connected_shape.remove();
        }

        if (this._circle_one) {
            this._circle_one.remove();
        }

        if (this._circle_two) {
            this._circle_two.remove();
        }

        this._connected_shape = new this._paper.Path();

        var diff_vec = point_two.clone();
        diff_vec = diff_vec.subtract(point_one);

        var diff_vec_radius_one = diff_vec.clone();
        diff_vec_radius_one = diff_vec_radius_one.normalize();
        diff_vec_radius_one = diff_vec_radius_one.multiply(radius_one);

        if(this._debug) this._drawControlCircle(this._paper, "dv_1", diff_vec_radius_one.add(point_one), 2);

        var diff_vec_radius_two = diff_vec.clone();
        diff_vec_radius_two = diff_vec_radius_two.multiply(-1);
        diff_vec_radius_two = diff_vec_radius_two.normalize();
        diff_vec_radius_two = diff_vec_radius_two.multiply(radius_two);

        if (this._debug) this._drawControlCircle(this._paper, "dv_2", point_two.add(diff_vec_radius_two), 2);

        var mid_point_relative = diff_vec.clone();
        mid_point_relative = mid_point_relative.subtract(diff_vec_radius_one);
        mid_point_relative = mid_point_relative.add(diff_vec_radius_two.multiply(.6));
        mid_point_relative = mid_point_relative.multiply(0.2);
        mid_point_relative = mid_point_relative.add(diff_vec_radius_one);

        var mid_point = mid_point_relative.add(point_one);

        if (this._debug) this._drawControlCircle(this._paper, "m_1", mid_point, 2);

        var diff_vec_waist = diff_vec.clone();
        diff_vec_waist = diff_vec_waist.normalize();
        diff_vec_waist = diff_vec_waist.multiply(waist);

        var angle_shift = 360 / 12;
        var angle_index;
        for (angle_index = 2; angle_index < 10; angle_index++) {
            var angle = angle_index * angle_shift + 0.5 * angle_shift;
            var rotated_diff_vec = diff_vec_radius_one.clone();
            rotated_diff_vec = rotated_diff_vec.rotate(angle);

            var rotated_diff_vec_added = rotated_diff_vec.add(point_one);

            this._connected_shape.add(rotated_diff_vec_added);

            if (this._debug) this._drawControlCircle(this._paper, "c_" + angle_index + "_1", rotated_diff_vec_added, 2);
        }

        var waist_point_one = diff_vec_waist.clone();
        waist_point_one = waist_point_one.rotate(-90);

        var waist_point_one_added = waist_point_one.add(mid_point);
        var dist_waist_point_one_circle_center = waist_point_one_added.getDistance(point_one);

        if (dist_waist_point_one_circle_center > radius_one) {
            this._connected_shape.add(waist_point_one_added);
            if (this._debug) this._drawControlCircle(this._paper, "w_1", waist_point_one_added, 2);
        }

        for (angle_index = 2; angle_index < 10; angle_index++) {
            var angle = angle_index * angle_shift + 0.5 * angle_shift;
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

            this._connected_shape.add(rotated_diff_vec_added);

            if (this._debug) this._drawControlCircle(this._paper, "c_" + angle_index + "_1", rotated_diff_vec_added, 2);
        }

        var waist_point_two = diff_vec_waist.clone();
        waist_point_two = waist_point_two.rotate(90);
        var waist_point_two_added = waist_point_two.add(mid_point);

        var dist_waist_point_two_circle_center = waist_point_two_added.getDistance(point_one);

        if (dist_waist_point_two_circle_center > radius_one) {
            this._connected_shape.add(waist_point_two_added);
            if (this._debug) this._drawControlCircle(this._paper, "w_2", waist_point_two_added, 2);
        }
        
        this._connected_shape.closed = true;
        this._connected_shape.smooth({
            type: 'catmull-rom'
        });
        this._connected_shape.fillColor = this._color;

        this._circle_one = new this._paper.Path.Circle(point_one, radius_one);
        this._circle_two = new this._paper.Path.Circle(point_two, radius_two);
        this._circle_one.fillColor = this._color;
        this._circle_two.fillColor = this._color;
    }
}

module.exports = PlayerRenderer;