import { Graph } from "./graph";
import { Intersection } from "./intersection";
import { Bounds } from "./utils/bounds";
import { Pole } from "./pole";

/**
 * 路牌柱
 */
export class PoleBoard extends Pole {
  static build(data: any, intersection?: Intersection) {
    return new PoleBoard(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
  }

  init() {
    this._bounds = new Bounds();
    this._bounds.expandToIncludePoint(-12, -12);
    this._bounds.expandToIncludePoint(12,12);
    if (this._px) {
      this._bounds.translate(this._px.x, this._px.y);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this._px) {
      ctx.translate(this._px.x, this._px.y);
    }
    if (this._data.angle) {
      ctx.rotate(this._data.angle / 180 * Math.PI);
    }
    if (this._data.scale) {
      ctx.scale(this._data.scale, this._data.scale);
    }
    ctx.fillStyle = this._data.fillStyle || "black";
    ctx.beginPath();
    ctx.ellipse(0, 0, 3, 6, Math.PI / 2, 0, Math.PI * 2); 
    ctx.fillRect(-12, 2.5, 24, 4); 
    ctx.fill();
    ctx.restore();
  }
}
