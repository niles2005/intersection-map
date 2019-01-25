import { Graph } from "./graph";
export class Shape extends Graph {
    constructor(intersection, data) {
        super();
        this._intersection = intersection;
        this._data = data;
        let strPoints = data.points;
        if (strPoints) {
            this._points = strPoints.split(",");
            for (let i = 0; i < this._points.length; i++) {
                this._points[i] = this._points[i].trim();
            }
        }
    }
    draw(ctx) {
        let curve = false;
        let curveX, curveY;
        let x, y;
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i < this._points.length; i += 2) {
            if (this._points[i].startsWith("c")) {
                let strX = this._points[i].substring(1);
                curveX = parseFloat(strX);
                curveY = parseFloat(this._points[i + 1]);
                curve = true;
                continue;
            }
            x = parseFloat(this._points[i]);
            y = parseFloat(this._points[i + 1]);
            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
            else {
                if (curve) {
                    ctx.quadraticCurveTo(curveX, curveY, x, y);
                    curve = false;
                }
                else {
                    ctx.lineTo(x, y);
                }
            }
        }
        ctx.closePath();
        if (this._data.fillStyle) {
            ctx.fillStyle = this._data.fillStyle;
            ctx.fill();
        }
        if (this._data.strokeStyle) {
            ctx.strokeStyle = this._data.strokeStyle;
            ctx.lineWith = this._data.lineWith || 1;
            ctx.stroke();
        }
        ctx.restore();
    }
}
