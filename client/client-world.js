class ClientWorld {
    constructor(world_width, world_height, player_client_id) {
        this._world_width = world_width; 
        this._world_height = world_height;
        this._player_client_id = player_client_id;

        this._players = {};
        this._food = {};
    }

    updatePlayer(player_representation) {
        var player = {};

        for (var attrname in player_representation) { player[attrname] = player_representation[attrname] }

        this._players[player_representation.id] = player;
    }

    updateFood(food_representation) {
        var food = {};

        for (var attrname in food_representation) { food[attrname] = food_representation[attrname] }

        this._food[food_representation.id] = food;
    }

    removePlayer(player_id) {
        if (this._players[player_id]) {
            delete this._players[player_id];
        }
    }

    removeFood(food_id) {
        if (this._food[food_id]) {
            delete this._food[food_id];
        }
    }

    getWorldWidth() {
        return this._world_width;
    }

    getWorldHeight() {
        return this._world_height;
    }

    getPlayers() {
        return this._players;
    }

    getClientPlayer() {
        return this._players[this._player_client_id];
    }

    getFood() {
        return this._food;
    }
}

module.exports = ClientWorld;