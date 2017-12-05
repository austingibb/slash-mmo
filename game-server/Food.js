var SAT = require('./SAT.js');
var math = require('mathjs');

class Food {
    constructor(id, x, y, mass) {
        // unique food identifier
        this._id = id;

        this._mass = mass;
        this._radius = math.sqrt(mass / math.pi);
        this._circle = new SAT.Circle(new SAT.Vector(x, y), this._radius);

        this._quad_tree_object = {
            x: x - this._radius,
            y: y - this._radius,
            width: this._radius * 2,
            height: this._radius * 2,
            food: this
        }
    }

    getId() {
        return this._id;
    }

    getX() {
        return this._circle.pos.x;
    }

    getY() {
        return this._circle.pos.y;
    }

    getMass() {
        return this._mass;
    }

    getRadius() {
        return this._radius;
    }

    getCircle() {
        return this._circle;
    }

    getQuadTreeObject() {
        return this._quad_tree_object;
    }
}

module.exports = Food;