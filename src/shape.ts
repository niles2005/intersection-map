import { Graph } from "./graph";
import { Intersection } from "./intersection";


export class Shape extends Graph {
    private _points:string[];
    private _intersection:Intersection;
    private _data:any;
    constructor(intersection:Intersection,data:any) {
        super();
        this._intersection = intersection;
        this._data = data;
        let strPoints = data.points;
        if(strPoints) {
            this._points = strPoints.split(",");
        }
    }

    draw(ctx) {
        ctx.beginPath();
        let curve = false;
        let curveX0:number,curveY0:number;
        let x:number,y:number;
        
        for(let i=0;i<this._points.length;i+=2) {
            if(this._points[i].startsWith("c")) {
                let strX = this._points[i].substring(1);
                curveX0 = parseFloat(strX);
                curveY0 = parseFloat(this._points[i + 1]);
                curve = true;
                continue;
            }
            x = parseFloat(this._points[i]);
            y = parseFloat(this._points[i + 1]);
            if(i === 0) {
                ctx.beginPath();
                ctx.moveTo(x,y);
            } else {
                if(curve) {
                    ctx.quadraticCurveTo(curveX0,curveY0,x,y);
                    curve = false;
                } else {
                    ctx.lineTo(x,y);
                }
            }
        }
        ctx.closePath();
        ctx.fillStyle = this._data.fillStyle ? this._data.fillStyle : "lightgreen";
        ctx.fill();
        ctx.restore();
    }
}