import { LineYellowSolid } from "./line-yellowSolid";
export class LineYellowDashed extends LineYellowSolid {
    static build(data, intersection) {
        return new LineYellowDashed(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
    }
    draw(ctx) {
        console.log("xxx");
        ctx.save();
        ctx.lineWidth = this._data.lineWidth || 1;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.lineCap = "butt";
        ctx.setLineDash([25, 50]);
        ctx.stroke();
        ctx.restore();
    }
}
