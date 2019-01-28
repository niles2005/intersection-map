import { Graph } from "./graph";
import { Bounds } from "./utils/bounds";
export class Curve extends Graph {
    static build(data, intersection) {
        return new Curve(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._p1 = data.p1;
        this._p2 = data.p2;
        this._px = data.px;
        this._data.strokeStyle = this._data.strokeStyle || "white";
        this._data.lineWidth = this._data.lineWidth || 1;
        this.init();
    }
    init() {
        this._bounds = new Bounds();
        this._bounds.expandToIncludePoint(this._p1.x, this._p1.y);
        this._bounds.expandToIncludePoint(this._px.x, this._px.y);
        this._bounds.expandToIncludePoint(this._p2.x, this._p2.y);
        this._bounds.expandBy(2, 2);
    }
    setFocusPoint(x, y) {
        this._px.x = x;
        this._px.y = y;
    }
    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.quadraticCurveTo(this._px.x, this._px.y, this._p2.x, this._p2.y);
        ctx.strokeStyle = this._data.strokeStyle;
        ctx.lineWidth = this._data.lineWidth;
        if (this._data.dash) {
            ctx.setLineDash(this._data.dash);
        }
        ctx.stroke();
        ctx.restore();
    }
    initGui() {
        let self = this;
        this._gui = new dat.GUI();
        let guiData = {
            x1: this._data["p1"].x,
            y1: this._data["p1"].y,
            x2: this._data["p2"].x,
            y2: this._data["p2"].y,
            c1: this._data["px"].x,
            c2: this._data["px"].y,
            strokeStyle: this._data.strokeStyle,
            lineWidth: this._data.lineWidth,
        };
        if (this._data.dash) {
            guiData.dash = this._data.dash.join(",");
        }
        function updateData() {
            self._data["p1"].x = guiData.x1;
            self._data["p1"].y = guiData.y1;
            self._data["p2"].x = guiData.x2;
            self._data["p2"].y = guiData.y2;
            self._data["px"].x = guiData.c1;
            self._data["px"].y = guiData.c2;
            self._data.lineWidth = guiData.strokeStyle;
            self._data.lineWidth = guiData.lineWidth;
            if (guiData.dash) {
                let arr = guiData.dash.split(",");
                self._data.dash = arr.map(t => parseFloat(t));
            }
            self.init();
            self._intersection.repaint();
        }
        this._gui.add(guiData, "x1").onFinishChange(updateData);
        this._gui.add(guiData, "y1").onFinishChange(updateData);
        this._gui.add(guiData, "x2").onFinishChange(updateData);
        this._gui.add(guiData, "y2").onFinishChange(updateData);
        this._gui.add(guiData, "c1").name("控制点x").onFinishChange(updateData);
        this._gui.add(guiData, "c2").name("控制点y").onFinishChange(updateData);
        if (this._data.dash) {
            this._gui
                .add(guiData, "dash")
                .name("虚线设置")
                .onFinishChange(updateData);
        }
        this._gui
            .add(guiData, "strokeStyle")
            .name("画笔样式")
            .onFinishChange(updateData);
        this._gui
            .add(guiData, "lineWidth")
            .name("画笔宽度")
            .onFinishChange(updateData);
    }
}
