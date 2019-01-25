import { Graph } from "./graph";
export class Point extends Graph {
    constructor(intersection, x, y) {
        super();
        this._x = x;
        this._y = y;
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
