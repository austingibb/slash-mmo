var SAT = require('./SAT.js');
var lerp = require('lerp');
var math = require('mathjs');
var LineSegment = require('./LineSegment.js');
var SlashMathUtils = require('./SlashMathUtils.js')

class Player {
    // A way of construction a player given a world position, starting point value, and delegate functions. The delegate functions are described within this constructor. They don't need to be defined as there are default functions available.
    constructor(id, initial_x, initial_y, starting_points) {
        // unique id
        this._id = id;

        // the segment representing the player
        this._segment = new LineSegment(0, 0, 0, 0);

        this._head_circle = new SAT.Circle(this.getHeadPos(), 0);
        this._tail_circle = new SAT.Circle(this.getTailPos(), 0);

        // used for collision detection
        this._quad_tree_object = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            player: this
        }

        // old tail point used for linear interpolation
        this._old_tail_point = new SAT.Vector();
        // the point to extend to
        this._target_head_point = new SAT.Vector();
        // used for determining who wins when both crossing players are extending
        this._previous_head_point = new SAT.Vector();

        this.initialize(initial_x, initial_y, starting_points);
    };

    initialize(x, y, starting_points) {
        // private member variables
        this._state = Player.State.IDLE;

        // current score points for the player
        this._points = starting_points;
        this._time_in_state = 0;
        this._time_since_slash = 0;
        this._extend_time = 0;
        this._extend_time_before = 0;
        this._extended_time = 0;
        this._extended_time_before = 0;
        this._recoil_time = 0;
        this._recoil_time_before = 0;
        this._cooldown_time = 0;
        this._cooldown_time_before = 0;

        // used to determine if the various transitions complete correctly
        this._extend_finalized = true;
        this._recoil_finalized = true;

        this._segment.updatePointOne(x, y);
        this._segment.updatePointTwo(x, y);

        // set quad tree object values for collision detection
        this._quad_tree_object.x = x;
        this._quad_tree_object.y = y;
        this._quad_tree_object.width = 0;
        this._quad_tree_object.height = 0;

        // set transition point values to current position
        this._old_tail_point.x = x;
        this._old_tail_point.y = y;
        this._target_head_point.x = x;
        this._target_head_point.y = y;
        this._previous_head_point.x = x;
        this._previous_head_point.y = y;

        this._slash_radius = this._slashRadiusFromPoints(this._points);

        var max_vulnerable_radius = this._getMaximumVulnerableRadius(this._slash_radius, this._points);
        var min_vulnerable_radius = this._getMinimumVulnerableRadius(this._slash_radius, this._points);

        this._head_circle.r = max_vulnerable_radius;
        this._tail_circle.r = max_vulnerable_radius;

        this._current_max_vulnerable_radius = max_vulnerable_radius;
        this._current_min_vulnerable_radius = min_vulnerable_radius;
    }

    // sets up this player to slash if they are able 
    slashTo(to_x, to_y) {
        if (this._state == Player.State.IDLE) {
            var current_x = this._segment.getPointTwo().x;
            var current_y = this._segment.getPointTwo().y;

            var distance = math.distance([current_x, current_y], [to_x, to_y]);
            // if the distance is greater than the radius the slash point will be on the circle around the player head.
            if (distance > this._slash_radius) {
                var closest_point_on_circle = SlashMathUtils.closestPointOnCircle(current_x, current_y, to_x, to_y, this._slash_radius, distance);
                to_x = closest_point_on_circle[0];
                to_y = closest_point_on_circle[1];

                // make slash point distance match the radius because it will be on the circle
                distance = this._slash_radius;
            }

            this._extend_time = this._getExtendTransitionTime(distance, this._points);
            this._extend_time_before = 0;
            this._extended_time = this._getExtendedTime(distance, this._points);
            this._extended_time_before = this._extend_time;
            this._recoil_time = this._getRecoilTransitionTime(distance, this._points);
            this._recoil_time_before = this._extended_time_before + this._extended_time;
            this._cooldown_time = this._getCooldownTime(distance, this._points);
            this._cooldown_time_before = this._recoil_time_before + this._recoil_time;
            this._total_time = this._cooldown_time_before + this._cooldown_time;

            this._extend_finalized = false;
            this._recoil_finalized = false;

            this._time_since_slash = 0;
            this._state = Player.State.EXTENDING;
            // keep track of old tail position/target head position. This is needed because of the typical nature of the interpolation formulas current val = (old val, target val, alpha val). 
            this._target_head_point.x = to_x;
            this._target_head_point.y = to_y;
            this._old_tail_point.x = this._segment.getPointOne().x;
            this._old_tail_point.y = this._segment.getPointOne().y;

            this._current_min_vulnerable_radius = this._getMinimumVulnerableRadius(this._slash_radius, this._points);
            this._current_max_vulnerable_radius = this._getMaximumVulnerableRadius(this._slash_radius, this._points);
        }
    }

    // update player slash transition, cooldown time, and point decay
    update(delta) {
        // have to update this every time to keep time count accurate
        this._time_since_slash += delta;
        this._time_in_state += delta;

        var stateBefore = this._state;
        if (this._state != Player.State.IDLE && this._state != Player.State.DEAD) {
            // if the segment changes at all, recalculate the quad tree values
            var recalculate_quad_tree_object = false;
            // do appropriate transitions for the current time
            if (this._time_since_slash < this._extended_time_before) {
                if (this._state != Player.State.EXTENDING) {
                    this._state = Player.State.EXTENDING;
                }
                // determine the normalized (0-1 for the amount of time passed out of the transition time required) progression
                var normalized_progression = this._time_since_slash / this._extend_time;

                // update the vulnerable circle radii
                var radius_min_max_diff = this._current_max_vulnerable_radius - this._current_min_vulnerable_radius;
                this._head_circle.r = SlashMathUtils.map(normalized_progression, 0, 1, this._current_min_vulnerable_radius, this._current_min_vulnerable_radius + radius_min_max_diff / 2);
                this._tail_circle.r = SlashMathUtils.map(normalized_progression, 0, 1, this._current_min_vulnerable_radius + radius_min_max_diff, this._current_min_vulnerable_radius + radius_min_max_diff / 2);

                var new_head_point_x = this._extendInterpolationFunction(this._segment.getPointOne().x, this._target_head_point.x, normalized_progression);
                var new_head_point_y = this._extendInterpolationFunction(this._segment.getPointOne().y, this._target_head_point.y, normalized_progression);

                this._previous_head_point.x = this.getHeadPos().x;
                this._previous_head_point.y = this.getHeadPos().y;

                this._segment.updatePointTwo(new_head_point_x, new_head_point_y);
                recalculate_quad_tree_object = true;
            }
            else if (this._time_since_slash < this._recoil_time_before) {
                if (this._state != Player.State.EXTENDED) {
                    this._state = Player.State.EXTENDED;
                }
            }
            else if (this._time_since_slash < this._cooldown_time_before) {
                if (this._state != Player.State.RECOILING) {
                    this._state = Player.State.RECOILING;
                }

                // determine the normalized (0-1 for the amount of time passed out of the transition time required) progression
                var normalized_progression = (this._time_since_slash - this._recoil_time_before) / this._recoil_time;

                var radius_min_max_diff = this._current_max_vulnerable_radius - this._current_min_vulnerable_radius;
                this._head_circle.r = SlashMathUtils.map(normalized_progression, 0, 1, this._current_min_vulnerable_radius + radius_min_max_diff / 2, this._current_max_vulnerable_radius);
                this._tail_circle.r = SlashMathUtils.map(normalized_progression, 0, 1, this._current_min_vulnerable_radius + radius_min_max_diff / 2, this._current_min_vulnerable_radius);

                var new_tail_point_x = this._recoilInterpolationFunction(this._old_tail_point.x, this._target_head_point.x, normalized_progression);
                var new_tail_point_y = this._recoilInterpolationFunction(this._old_tail_point.y, this._target_head_point.y, normalized_progression);

                this._segment.updatePointOne(new_tail_point_x, new_tail_point_y);
                recalculate_quad_tree_object = true;
            }
            else if (this._time_since_slash < this._total_time) {
                if (this._state != Player.State.COOLDOWN) {
                    this._state = Player.State.COOLDOWN;
                }
            }
            else if (this._state != Player.State.IDLE) {
                this._state = Player.State.IDLE;
            }

            if (!this._extend_finalized && this._state > Player.State.EXTENDING) {
                this._previous_head_point.x = this.getHeadPos().x;
                this._previous_head_point.y = this.getHeadPos().y;

                var radius_min_max_diff = this._current_max_vulnerable_radius - this._current_min_vulnerable_radius;
                this._head_circle.r = this._current_min_vulnerable_radius + radius_min_max_diff / 2;
                this._tail_circle.r = this._current_min_vulnerable_radius + radius_min_max_diff / 2;

                this._segment.updatePointTwo(this._target_head_point.x, this._target_head_point.y);

                recalculate_quad_tree_object = true;
                this._extend_finalized = true;
            }

            if (!this._recoil_finalized && this._state > Player.State.RECOILING) {
                this._head_circle.r = this._current_max_vulnerable_radius;
                this._tail_circle.r = this._current_max_vulnerable_radius;

                this._segment.updatePointOne(this._target_head_point.x, this._target_head_point.y);

                recalculate_quad_tree_object = true;
                this._recoil_finalized = true;
            }

            if (recalculate_quad_tree_object) {
                this._recalculateQuadTreeObjectBoundingCircles();
            }
        }

        if (stateBefore != this._state) {
            this._time_in_state = 0;
        }

        // determine how many points have decayed
        var decayPoints = this._getDecayPoints(delta, this._slash_radius, this._points);

        // only calculate radius if points is actually changed
        if (decayPoints > 0) {
            this._points -= decayPoints;
            this._slash_radius = this._slashRadiusFromPoints(this._points);
        }
    }

    winsEncounter(otherPlayer) {
        if (this.getState() > Player.State.EXTENDED && otherPlayer.getState() > Player.State.EXTENDED) {
            return this.isLongerThan(otherPlayer);
        }

        if (this._state < otherPlayer._state) {
            return true;
        }
        else if (this._state > otherPlayer._state) {
            return false;
        }

        var head_pos = this.getHeadPos();
        var tail_pos = this.getTailPos();
        var other_head_pos = otherPlayer.getHeadPos();
        var other_tail_pos = otherPlayer.getTailPos();
        var intersect_point = math.intersect([tail_pos.x, tail_pos.y], [head_pos.x, head_pos.y], [other_tail_pos.x, other_tail_pos.y], [other_head_pos.x, other_head_pos.y]);

        var intersection_within_expansion = SlashMathUtils.pointInRect(intersect_point[0], intersect_point[1], head_pos.x, head_pos.y, this._previous_head_point.x, this._previous_head_point.y);
        var other_intersection_within_expansion = SlashMathUtils.pointInRect(intersect_point[0], intersect_point[1], other_head_pos.x, other_head_pos.y, otherPlayer._previous_head_point.x, otherPlayer._previous_head_point.y);

        if (intersection_within_expansion && other_intersection_within_expansion) {
            return this.isLongerThan(otherPlayer);
        }
        else if (intersection_within_expansion) {
            return true;
        }
        else if (other_intersection_within_expansion) {
            return false;
        }
        else {
            return this.isLongerThan(otherPlayer);
        }
    }

    isLongerThan(otherPlayer) {
        var head_pos = this.getHeadPos();
        var tail_pos = this.getTailPos();
        var other_head_pos = otherPlayer.getHeadPos();
        var other_tail_pos = otherPlayer.getTailPos();

        var length_squared = math.square(head_pos.x - tail_pos.x) + math.square(head_pos.y - tail_pos.y);
        var other_length_squared = math.square(other_head_pos.x - other_tail_pos.x) + math.square(other_head_pos.y - other_tail_pos.y);

        return length_squared > other_length_squared;
    }

    die() {
        this._state = Player.State.DEAD;
        this._time_in_state = 0;
    }

    crossesOther(otherPlayer) {
        return this._segment.crossesOther(otherPlayer._segment);
    }

    // Increase the player point count. Added points must be positive or nothing will change.
    feed(added_points) {
        if (added_points > 0) {
            this._points += added_points;
            this._slash_radius = this._slashRadiusFromPoints(this._points);
        }
    }

    getQuadTreeObject() {
        return this._quad_tree_object;
    }

    getViewPort() {
        return this._view_port;
    }

    getPolygon() {
        return this._segment.getPolygon();
    }

    getHeadCircle() {
        return this._head_circle;
    }

    getTailCircle() {
        return this._tail_circle;
    }

    // simply returns the internally updated radius
    getSlashRadius() {
        return this._slash_radius;
    }

    // return second point of the player segment which is the "head"
    getHeadPos() {
        return this._segment.getPointTwo();
    }

    // return first point of the player segment which is the "tail"
    getTailPos() {
        return this._segment.getPointOne();
    }

    getPoints() {
        return this._points;
    }

    getState() {
        return this._state;
    }

    getId() {
        return this._id;
    }

    getTimeInState() {
        return this._time_in_state;
    }

    _recalculateQuadTreeObjectBoundingSegment() {
        var point_one_x = this._segment.getPointOne().x;
        var point_one_y = this._segment.getPointOne().y;
        var point_two_x = this._segment.getPointTwo().x;
        var point_two_y = this._segment.getPointTwo().y;
        this._quad_tree_object.x = math.min(point_one_x, point_two_x);
        this._quad_tree_object.y = math.min(point_one_y, point_two_y);
        this._quad_tree_object.width = math.abs(point_one_x - point_two_x);
        this._quad_tree_object.height = math.abs(point_one_y - point_two_y);
    }

    _recalculateQuadTreeObjectBoundingCircles() {
        SlashMathUtils.updateQuadTreeObjectWithCircleBounds(this._tail_circle, this._head_circle, this._quad_tree_object);
    }

    _extendInterpolationFunction(oldVal, newVal, alpha) {
        return lerp(oldVal, newVal, alpha);
    }

    _recoilInterpolationFunction(oldVal, newVal, alpha) {
        return lerp(oldVal, newVal, alpha);
    }

    // Default function for decay given delta and points. Ignores points and always reduces at the same rate.
    _getDecayPoints(delta, radius, points) {
        if (points <= 5) {
            return 0;
        }

        return points * delta / 70;
    }

    // converts the points to the desired radius (allowable slash area) 
    _slashRadiusFromPoints(points) {
        return 4 + math.sqrt(points);
    }

    // provides the default cooldown time given the radius of a slash
    _getCooldownTime(radius, points) {
        return 0;
    }

    // provides the default for how long it will take for the head to shoot out for slash
    _getExtendTransitionTime(radius, points) {
        return .03 + radius / 40;
    }

    _getRecoilTransitionTime(radius, points) {
        return .07 + radius / 30;
    }

    // provides the default for how long the player will sit between extend and recoil transitions
    _getExtendedTime(radius, points) {
        return .09;
    }

    _getMaximumVulnerableRadius(radius, points) {
        return radius / 15;
    }

    _getMinimumVulnerableRadius(radius, points) {
        return radius / 30;
    }
}

Player.State = {
    EXTENDING: 0,
    EXTENDED: 1,
    RECOILING: 2,
    COOLDOWN: 3,
    IDLE: 4,
    DEAD: 5
};

module.exports = Player;