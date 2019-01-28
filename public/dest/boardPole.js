import { Graph } from "./graph";
import { Bounds } from "./utils/bounds";
export class BoardPole extends Graph {
    static build(data, intersection) {
        return new BoardPole(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._bounds = new Bounds();
        this._bounds.expandToIncludePoint(-12, -12);
        this._bounds.expandToIncludePoint(12, 12);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    }
    draw(ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        if (this._data.angle) {
            ctx.rotate(this._data.angle);
        }
        if (this._data.scale) {
            ctx.scale(this._data.scale.x, this._data.scale.y);
        }
        ctx.fillStyle = this._data.fillStyle || "black";
        ctx.beginPath();
        ctx.ellipse(0, 0, 3, 6, Math.PI / 2, 0, Math.PI * 2);
        ctx.fillRect(-12, 2.5, 24, 4);
        ctx.fill();
        ctx.restore();
    }
}
