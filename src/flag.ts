import { Graph } from "./graph";
import { Intersection } from "./intersection";

export class Flag extends Graph {
  private _image: HTMLImageElement;
  private _px: { x: number; y: number };

  static build(data: any, intersection?: Intersection) {
    return new Flag(data, intersection);
  }

  static buildRYG(data: any, intersection?: Intersection) {
    data.src = "./images/红黄绿.png";
    return new Flag(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._px = data.px;
    this._image = new Image();
    this._image.src = data.src;
    this._image.onload = () => {
      this._intersection.repaint();
    };
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this._image.width) {
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
      ctx.translate(-this._image.width / 2, -this._image.height / 2);
      ctx.drawImage(this._image, 0, 0);
      ctx.restore();
    }
  }
}
