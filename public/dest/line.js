import { Graph } from "./graph";
export class Line extends Graph {
    constructor(intersection, data) {
        super();
        this._intersection = intersection;
        this._data = data;
        this._p1 = data.p1;
        this._p2 = data.p2;
    }
    draw(ctx) {
        ctx.save();
        ctx.lineWidth = this._data.lineWidth || 1;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.lineCap = "butt";
        ctx.stroke();
        ctx.restore();
    }
}
