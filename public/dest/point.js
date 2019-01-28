"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("./graph");
class Point extends graph_1.Graph {
    static build(data, intersection) {
        return new Point(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._x = data.x;
        this._y = data.y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    draw(ctx) {
        let r = 2;
        ctx.beginPath();
        ctx.arc(this._x, this._y, r, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}
exports.Point = Point;
