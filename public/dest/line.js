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
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._p1 = data.p1;
        _this._p2 = data.p2;
        _this.init();
        return _this;
    }
    Line.build = function (data, intersection) {
        return new Line(data, intersection);
    };
    Line.prototype.init = function () {
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(this._p1.x, this._p1.y);
        this._bounds.expandToIncludePoint(this._p2.x, this._p2.y);
        this._bounds.expandBy(2, 2);
    };
    Line.prototype.draw = function (ctx) {
        ctx.save();
        ctx.lineWidth = this._data.lineWidth || 1;
        ctx.strokeStyle = this._data.strokeStyle || "white";
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.lineCap = "butt";
        ctx.stroke();
        ctx.restore();
    };
    Line.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
            x1: this._data["p1"].x,
            y1: this._data["p1"].y,
            x2: this._data["p2"].x,
            y2: this._data["p2"].y
        };
        if (this._data.strokeStyle) {
            guiData.strokeStyle = this._data.strokeStyle;
        }
        if (this._data.lineWidth) {
            guiData.lineWidth = this._data.lineWidth;
        }
        if (this._data.dash) {
            guiData.dash = this._data.dash.join(",");
        }
        function updateData() {
            self._data["p1"].x = guiData.x1;
            self._data["p1"].y = guiData.y1;
            self._data["p2"].x = guiData.x2;
            self._data["p2"].y = guiData.y2;
            if (self._data.strokeStyle) {
                self._data.lineWidth = guiData.strokeStyle;
            }
            if (self._data.lineWidth) {
                self._data.lineWidth = guiData.lineWidth;
            }
            if (guiData.dash) {
                var arr = guiData.dash.split(",");
                self._data.dash = arr.map(function (t) { return parseFloat(t); });
            }
            self.init();
            self._intersection.repaint();
        }
        this._gui.add(guiData, "x1").onFinishChange(updateData);
        this._gui.add(guiData, "y1").onFinishChange(updateData);
        this._gui.add(guiData, "x2").onFinishChange(updateData);
        this._gui.add(guiData, "y2").onFinishChange(updateData);
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
    };
    return Line;
}(graph_1.Graph));
exports.Line = Line;
