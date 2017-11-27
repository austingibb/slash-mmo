var lerp = require('lerp');
var math = require('mathjs');
var slashMathUtils = require('./SlashMathUtils.js')
var LineSegment = require('./LineSegment.js');

// Player class. Holds all data relevant to a specific player. AKA segment information, transition status, points, cooldown status, and radius. 

/*
A way of construction a player given a world position, starting point value, and delegate functions. The delegate functions are described within this constructor. They don't need to be defined as there are default functions available.
*/
module.exports = function Player(initial_x, initial_y, starting_points, givenInterpolationFunction, givenRadiusFromPoints, givenGetCooldownTime, givenGetTransitionTime, givenGetDecayPoints) {
    // public methods (see their comments for more info)
    this.update = update;
    this.crossesOther = crossesOther;
    this.slashTo = slashTo;
    this.feed = feed;
    this.getRadius = getRadius;
    this.getHeadPos = getHeadPos;
    this.getTailPos = getTailPos;
    this.isDot = isDot;
    this.isCoolingDown = isCoolingDown;

    // private internally used methods
    // the assignments here set the private method to the passed in function if it is defined, if not use the default function defined here

    // converts point count into radius size
    this._interpolationFunction = (givenInterpolationFunction != undefined ? givenInterpolationFunction : lerp);
    // converts point count into radius size
    this._radiusFromPoints = (givenRadiusFromPoints != undefined ? givenRadiusFromPoints : _defaultRadiusFromPoints);
    // gives the corresponding cooldown (time before next slash is allowed) for a slash distance/point count
    this._getCooldownTime = (givenGetCooldownTime != undefined ? givenGetCooldownTime : _defaultGetCooldownTime);
    // gives the corresponding tail recoil transition time for a slash distance/point count, this will not be allowed to ever go greater than cooldown time
    this._getTransitionTime = (givenGetTransitionTime != undefined ? givenGetTransitionTime : _defaultGetTransitionTime);
    // provides how many points should decay given 
    this._getDecayPoints = (givenGetDecayPoints != undefined ? givenGetDecayPoints : _defaultGetDecayPoints);

    // private member variables
    // dot mode indicates whether the line is actually a line or if the tail and the head are at the same point acting as a dot
    this._dot_mode = true;
    // used to determine if the cooldown is going on
    this._waiting_for_cooldown = false;
    // current score points for the player
    this._points = starting_points;
    // the time that has passed since the last slash
    this._time_since_slash = 0;
    // the time before the player may slash again
    this._cooldown_required = 0;
    // the time the player's tail will take to recoil back in
    this._transition_time_required = 0;

    // old tail point used for linear interpolation
    this._old_tail_point = [initial_x, initial_y];
    // the current slash range of the player
    this._radius = this._radiusFromPoints(this._points);
    // the player's current line head and tail positions
    this._segment = new LineSegment(initial_x, initial_y, initial_x, initial_y);
};

// sets up this player to slash if they are able 
function slashTo(to_x, to_y) {
    if (this._dot_mode == true && !this._waiting_for_cooldown) {
        var current_x = this._segment.getPointTwo()[0];
        var current_y = this._segment.getPointTwo()[1];

        var distance = math.distance([current_x, current_y], [to_x, to_y]);
        // if the distance is greater than the radius the slash point will be on the circle around the player head.
        if (distance > this._radius) {
            var closestPointOnCircle = slashMathUtils.ClosestPointOnCircle(current_x, current_y, to_x, to_y, this._radius, distance);
            to_x = closestPointOnCircle[0];
            to_y = closestPointOnCircle[1];

            // make slash point distance match the radius because it will be on the circle
            distance = this._radius;
        }

        this._cooldown_required = this._getCooldownTime(distance, this._points);
        this._transition_time_required = this._getTransitionTime(distance, this._points);

        // the transition should always finish before or exactly when the cooldown finishes,
        // so if the transition time will take longer than the cooldown set transition to be the cooldown time
        if (this._transition_time_required > this._cooldown_required)
        {
            this._transition_time_required = this._cooldown_required;
        }

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

// determines if this player's current line segment crosses another player's line segment.
function crossesOther(otherPlayer) {
    return this._segment.crossesOther(otherPlayer._segment);
}

// update player slash transition, cooldown time, and point decay
function update(delta) {
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
    var decayPoints = this._getDecayPoints(delta, this._radius, this._points);

    // only calculate radius if points is actually changed
    if (decayPoints > 0) {
        points -= decayPoints;
        this._radius = this._radiusFromPoints(this._points);
    }
}

// Increase the player point count. Added points must be positive or nothing will change.
function feed(added_points) {
    if (added_points > 0) {
        this._points += added_points;
        this._radius = this._radiusFromPoints(this._points);
    }
}

// simply returns the internally updated radius
function getRadius() {
    return this._radius;
}

// return second point of the player segment which is the "head"
function getHeadPos() {
    return this._segment.getPointTwo();
}

// return first point of the player segment which is the "tail"
function getTailPos() {
    return this._segment.getPointOne();
}

function isDot() {
    return this._dot_mode;
}

function isCoolingDown() {
    return this._waiting_for_cooldown;
}

// Default function for decay given delta and points. Ignores points and always reduces at the same rate.
function _defaultGetDecayPoints(delta, radius, points) {
    return delta / 1000;
}

// converts the points to the desired radius (allowable slash area) 
function _defaultRadiusFromPoints(points) {
    return math.sqrt(points / math.pi);
}

// provides the default cooldown time given the radius of a slash
function _defaultGetCooldownTime(radius, points) {
    return 100 * radius;
}

// provides the default how long it will take for the tail to shrink back in after slash
function _defaultGetTransitionTime(radius, points) {
    return _defaultGetCooldownTime(radius, points);
}


