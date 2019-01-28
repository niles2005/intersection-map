import { Graph } from "./graph";
import { Bounds } from "./utils/bounds";
export class ZebraLine extends Graph {
    static build(data, intersection) {
        return new ZebraLine(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._p1 = data.p1;
        this._p2 = data.p2;
        data.num = data.num || 10;
        data.zebraWidth = data.zebraWidth || 10;
        this.init();
    }
    init() {
        this._bounds = new Bounds();
        let theta = Math.atan2(this._p2.y - this._p1.y, this._p2.x - this._p1.x);
        let x1 = this._p1.x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
        let y1 = this._p1.y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
        let x2 = this._p1.x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
        let y2 = this._p1.y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
        this._bounds.expandToIncludePoint(x1, y1);
        this._bounds.expandToIncludePoint(x2, y2);
        let x3 = this._p2.x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
        let y3 = this._p2.y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
        let x4 = this._p2.x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
        let y4 = this._p2.y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
        this._bounds.expandToIncludePoint(x3, y3);
        this._bounds.expandToIncludePoint(x4, y4);
    }
    draw(ctx) {
        ctx.save();
        let delta_x = this._p1.x - this._p2.x;
        let delta_y = this._p1.y - this._p2.y;
        let theta = Math.atan2(this._p2.y - this._p1.y, this._p2.x - this._p1.x);
        ctx.lineWidth = 2.8;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        for (let i = 0; i < this._data.num; i++) {
            let ratio = i / this._data.num;
            let pos_x = this._p1.x - ratio * delta_x;
            let pos_y = this._p1.y - ratio * delta_y;
            let x1 = pos_x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
            let y1 = pos_y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
            let x2 = pos_x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
            let y2 = pos_y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineCap = "butt";
            ctx.stroke();
        }
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
            num: this._data.num,
            zebraWidth: this._data.zebraWidth
        };
        function updateData() {
            self._data["p1"].x = guiData.x1;
            self._data["p1"].y = guiData.y1;
            self._data["p2"].x = guiData.x2;
            self._data["p2"].y = guiData.y2;
            self._data["num"] = guiData.num;
            self._data["zebraWidth"] = guiData.zebraWidth;
            self.init();
            self._intersection.repaint();
        }
        this._gui.add(guiData, "x1").onFinishChange(updateData);
        this._gui.add(guiData, "y1").onFinishChange(updateData);
        this._gui.add(guiData, "x2").onFinishChange(updateData);
        this._gui.add(guiData, "y2").onFinishChange(updateData);
        this._gui
            .add(guiData, "num")
            .name("行数")
            .onFinishChange(updateData);
        this._gui
            .add(guiData, "zebraWidth")
            .name("宽度")
            .onFinishChange(updateData);
    }
}
