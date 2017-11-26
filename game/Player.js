var lerp = require('lerp');
var math = require('mathjs');
var LineSegment = require('./LineSegment.js');

// Player class. Holds all data relevant to a specific player. Right now game balance constants/equations like mapping points to radius, starting points, cooldown rate, and decay rate are hardcoded.
// Adding actual methods of tweaking those with parameters would be good. 

module.exports = function Player(initial_x, initial_y) {
    this.update = update;
    this.crossesOther = crossesOther;
    this.slashTo = slashTo;
    this.feed = feed;
    this.getRadius = getRadius;

    this._dot_mode = true;
    this._points = 10;
    this._current_cooldown_required = 0;
    this._cooldown_start_time = 0;
    this._old_tail_point = [initial_x, initial_y];
    this._radius = radiusFromPoints(this._points);
    this._segment = new LineSegment(initial_x, initial_y, initial_x, initial_y);
};

function slashTo(to_x, to_y) {
    if (this._dot_mode == true) {
        var current_x = this._segment.getPointTwo()[0];
        var current_y = this._segment.getPointTwo()[1];

        var distanceSquared = math.square(to_x - current_x) + math.square(to_y - current_y);
        var fractionOfRadius = distanceSquared / math.square(this._radius);

        this._current_cooldown_required = fractionOfRadius * _getCooldownTime(this._points);
        this._cooldown_total_time = 0;

        this._segment.updatePointTwo(to_x, to_y);

        this._old_tail_point = this._segment.getPointOne().slice(0);

        this._dot_mode = false;
    }
}

function crossesOther(otherPlayer) {
    return this._segment.crossesOther(otherPlayer._segment);
}

function update(delta) {
    if (this._dot_mode == false) {
        var current_time = (new Date).getTime();
        this._cooldown_total_time += delta;
        var normalized_progression = (this._cooldown_total_time) / this._current_cooldown_required;

        if (normalized_progression < 1.0) {
            var new_tail_point_x = lerp(this._old_tail_point[0], this._segment.getPointTwo()[0], normalized_progression);
            var new_tail_point_y = lerp(this._old_tail_point[1], this._segment.getPointTwo()[1], normalized_progression);

            this._segment.updatePointOne(new_tail_point_x, new_tail_point_y);
        } else {
            this._segment.updatePointOne(this._segment.getPointTwo()[0], this._segment.getPointTwo()[1]);
            this._dot_mode = true;
        }
    }
}

function feed(added_points) {
    this._points += added_points;
}

function getRadius() {
    return this._radius;
}

function radiusFromPoints(points) {
    return math.sqrt(points / math.pi);
}

function _getCooldownTime(points) {
    return 8 * math.sqrt(points * 40);
}


