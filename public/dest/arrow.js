import { Graph } from "./graph";
export class Arrow extends Graph {
    constructor(intersection, data) {
        super();
        this._points = [];
        this._intersection = intersection;
        this._data = data;
        let arrowPoints = Arrow.arrowShapes[data.name];
        let arr = arrowPoints.split(",");
        let curve = false;
        let curveX, curveY;
        for (let i = 0; i < arr.length; i += 2) {
            let strX = arr[i];
            let strY = arr[i + 1];
            if (strX.startsWith("c")) {
                strX = strX.substring(1);
                curveX = parseFloat(strX);
                curveY = parseFloat(strY);
                curve = true;
                continue;
            }
            let x = parseFloat(strX);
            let y = parseFloat(strY);
            if (curve) {
                this._points.push([curveX, curveY, x, y]);
                curve = false;
            }
            else {
                this._points.push([x, y]);
            }
        }
    }
    _drawShape(ctx) {
        ctx.beginPath();
        for (let i = 0; i < this._points.length; i++) {
            let p = this._points[i];
            if (i === 0) {
                ctx.moveTo(p[0], p[1]);
            }
            else {
                if (p.length === 4) {
                    ctx.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                }
                else {
                    ctx.lineTo(p[0], p[1]);
                }
            }
        }
    }
    draw(ctx) {
        ctx.save();
        if (this._data.translate) {
            ctx.translate(this._data.translate.x, this._data.translate.y);
        }
        if (this._data.angle) {
            ctx.rotate(this._data.angle);
        }
        if (this._data.scale) {
            ctx.scale(this._data.scale.x, this._data.scale.y);
        }
        ctx.fillStyle = this._data.fillStyle || "white";
        this._drawShape(ctx);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}
Arrow.arrowShapes = {
    direct: "0,52.4,-3.9,31.5,-1.4,31.5,-1.4,0,1.2,0,1.2,31.5,3.9,31.5",
    right: "-6.75,36,-3.15,49.9,-3.15,41.4,6.75,31.3,6.75,0,4.15,0,4.15,23.5,-3.15,30.2,-3.15,22.9",
    left: "6.75,36,3.15,49.9,3.15,41.4,-6.75,31.3,-6.75,0,-4.15,0,-4.15,23.5,3.15,30.2,3.15,22.9",
    "direct-right": "3.9,52.4,7.9,31.6,5.3,31.5,5.4,0.2,2.6,0,2.7,3.5,-4.1,10.3,-4.4,3,-7.9,15.8,-4.3,29.5,-4.3,20.9,2.6,14,2.8,31.5,0,31.4,3.8,52.3",
    "direct-left": "-3.9,52.4,-7.9,31.6,-5.3,31.5,-5.4,0.2,-2.6,0,-2.7,3.5,4.1,10.3,4.4,3,7.9,15.8,4.3,29.5,4.3,20.9,-2.6,14,-2.8,31.5,0,31.4,-3.8,52.3"
};
