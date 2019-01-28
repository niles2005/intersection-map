import { Graph } from "./graph";
import { Bounds } from './utils/bounds';
export class FlagPole extends Graph {
    static build(data, intersection) {
        return new FlagPole(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._bounds = new Bounds();
        this._bounds.expandToIncludePoint(-5, -5);
        this._bounds.expandToIncludePoint(5, 5);
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
        ctx.fillRect(-5, -1.5, 10, 3);
        ctx.fill();
        ctx.restore();
    }
}
