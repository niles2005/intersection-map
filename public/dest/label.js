"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var graph_1 = require("./graph");
var bounds_1 = require("./utils/bounds");
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._px = data.px;
        _this._data.orient = _this._data.orient || 0;
        _this._data.fontSize = _this._data.fontSize || 25;
        _this._data.fontName = _this._data.fontName || "宋体";
        _this._data.fillStyle = _this._data.fillStyle || "black";
        _this.init();
        return _this;
    }
    Label.build = function (data, intersection) {
        return new Label(data, intersection);
    };
    Label.prototype.init = function () {
        this._font = this._data.fontSize + "px " + this._data.fontName;
        var size = this.getLabelSize(this._data.label, this._font);
        this._width = size[0];
        this._height = size[1];
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-this._width / 2, -this._height / 2);
        this._bounds.expandToIncludePoint(this._width / 2, this._height / 2);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
        this._intersection.repaint();
    };
    Label.prototype.draw = function (ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        ctx.font = this._font;
        ctx.fillStyle = this._data.fillStyle;
        ctx.fillText(this._data.label, -this._width / 2, this._height / 2);
        ctx.restore();
    };
    Label.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
            x: this._data["px"].x,
            y: this._data["px"].y,
            fontSize: this._data.fontSize,
            fontName: this._data.fontName,
            fillStyle: this._data.fillStyle,
            label: this._data.label
        };
        function updateData() {
            self._data["px"].x = guiData.x;
            self._data["px"].y = guiData.y;
            self._data["fontSize"] = guiData.fontSize;
            self._data["fontName"] = guiData.fontName;
            self._data["fillStyle"] = guiData.fillStyle;
            self._data["label"] = guiData.label;
            self.init();
            self._intersection.repaint();
        }
        this._gui.add(guiData, "x").onFinishChange(updateData);
        this._gui.add(guiData, "y").onFinishChange(updateData);
        this._gui
            .add(guiData, "label")
            .name("标题")
            .onFinishChange(updateData);
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
    };
    Label.prototype.getLabelSize = function (label, font) {
        var domLabel = document.createElement("label");
        domLabel.style.font = font;
        domLabel.innerText = label;
        document.body.appendChild(domLabel);
        var size = [domLabel.offsetWidth, domLabel.offsetHeight];
        document.body.removeChild(domLabel);
        return size;
    };
    return Label;
}(graph_1.Graph));
exports.Label = Label;
