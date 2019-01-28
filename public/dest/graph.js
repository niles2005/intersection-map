export class Graph {
    constructor(data, intersection) {
        this._data = data;
        this._intersection = intersection;
    }
    setFocusPoint(x, y) {
    }
    containPoint(x, y) {
        if (this._bounds) {
            return this._bounds.containPoint(x, y);
        }
    }
    initGui() {
        return this._gui;
    }
}
