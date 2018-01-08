class FoodRenderer {
    constructor(paper, color) {
        this._paper = paper;
        this._color = color;
    }

    cleanup() {
        if (this._circle) this._circle.remove();
    }

    render(point, radius) {
        if (this._circle) {
            this._circle.remove();
        }

        this._circle = new this._paper.Path.Circle(point, radius);
        this._circle.fillColor = this._color;
    }
}

module.exports = FoodRenderer;
