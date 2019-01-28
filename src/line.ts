import { Graph } from "./graph";
import { Intersection } from "./intersection";
import { Bounds } from './utils/bounds';

export class Line extends Graph {
  protected _p1: { x: number; y: number };
  protected _p2: { x: number; y: number };

  static build(data:any,intersection?:Intersection) {
    return new Line(data,intersection);
  }

  constructor(data: any,intersection?:Intersection) {
    super(data,intersection);
    this._p1 = data.p1;
    this._p2 = data.p2;
    this._bounds = new Bounds();
    this._bounds.expandToIncludePoint(this._p1.x,this._p1.y);
    this._bounds.expandToIncludePoint(this._p2.x,this._p2.y);
    this._bounds.expandBy(2,2);
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
