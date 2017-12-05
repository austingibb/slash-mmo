var Quadtree = require('quadtree-lib');
var Player = require('./Player.js');
var Food = require('./Food.js');
var SAT = require('./SAT.js');
var SlashMathUtils = require('./SlashMathUtils.js');

class World {
    constructor(world_width, world_height, food_max) {
        this._players = {};
        this._food = {};
        this._food_max = food_max;
        this._food_count = 0;
        this._food_id = 0;
        this._world_width = world_width;
        this._world_height = world_height;
        this._quad_tree = new Quadtree({
            width: world_width,
            height: world_height,
            maxElements: 3
        });

        this._maintainFoodMax();
    }

    playerSlash(playerId, x, y) {
        var player = this._players[playerId];
        player.slashTo(x, y);
    }

    addPlayer(id) {
        if (!this._players[id]) {
            var player = new Player(id, this._world_width * Math.random(), this._world_height * Math.random(), World.STARTING_POINTS);
            this._quad_tree.push(player.getQuadTreeObject(), true);
            this._players[id] = player;
        }
    }

    clearFood(id) {
        if (this._food[id]) {
            this._quad_tree.remove(this._food[id].getQuadTreeObject());
            delete this._food[id];
            this._food_count--;
        }
    }

    _maintainFoodMax() {
        while (this._food_count < this._food_max) {
            var food = new Food(this._food_id, this._world_width * Math.random(), this._world_height * Math.random(),
                SlashMathUtils.randomRange(World.MINIMUM_FOOD_MASS, World.MAXIMUM_FOOD_MASS));
            this._quad_tree.push(food.getQuadTreeObject());
            this._food[this._food_id] = food;
            this._food_count++;
            this._food_id++;
        }
    }

    update(delta) {
        for (var playerId in this._players) {
            this._players[playerId].update(delta);
        }

        for (var playerId in this._players) {
            var player = this._players[playerId];
            if (player.getState() != Player.State.DEAD) {
                var colliding = this._quad_tree.colliding(player.getQuadTreeObject());
                colliding.forEach(function (otherQuadTreeObject) {
                    if (otherQuadTreeObject.player) {
                        var otherPlayer = otherQuadTreeObject.player;
                        if (player.crossesOther(otherPlayer)) {
                            if (player.getState() != Player.State.DEAD) {
                                if (player.winsEncounter(otherPlayer)) {
                                    otherPlayer.die();
                                }
                                else {
                                    player.die();
                                }
                            }
                        }
                    }
                    else if (otherQuadTreeObject.food) {
                        var food = otherQuadTreeObject.food;
                        if (SAT.testPolygonCircle(player.getPolygon(), food.getCircle())) {
                            player.feed(food.getMass() * World.FOOD_VALUE);
                            this.clearFood(food.getId());
                        }
                    }
                }, this);
            }
        }

        this._maintainFoodMax();
    }

    toClientRepresentation() {
        var world_representation = {};
        world_representation.food_list = {};
        for (var foodId in this._food) {
            var food = this._food[foodId];
            var food_representation = {};
            food_representation.id = food.getId();
            food_representation.x = food.getX();
            food_representation.y = food.getY();
            food_representation.radius = food.getRadius();
            world_representation.food_list[food.getId()] = food_representation;
        }

        world_representation.player_list = {};
        for (var playerId in this._players) {
            var player = this._players[playerId];
            var player_representation = {};
            player_representation.id = player.getId();
            player_representation.tail_x = player.getTailPos().x;
            player_representation.tail_y = player.getTailPos().y;
            player_representation.head_x = player.getHeadPos().x;
            player_representation.head_y = player.getHeadPos().y;
            player_representation.state = player.getState();
            player_representation.slash_radius = player.getSlashRadius();
            world_representation.player_list[player.getId()] = player_representation;
        }

        return world_representation;
    }
}

World.STARTING_POINTS = 10;
World.MINIMUM_FOOD_MASS = 0.5;
World.MAXIMUM_FOOD_MASS = 1;
World.FOOD_VALUE = 2;

module.exports = World;