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
var Pole = (function (_super) {
    __extends(Pole, _super);
    function Pole(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._px = data.px;
        _this._data.angle = _this._data.angle || 0;
        _this._data.fillStyle = _this._data.fillStyle || "black";
        _this.init();
        return _this;
    }
    Pole.prototype.init = function () {
    };
    Pole.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
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
    };
    return Pole;
}(graph_1.Graph));
exports.Pole = Pole;
