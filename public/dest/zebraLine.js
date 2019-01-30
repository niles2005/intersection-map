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
var ZebraLine = (function (_super) {
    __extends(ZebraLine, _super);
    function ZebraLine(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._p1 = data.p1;
        _this._p2 = data.p2;
        data.num = data.num || 10;
        data.zebraWidth = data.zebraWidth || 10;
        _this.init();
        return _this;
    }
    ZebraLine.build = function (data, intersection) {
        return new ZebraLine(data, intersection);
    };
    ZebraLine.prototype.init = function () {
        this._bounds = new bounds_1.Bounds();
        var theta = Math.atan2(this._p2.y - this._p1.y, this._p2.x - this._p1.x);
        var x1 = this._p1.x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
        var y1 = this._p1.y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
        var x2 = this._p1.x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
        var y2 = this._p1.y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
        this._bounds.expandToIncludePoint(x1, y1);
        this._bounds.expandToIncludePoint(x2, y2);
        var x3 = this._p2.x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
        var y3 = this._p2.y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
        var x4 = this._p2.x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
        var y4 = this._p2.y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
        this._bounds.expandToIncludePoint(x3, y3);
        this._bounds.expandToIncludePoint(x4, y4);
    };
    ZebraLine.prototype.draw = function (ctx) {
        ctx.save();
        var delta_x = this._p1.x - this._p2.x;
        var delta_y = this._p1.y - this._p2.y;
        var theta = Math.atan2(this._p2.y - this._p1.y, this._p2.x - this._p1.x);
        ctx.lineWidth = 2.8;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        for (var i = 0; i < this._data.num; i++) {
            var ratio = i / this._data.num;
            var pos_x = this._p1.x - ratio * delta_x;
            var pos_y = this._p1.y - ratio * delta_y;
            var x1 = pos_x + this._data.zebraWidth * Math.cos(theta - Math.PI / 2);
            var y1 = pos_y + this._data.zebraWidth * Math.sin(theta - Math.PI / 2);
            var x2 = pos_x + this._data.zebraWidth * Math.cos(theta + Math.PI / 2);
            var y2 = pos_y + this._data.zebraWidth * Math.sin(theta + Math.PI / 2);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineCap = "butt";
            ctx.stroke();
        }
        ctx.restore();
    };
    ZebraLine.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
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
    };
    return ZebraLine;
}(graph_1.Graph));
exports.ZebraLine = ZebraLine;
