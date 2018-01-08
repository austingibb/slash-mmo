var PlayerRenderer = require('./player-renderer.js');
var FoodRenderer = require('./food-renderer.js');
var Constants = require('./constants.js');
var PlayerState = Constants.PlayerState;

class WorldRenderer {
    constructor(paper, world) {
        this._paper = paper;
        this._world = world;

        this._player_renderers = {};
        this._food_renderers = {};
        this._grid_lines = {};
    }

    onResize(canvas_width, canvas_height) {
        this._calculateOffset(canvas_width, canvas_height);
        this._calculatePixelsPerWorldUnit(canvas_width, canvas_height);
    }

    _calculateOffset(canvas_width, canvas_height) {
        this._offset_x = 0;
        this._offset_y = 0;

        this._render_width = Math.min(canvas_width, canvas_height);

        if (this._render_width == canvas_width) {
            this._offset_y = (canvas_height - canvas_width) / 2;
        }
        else {
            this._offset_x = (canvas_width - canvas_height) / 2;
        }

    }

    _calculatePixelsPerWorldUnit(canvas_width, canvas_height) {
        var client_player = this._world.getClientPlayer();
        this._view_port_size = 3 * client_player.slash_radius;
        this._ppwu = this._render_width / this._view_port_size;
    }

    renderAll(canvas_width, canvas_height) {
        if (this._world.getClientPlayer()) {
            this.onResize(canvas_width, canvas_height);

            this.renderGrid();
            this.renderFood();
            this.renderPlayers();

            this._paper.view.draw();
        }
    }

    renderGrid() {
        var width_index = 0,
            height_index = 0;

        var zero_height = this.worldToCanvasY(0);
        var full_height = this.worldToCanvasY(this._world.getWorldHeight());
        var zero_width = this.worldToCanvasX(0);
        var full_width = this.worldToCanvasX(this._world.getWorldWidth());

        for (width_index = 0; width_index <= this._world.getWorldWidth(); width_index += 2) {
            var grid_index_name = 'grid_width_' + width_index;
            var width_pos = this.worldToCanvasX(width_index);

            if (!this._grid_lines[grid_index_name]) {
                var point_one = new this._paper.Point(width_pos, zero_height);
                var point_two = new this._paper.Point(width_pos, full_height);

                this._grid_lines[grid_index_name] = new this._paper.Path.Line(point_one, point_two);
                this._grid_lines[grid_index_name].strokeColor = 'black';
            }
            else {
                var point_one = new this._paper.Point(width_pos, zero_height);
                var point_two = new this._paper.Point(width_pos, full_height);

                this._grid_lines[grid_index_name].removeSegments();
                this._grid_lines[grid_index_name].add(point_one);
                this._grid_lines[grid_index_name].add(point_two);
            }
        }

        for (height_index = 0; height_index <= this._world.getWorldHeight(); height_index += 2) {
            var grid_index_name = 'grid_height_' + height_index;
            var height_pos = this.worldToCanvasY(height_index);

            if (!this._grid_lines[grid_index_name]) {
                var point_one = new this._paper.Point(zero_width, height_pos);
                var point_two = new this._paper.Point(full_width, height_pos);

                this._grid_lines[grid_index_name] = new this._paper.Path.Line(point_one, point_two);
                this._grid_lines[grid_index_name].strokeColor = 'black';
            }
            else {
                var point_one = new this._paper.Point(zero_width, height_pos);
                var point_two = new this._paper.Point(full_width, height_pos);

                this._grid_lines[grid_index_name].removeSegments();
                this._grid_lines[grid_index_name].add(point_one);
                this._grid_lines[grid_index_name].add(point_two);
            }
        }
    }

    renderFood() {
        var food_list = this._world.getFood();
        for (var food_id in food_list) {
            var food = food_list[food_id];

            var point = new this._paper.Point(this.worldToCanvasX(food.x), this.worldToCanvasY(food.y));
            var radius = food.radius * this.getPixelsPerWorldUnit();

            if (!this._food_renderers[food_id]) {
                var color = new this._paper.Color(WorldRenderer.FOOD_COLORS[food_id % WorldRenderer.FOOD_COLORS.length]);
                this._food_renderers[food_id] = new FoodRenderer(this._paper, color);
            }

            this._food_renderers[food_id].render(point, radius);
        }
    }

    renderPlayers() {
        var players = this._world.getPlayers();
        for (var player_id in players) {
            var player = players[player_id];

            var point_one;
            var point_two;

            var radius_one;
            var radius_two;

            if (player.state <= PlayerState.EXTENDED) {
                point_one = new this._paper.Point(this.worldToCanvasX(player.tail_x), this.worldToCanvasY(player.tail_y));
                point_two = new this._paper.Point(this.worldToCanvasX(player.head_x), this.worldToCanvasY(player.head_y));

                radius_one = player.tail_radius * this.getPixelsPerWorldUnit();
                radius_two = player.head_radius * this.getPixelsPerWorldUnit();
            } else {
                point_one = new this._paper.Point(this.worldToCanvasX(player.head_x), this.worldToCanvasY(player.head_y));
                point_two = new this._paper.Point(this.worldToCanvasX(player.tail_x), this.worldToCanvasY(player.tail_y));

                radius_one = player.head_radius * this.getPixelsPerWorldUnit();
                radius_two = player.tail_radius * this.getPixelsPerWorldUnit();
            }

            if (!this._player_renderers[player_id]) {
                var color = new this._paper.Color(WorldRenderer.PLAYER_COLORS[player_id % WorldRenderer.PLAYER_COLORS.length]);
                this._player_renderers[player_id] = new PlayerRenderer(this._paper, color, false);
            }

            this._player_renderers[player_id].render(point_one, point_two, radius_one, radius_two);
        }
    }

    renderBorders() {

    }

    renderVisionLimitation() {

    }

    removePlayer(player_id) {
        if (this._player_renderers[player_id]) {
            this._player_renderers[player_id].cleanup();
            delete this._player_renderers[player_id];
        }
    }

    removeFood(food_id) {
        if (this._food_renderers[food_id]) {
            this._food_renderers[food_id].cleanup();
            delete this._food_renderers[food_id];
        }
    }

    worldToCanvasX(coord) {
        var client_player = this._world.getClientPlayer();
        return this._worldToCanvas(coord, client_player.head_x);
    }

    worldToCanvasY(coord) {
        var client_player = this._world.getClientPlayer();
        return this._worldToCanvas(coord, client_player.head_y);
    }

    _worldToCanvas(coord, world_offset) {
        var canvas_coord = coord - world_offset + this._view_port_size / 2;
        canvas_coord *= this._ppwu;
        return canvas_coord;
    }

    canvasToWorldX(coord) {
        var client_player = this._world.getClientPlayer();
        return this._canvasToWorld(coord, client_player.head_x);
    }

    canvasToWorldY(coord) {
        var client_player = this._world.getClientPlayer();
        return this._canvasToWorld(coord, client_player.head_y);
    }

    _canvasToWorld(coord, world_offset) {
        var world_coord = coord / this.getPixelsPerWorldUnit();
        world_coord = world_coord + world_offset - this._view_port_size / 2;
        return world_coord;
    }

    getPixelsPerWorldUnit() {
        return this._ppwu;
    }
}

WorldRenderer.FOOD_COLORS = ["#011f4b", "#03396c", "#005b96", "#6497b1", "#b3cde0"];
WorldRenderer.PLAYER_COLORS = ["#966842", "#f44747", "#eedc31", "#7fdb6a"];

module.exports = WorldRenderer;