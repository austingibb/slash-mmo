var lerp = require('lerp');

module.exports = function () {
    return new Player();
};

function Player() {
    this.Update = Update;
    this.MoveTo = MoveTo;
    this._dotMode = false;
    this.GetRadius = GetRadius;
}

function MoveTo(x, y) {
    if (this._dotMode == true) {

    }
}

function Update(delta) {

}

function GetRadius() {

}


