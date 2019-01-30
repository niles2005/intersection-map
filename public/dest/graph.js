"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graph = (function () {
    function Graph(data, intersection) {
        this._data = data;
        this._intersection = intersection;
    }
    Graph.prototype.drawBounds = function (ctx) {
        if (this._bounds) {
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            ctx.strokeRect(this._bounds.minX, this._bounds.minY, this._bounds.width, this._bounds.height);
        }
    };
    Graph.prototype.setFocusPoint = function (x, y) {
    };
    Graph.prototype.containPoint = function (x, y) {
        if (this._bounds) {
            return this._bounds.containPoint(x, y);
        }
    };
    Graph.prototype.initGui = function () {
    };
    Graph.prototype.destroyGui = function () {
        if (this._gui) {
            this._gui.destroy();
            this._gui = null;
        }
    };
    return Graph;
}());
exports.Graph = Graph;
