"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("./graph");
const bounds_1 = require("./utils/bounds");
class Arrow extends graph_1.Graph {
    constructor(data, intersection) {
        super(data, intersection);
        this._points = [];
        this._data.angle = this._data.angle || 0;
        this._data.fillStyle = this._data.fillStyle || "white";
        this.init();
    }
    static build(data, intersection) {
        return new Arrow(data, intersection);
    }
    init() {
        this._points = [];
        let arrowPoints = Arrow.arrowShapes[this._data.name];
        let arr = arrowPoints.split(",");
        let curve = false;
        let curveX, curveY;
        this._bounds = new bounds_1.Bounds();
        for (let i = 0; i < arr.length; i += 2) {
            let strX = arr[i];
            let strY = arr[i + 1];
            if (strX.startsWith("c")) {
                strX = strX.substring(1);
                curveX = parseFloat(strX);
                curveY = parseFloat(strY);
                curve = true;
                this._bounds.expandToIncludePoint(curveX, curveY);
                continue;
            }
            let x = parseFloat(strX);
            let y = parseFloat(strY);
            this._bounds.expandToIncludePoint(x, y);
            if (curve) {
                this._points.push([curveX, curveY, x, y]);
                curve = false;
            }
            else {
                this._points.push([x, y]);
            }
        }
        if (!this._data.angle) {
            this._data.angle = 0;
        }
        if (this._data.angle) {
            this._bounds.rotate((this._data.angle / 180) * Math.PI);
        }
        if (this._data.px) {
            this._bounds.translate(this._data.px.x, this._data.px.y);
        }
    }
    _drawShape(ctx) {
        ctx.beginPath();
        for (let i = 0; i < this._points.length; i++) {
            let p = this._points[i];
            if (i === 0) {
                ctx.moveTo(p[0], p[1]);
            }
            else {
                if (p.length === 4) {
                    ctx.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                }
                else {
                    ctx.lineTo(p[0], p[1]);
                }
            }
        }
    }
    draw(ctx) {
        ctx.save();
        if (this._data.px) {
            ctx.translate(this._data.px.x, this._data.px.y);
        }
        ctx.rotate((this._data.angle / 180) * Math.PI);
        if (this._data.scale) {
            ctx.scale(this._data.scale, this._data.scale);
        }
        ctx.fillStyle = this._data.fillStyle;
        this._drawShape(ctx);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    initGui() {
        let self = this;
        this._gui = new dat.GUI();
        let guiData = {
            name: this._data.name,
            x: this._data["px"].x,
            y: this._data["px"].y,
            angle: this._data["angle"],
            scale: this._data["scale"],
            fillStyle: this._data["fillStyle"]
        };
        function updateData() {
            self._data.name = guiData.name;
            self._data["px"].x = guiData.x;
            self._data["px"].y = guiData.y;
            self._data["angle"] = guiData.angle;
            self._data["scale"] = guiData.scale;
            self._data["fillStyle"] = guiData.fillStyle;
            self.init();
            self._intersection.repaint();
        }
        this._gui
            .add(guiData, "name", {
            直行: "direct",
            左转: "left",
            右转: "right",
            直行左转: "direct-left",
            直行右转: "direct-right"
        })
            .onFinishChange(updateData);
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
            .add(guiData, "fillStyle")
            .name("填充样式")
            .onFinishChange(updateData);
    }
}
Arrow.arrowShapes = {
    direct: "0,52.4,-3.9,31.5,-1.4,31.5,-1.4,0,1.2,0,1.2,31.5,3.9,31.5",
    right: "-6.75,36,-3.15,49.9,-3.15,41.4,6.75,31.3,6.75,0,4.15,0,4.15,23.5,-3.15,30.2,-3.15,22.9",
    left: "6.75,36,3.15,49.9,3.15,41.4,-6.75,31.3,-6.75,0,-4.15,0,-4.15,23.5,3.15,30.2,3.15,22.9",
    "direct-right": "3.9,52.4,7.9,31.6,5.3,31.5,5.4,0.2,2.6,0,2.7,3.5,-4.1,10.3,-4.4,3,-7.9,15.8,-4.3,29.5,-4.3,20.9,2.6,14,2.8,31.5,0,31.4,3.8,52.3",
    "direct-left": "-3.9,52.4,-7.9,31.6,-5.3,31.5,-5.4,0.2,-2.6,0,-2.7,3.5,4.1,10.3,4.4,3,7.9,15.8,4.3,29.5,4.3,20.9,-2.6,14,-2.8,31.5,0,31.4,-3.8,52.3"
};
exports.Arrow = Arrow;
