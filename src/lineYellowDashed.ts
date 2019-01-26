import { Intersection } from "./intersection";
import { LineYellowSolid } from "./lineYellowSolid";

export class LineYellowDashed extends LineYellowSolid {
  static build(data: any, intersection?: Intersection) {
    return new LineYellowDashed(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._data.dash = this._data.dash || [25,50];
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this._p1.x, this._p1.y);
    ctx.lineTo(this._p2.x, this._p2.y);
    ctx.lineCap = "butt";
    ctx.setLineDash(this._data.dash);
    ctx.lineWidth = this._data.lineWidth;
    ctx.strokeStyle = this._data.strokeStyle;
    ctx.stroke();
    ctx.restore();
  }
}
