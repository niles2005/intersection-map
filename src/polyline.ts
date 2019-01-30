import { Graph } from "./graph";
import { Intersection } from "./intersection";

export class Polyline extends Graph {
  private _points: string[];

  static build(data: any, intersection?: Intersection) {
    return new Polyline(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._intersection = intersection;
    let strPoints = data.points;
    if (strPoints) {
      this._points = strPoints.split(",");
      for (let i = 0; i < this._points.length; i++) {
        this._points[i] = this._points[i].trim();
      }
    }
    this._data.strokeStyle = this._data.strokeStyle || "black";
    this._data.lineWith = this._data.lineWith || 1;
  }

  draw(ctx) {
    let curve = false;
    let curveX: number, curveY: number;
    let x: number, y: number;
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < this._points.length; i += 2) {
      if (this._points[i][0] === "c") { //startsWith("c")
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
      } else {
        if (curve) {
          ctx.quadraticCurveTo(curveX, curveY, x, y);
          curve = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
    }
    ctx.strokeStyle = this._data.strokeStyle;
    ctx.lineWith = this._data.lineWith;
    ctx.stroke();
    ctx.restore();
  }
}
