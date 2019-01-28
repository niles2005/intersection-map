import { Graph } from "./graph";
import { Intersection } from "./intersection";
import { Bounds } from './utils/bounds';
declare var dat;

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
      this.init();
    };
  }

  init() {
    this._bounds = new Bounds();
    let x = this._image.width;
    let y = this._image.height;
    if (this._data.scale) {
      x *= this._data.scale;
      y *= this._data.scale;
    }
    this._bounds.expandToIncludePoint(-x/2,-y/2);
    this._bounds.expandToIncludePoint(x/2,y/2);

    if (!this._data.angle) {
      this._data.angle = 0;
    }
    if (this._data.angle) {
      this._bounds.rotate(this._data.angle / 180 * Math.PI);
    }
    if (this._px) {
      this._bounds.translate(this._px.x, this._px.y);
    }
    this._intersection.repaint();
}

  draw(ctx: CanvasRenderingContext2D) {
    if (this._image.width) {
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
      ctx.translate(-this._image.width / 2, -this._image.height / 2);
      ctx.drawImage(this._image, 0, 0);
      ctx.restore();
    }
  }

  initGui() {
    let self = this;
    this._gui = new dat.GUI();
    let guiData = {
      x: this._data["px"].x,
      y: this._data["px"].y,
      angle: this._data["angle"],
      scale: this._data["scale"],
      src: this._data["src"]
    };

    function updateData() {
      self._data["px"].x = guiData.x;
      self._data["px"].y = guiData.y;
      self._data["angle"] = guiData.angle;
      self._data["scale"] = guiData.scale;
      self._data["src"] = guiData.src;

      self.init();
      self._intersection.repaint();
    }

    this._gui.add(guiData, "x").onFinishChange(updateData);
    this._gui.add(guiData, "y").onFinishChange(updateData);
    this._gui
      .add(guiData, "angle")
      .name("角度")
      .onFinishChange(updateData);
    this._gui
      .add(guiData, "scale")
      .name("比例")
      .onFinishChange(updateData);
    this._gui
      .add(guiData, "src")
      .name("图片")
      .onFinishChange(updateData);
  }
}
