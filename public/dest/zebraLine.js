import { Graph } from "./graph";
export class ZebraLine extends Graph {
    constructor(intersection, data) {
        super();
        this._data = data;
        this._p1 = data.p1;
        this._p2 = data.p2;
        this._num = data.num;
        this._zebraWidth = data.zebraWidth || 10;
    }
    draw(ctx) {
        ctx.save();
        let delta_x = this._p1.x - this._p2.x;
        let delta_y = this._p1.y - this._p2.y;
        let theta = Math.atan2(this._p2.y - this._p1.y, this._p2.x - this._p1.x);
        ctx.lineWidth = 2.8;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        for (let i = 0; i < this._num; i++) {
            let ratio = i / this._num;
            let pos_x = this._p1.x - ratio * delta_x;
            let pos_y = this._p1.y - ratio * delta_y;
            let x1 = pos_x + this._zebraWidth * Math.cos(theta - Math.PI / 2);
            let y1 = pos_y + this._zebraWidth * Math.sin(theta - Math.PI / 2);
            let x2 = pos_x + this._zebraWidth * Math.cos(theta + Math.PI / 2);
            let y2 = pos_y + this._zebraWidth * Math.sin(theta + Math.PI / 2);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineCap = "butt";
            ctx.stroke();
        }
        ctx.restore();
    }
}
