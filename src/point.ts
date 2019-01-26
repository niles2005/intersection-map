import { Graph } from "./graph";
import { Intersection } from "./intersection";

export class Point extends Graph {
  private _x: number;
  private _y: number;
  private intersection: Intersection;

  static build(data: any, intersection?: Intersection) {
    return new Point(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._x = data.x;
    this._y = data.y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  draw(ctx) {
    let r = 2;
    ctx.beginPath();
    ctx.arc(this._x, this._y, r, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
  }
}
