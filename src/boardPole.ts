import { Graph } from "./graph";
import { Intersection } from "./intersection";

/**
 * 路牌柱
 */
export class BoardPole extends Graph {
  private _px: { x: number; y: number };
  static build(data: any, intersection?: Intersection) {
    return new BoardPole(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._px = data.px;
  }

  draw(ctx: CanvasRenderingContext2D) {
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
    ctx.ellipse(0, 0, 3, 6, Math.PI / 2, 0, Math.PI * 2); 
    ctx.fillRect(-12, 2.5, 24, 4); 
    ctx.fill();
    ctx.restore();
  }
}
