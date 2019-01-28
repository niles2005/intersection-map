import { Graph } from "./graph";
import { Bounds } from "./utils/bounds";
export class FlagPole extends Graph {
    static build(data, intersection) {
        return new FlagPole(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._data.angle = this._data.angle || 0;
        this._data.fillStyle = this._data.fillStyle || "black";
        this.init();
    }
    init() {
        this._bounds = new Bounds();
        this._bounds.expandToIncludePoint(-5, -5);
        this._bounds.expandToIncludePoint(5, 5);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    }
    draw(ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        ctx.rotate((this._data.angle / 180) * Math.PI);
        ctx.fillStyle = this._data.fillStyle;
        ctx.beginPath();
        ctx.fillRect(-5, -1.5, 10, 3);
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
