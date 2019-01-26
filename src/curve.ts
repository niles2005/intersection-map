import { Intersection } from "./intersection";
import { Graph } from "./graph";

export class Curve extends Graph {
  protected _p1: { x: number; y: number };
  protected _p2: { x: number; y: number };
  protected _px: { x: number; y: number };

  static build(data: any, intersection?: Intersection) {
    return new Curve(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._p1 = data.p1;
    this._p2 = data.p2;
    this._px = data.px;
    this._data.strokeStyle = this._data.strokeStyle || "white";
    this._data.lineWidth = this._data.lineWidth || 1;
  }

  setFocusPoint(x: number, y: number) {
    this._px.x = x;
    this._px.y = y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this._p1.x, this._p1.y);
    ctx.quadraticCurveTo(this._px.x, this._px.y, this._p2.x, this._p2.y);
    ctx.strokeStyle = this._data.strokeStyle;
    ctx.lineWidth = this._data.lineWidth;
    if(this._data.dash) {
        ctx.setLineDash(this._data.dash);
    }
    ctx.stroke();
    ctx.restore();
  }
}