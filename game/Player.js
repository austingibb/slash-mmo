var SAT = require('SAT');
var lerp = require('lerp');
var math = require('mathjs');
var LineSegment = require('./LineSegment.js');
var slashMathUtils = require('./SlashMathUtils.js')

class Player {
    // A way of construction a player given a world position, starting point value, and delegate functions. The delegate functions are described within this constructor. They don't need to be defined as there are default functions available.
    constructor(initial_x, initial_y, starting_points) {
        // private member variables
        this._state = Player.State.IDLE;

        // current score points for the player
        this._points = starting_points;

        // the time that has passed since the last slash
        this._time_since_slash = 0;
        // the required time before the player's tail will be to recoiled back in
        this._extending_time_required = 0;
        // the required time before the player will be finished extending
        this._extended_time_required = 0;
        // the required time before the player will be finished recoiling
        this._recoil_time_required = 0;
        // the time before the player may slash again
        this._cooldown_required = 0;

        // the segment representing the player
        this._segment = new LineSegment(initial_x, initial_y, initial_x, initial_y);

        // old tail point used for linear interpolation
        this._old_tail_point = [initial_x, initial_y];
        // the point to extend to
        this._target_head_point = [initial_x, initial_y];
        // the current slash range of the player
        this._slash_radius = this._slashRadiusFromPoints(this._points);
    };

    // sets up this player to slash if they are able 
    slashTo(to_x, to_y) {
        if (this._state == Player.State.IDLE) {
            var current_x = this._segment.getPointTwo().x;
            var current_y = this._segment.getPointTwo().y;

            var distanceSquared = math.distanceSquared([current_x, current_y], [to_x, to_y]);
            // if the distance is greater than the radius the slash point will be on the circle around the player head.
            if (distanceSquared > this._radius * this._radius) {
                var closest_point_on_circle = slashMathUtils.ClosestPointOnCircle(current_x, current_y, to_x, to_y, this._radius, math.sqrt(distance));
                to_x = closest_point_on_circle.x;
                to_y = closest_point_on_circle.y;

                // make slash point distance match the radius because it will be on the circle
                distance = this._radius;
            }

            this._cooldown_required = this._getCooldownTime(distance, this._points);
            this._transition_time_required = this._getTransitionTime(distance, this._points);

            this._time_since_slash = 0;

            // perform the head movement which effectively performs the "slash"
            this._segment.updatePointTwo(to_x, to_y);

            // keep track of old tail position. This is needed because of the typical nature of the interpolation formulas current val = (old val, target val, alpha val). 
            this._old_tail_point = this._segment.getPointOne().slice(0);

            // set appropriate flags for slash
            this._dot_mode = false;
            this._waiting_for_cooldown = true;
        }
    }

    // update player slash transition, cooldown time, and point decay
    update(delta) {
        // have to update this every time to keep time count accurate
        this._time_since_slash += delta;

        // if this player is waiting for cooldown check if the updated time surpasses the cooldown time required and update accordingly
        if (this._waiting_for_cooldown && this._time_since_slash >= this._cooldown_required) {
            this._waiting_for_cooldown = false;
        }

        // if transition to dot mode is still happening
        if (!this._dot_mode) {
            // determine the normalized (0-1 for the amount of time passed out of the transition time required) progression
            var normalized_progression = (this._time_since_slash) / this._transition_time_required;

            // if we are still transitioning update the tail of the player according to linear interpolation
            if (normalized_progression < 1.0) {
                var new_tail_point_x = this._interpolationFunction(this._old_tail_point[0], this._segment.getPointTwo()[0], normalized_progression);
                var new_tail_point_y = this._interpolationFunction(this._old_tail_point[1], this._segment.getPointTwo()[1], normalized_progression);

                this._segment.updatePointOne(new_tail_point_x, new_tail_point_y);
            } else { // otherwise  we have just finished the transition
                // make the points the same for "dot mode"
                this._segment.updatePointOne(this._segment.getPointTwo()[0], this._segment.getPointTwo()[1]);
                this._dot_mode = true;
            }
        }

        // determine how many points have decayed
        var decayPoints = this._getDecayPoints(delta, this._slash_radius, this._points);

        // only calculate radius if points is actually changed
        if (decayPoints > 0) {
            points -= decayPoints;
            this._slash_radius = this._slashRadiusFromPoints(this._points);
        }
    }

    // Increase the player point count. Added points must be positive or nothing will change.
    feed(added_points) {
        if (added_points > 0) {
            this._points += added_points;
            this._radius = this._radiusFromPoints(this._points);
        }
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

    getState() {
        return this._state;
    }

    _extendInterpolationFunction(oldVal, newVal, alpha) {
        return newVal;
    }

    _recoilInterpolationFunction(oldVal, newVal, alpha) {
        return lerp(oldVal, newVal, alpha);
    }

    // Default function for decay given delta and points. Ignores points and always reduces at the same rate.
    _getDecayPoints(delta, radius, points) {
        return delta / 1000;
    }

    // converts the points to the desired radius (allowable slash area) 
    _slashRadiusFromPoints(points) {
        return math.sqrt(points / math.pi);
    }

    // provides the default cooldown time given the radius of a slash
    _getCooldownTime(radius, points) {
        return 0;
    }

    // provides the default for how long it will take for the head to shoot out for slash
    _getExtendTransitionTime(radius, points) {
        return 0;
    }

    // provides the default for how long the player will sit between extend and recoil transitions
    _getExtendedTime(radius, points) {
        return 0;
    }
}

Player.State = {
    EXTENDING: "extending",
    EXTENDED: "extended",
    RETRACTING: "retracting",
    COOLDOWN: "cooldown",
    IDLE: "idle"
};

module.exports = Player;