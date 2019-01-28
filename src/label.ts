import { Graph } from "./graph";
import { Intersection } from "./intersection";
import { Bounds } from './utils/bounds';
declare var dat;

export class Label extends Graph {
  private _image: HTMLImageElement;
  private _px: { x: number; y: number };
  private _font:string;

  static build(data: any, intersection?: Intersection) {
    return new Label(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._px = data.px;
    this._data.orient = this._data.orient || 0;//0:水平  1：垂直
    this._data.fillstyle = this._data.fillstyle || "black";
    this._data.fontSize = this._data.fontSize || 25;
    this._data.fontName = this._data.fontName || "宋体";
    this.init();
  }

  init() {
      this._font = this._data.fontSize + "px " + this._data.fontName;
    this._bounds = new Bounds();
    if (this._px) {
      this._bounds.translate(this._px.x, this._px.y);
    }
    this._intersection.repaint();
}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    if (this._px) {
    ctx.translate(this._px.x, this._px.y);
    }
    ctx.font = this._data.font;
    ctx.fillStyle = this._data.fillStyle;
    ctx.fillText(this._data.label,0,0);
    ctx.restore();
  }

  initGui() {
    let self = this;
    this._gui = new dat.GUI();
    let guiData = {
      x: this._data["px"].x,
      y: this._data["px"].y,
    };

    function updateData() {
      self._data["px"].x = guiData.x;
      self._data["px"].y = guiData.y;

      self.init();
      self._intersection.repaint();
    }

    this._gui.add(guiData, "x").onFinishChange(updateData);
    this._gui.add(guiData, "y").onFinishChange(updateData);
  }
          getLabelSize(label,font) {
            var labelHtml = "<label style='display:none;font:" + font + "'>" + label + "</label>";
            var jLabel= $(labelHtml);
            $("body").append(jLabel);
            var width = jLabel.width();
            var height = jLabel.height();
            jLabel.remove();
            return [width,height];
        },

}
