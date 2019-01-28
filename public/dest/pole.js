"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("./graph");
class Pole extends graph_1.Graph {
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._data.angle = this._data.angle || 0;
        this._data.fillStyle = this._data.fillStyle || "black";
        this.init();
    }
    init() {
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
exports.Pole = Pole;
