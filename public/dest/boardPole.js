import { Graph } from "./graph";
import { Bounds } from "./utils/bounds";
export class BoardPole extends Graph {
    static build(data, intersection) {
        return new BoardPole(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
    }
    init() {
        this._bounds = new Bounds();
        this._bounds.expandToIncludePoint(-12, -12);
        this._bounds.expandToIncludePoint(12, 12);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    }
    draw(ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        if (this._data.angle) {
            ctx.rotate(this._data.angle / 180 * Math.PI);
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
    initGui() {
        let self = this;
        this._gui = new dat.GUI();
        let guiData = {
            x: this._data["px"].x,
            y: this._data["px"].y,
            angle: this._data["angle"],
            fillStyle: this._data.fillStyle
        };
        function updateData() {
            self._data["px"].x = guiData.x;
            self._data["px"].y = guiData.y;
            self._data["angle"] = guiData.angle;
            self._data["fillStyle"] = guiData.fillStyle;
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
            .add(guiData, "fillStyle")
            .name("填充样式")
            .onFinishChange(updateData);
    }
}
