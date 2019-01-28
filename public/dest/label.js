import { Graph } from "./graph";
import { Bounds } from './utils/bounds';
export class Label extends Graph {
    static build(data, intersection) {
        return new Label(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._data.orient = this._data.orient || 0;
        this._data.fillstyle = this._data.fillstyle || "black";
        this._data.fontSize = this._data.fontSize || 25;
        this._data.fontName = this._data.fontName || "宋体";
        this.init();
    }
    init() {
        this._font = this._data.fontSize + "px " + this._data.fontName;
        this._bounds = new Bounds();
        this._bounds;
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
        this._intersection.repaint();
    }
    draw(ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        ctx.font = this._data.font;
        ctx.fillStyle = this._data.fillStyle;
        ctx.fillText(this._data.label, 0, 0);
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
}
