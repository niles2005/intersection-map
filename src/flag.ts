import { Graph } from "./graph";
import { Intersection } from "./intersection";
import { GUI } from "dat-gui";
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

  initGui(): GUI {
    let self = this;
    // if (!this._gui) {
      this._gui = new dat.GUI();
      console.dir(this._gui)
    // }
    let guiData = {
      x: this._data["px"].x,
      y: this._data["px"].y,
      angle: this._data["angle"],
      scaleX: this._data["scale"].x,
      scaleY: this._data["scale"].y,
      src: this._data["src"]
    };

    function updateData() {
      self._data["px"].x = guiData.x;
      self._data["px"].y = guiData.y;
      self._data["angle"] = guiData.angle;
      self._data["scale"].x = guiData.scaleX;
      self._data["scale"].y = guiData.scaleY;
      self._data["src"] = guiData.src;

      self._intersection.repaint();
    }

    // this._gui.remember(this._data);
    this._gui.add(guiData, "x").onFinishChange(updateData);
    this._gui.add(guiData, "y").onFinishChange(updateData);
    this._gui
      .add(guiData, "angle",{ "水平": Math.PI / 2, "垂直": 0 })
      .name("角度")
      .onFinishChange(updateData);
    this._gui
      .add(guiData, "scaleX")
      .name("比例X")
      .onFinishChange(updateData);
    this._gui
      .add(guiData, "scaleY")
      .name("比例Y")
      .onFinishChange(updateData);
    this._gui
      .add(guiData, "src")
      .name("图片")
      .onFinishChange(updateData);

    return this._gui;
  }
}
