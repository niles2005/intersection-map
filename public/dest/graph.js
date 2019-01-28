"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor(data, intersection) {
        this._data = data;
        this._intersection = intersection;
    }
    drawBounds(ctx) {
        if (this._bounds) {
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            ctx.strokeRect(this._bounds.minX, this._bounds.minY, this._bounds.width, this._bounds.height);
        }
    }
    setFocusPoint(x, y) {
    }
    containPoint(x, y) {
        if (this._bounds) {
            return this._bounds.containPoint(x, y);
        }
    }
    initGui() {
    }
    destroyGui() {
        if (this._gui) {
            this._gui.destroy();
            this._gui = null;
        }
    }
}
exports.Graph = Graph;
