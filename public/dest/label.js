"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = require("./graph");
const bounds_1 = require("./utils/bounds");
class Label extends graph_1.Graph {
    static build(data, intersection) {
        return new Label(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._px = data.px;
        this._data.orient = this._data.orient || 0;
        this._data.fontSize = this._data.fontSize || 25;
        this._data.fontName = this._data.fontName || "宋体";
        this._data.fillStyle = this._data.fillStyle || "black";
        this.init();
    }
    init() {
        this._font = this._data.fontSize + "px " + this._data.fontName;
        let size = this.getLabelSize(this._data.label, this._font);
        this._width = size[0];
        this._height = size[1];
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-this._width / 2, -this._height / 2);
        this._bounds.expandToIncludePoint(this._width / 2, this._height / 2);
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
        ctx.font = this._font;
        ctx.fillStyle = this._data.fillStyle;
        ctx.fillText(this._data.label, -this._width / 2, this._height / 2);
        ctx.restore();
    }
    initGui() {
        let self = this;
        this._gui = new dat.GUI();
        let guiData = {
            x: this._data["px"].x,
            y: this._data["px"].y,
            fontSize: this._data.fontSize,
            fontName: this._data.fontName,
            fillStyle: this._data.fillStyle
        };
        function updateData() {
            self._data["px"].x = guiData.x;
            self._data["px"].y = guiData.y;
            self._data["fontSize"] = guiData.fontSize;
            self._data["fontName"] = guiData.fontName;
            self._data["fillStyle"] = guiData.fillStyle;
            self.init();
            self._intersection.repaint();
        }
        this._gui.add(guiData, "x").onFinishChange(updateData);
        this._gui.add(guiData, "y").onFinishChange(updateData);
        this._gui
            .add(guiData, "fontSize")
            .name("字体大小")
            .onFinishChange(updateData);
        this._gui
            .add(guiData, "fontName")
            .name("字体名称")
            .onFinishChange(updateData);
        this._gui
            .add(guiData, "fillStyle")
            .name("填充样式")
            .onFinishChange(updateData);
    }
    getLabelSize(label, font) {
        let domLabel = document.createElement("label");
        domLabel.style.font = font;
        domLabel.innerText = label;
        document.body.appendChild(domLabel);
        let size = [domLabel.offsetWidth, domLabel.offsetHeight];
        document.body.removeChild(domLabel);
        return size;
    }
}
exports.Label = Label;
