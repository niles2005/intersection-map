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
var Arrow = (function (_super) {
    __extends(Arrow, _super);
    function Arrow(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._points = [];
        _this._data.angle = _this._data.angle || 0;
        _this._data.fillStyle = _this._data.fillStyle || "white";
        _this.init();
        return _this;
    }
    Arrow.build = function (data, intersection) {
        return new Arrow(data, intersection);
    };
    Arrow.prototype.init = function () {
        this._points = [];
        var arrowPoints = Arrow.arrowShapes[this._data.name];
        var arr = arrowPoints.split(",");
        var curve = false;
        var curveX, curveY;
        this._bounds = new bounds_1.Bounds();
        for (var i = 0; i < arr.length; i += 2) {
            var strX = arr[i];
            var strY = arr[i + 1];
            if (strX[0] === "c") {
                strX = strX.substring(1);
                curveX = parseFloat(strX);
                curveY = parseFloat(strY);
                curve = true;
                this._bounds.expandToIncludePoint(curveX, curveY);
                continue;
            }
            var x = parseFloat(strX);
            var y = parseFloat(strY);
            this._bounds.expandToIncludePoint(x, y);
            if (curve) {
                this._points.push([curveX, curveY, x, y]);
                curve = false;
            }
            else {
                this._points.push([x, y]);
            }
        }
        if (this._data.scale) {
            this._bounds.scale(this._data.scale, this._data.scale);
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
    };
    Arrow.prototype._drawShape = function (ctx) {
        ctx.beginPath();
        for (var i = 0; i < this._points.length; i++) {
            var p = this._points[i];
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
    };
    Arrow.prototype.draw = function (ctx) {
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
    };
    Arrow.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
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
    };
    Arrow.arrowShapes = {
        direct: "0,52.4,-3.9,31.5,-1.4,31.5,-1.4,0,1.2,0,1.2,31.5,3.9,31.5",
        right: "-6.75,36,-3.15,49.9,-3.15,41.4,6.75,31.3,6.75,0,4.15,0,4.15,23.5,-3.15,30.2,-3.15,22.9",
        left: "6.75,36,3.15,49.9,3.15,41.4,-6.75,31.3,-6.75,0,-4.15,0,-4.15,23.5,3.15,30.2,3.15,22.9",
        "direct-right": "3.9,52.4,7.9,31.6,5.3,31.5,5.4,0.2,2.6,0,2.7,3.5,-4.1,10.3,-4.4,3,-7.9,15.8,-4.3,29.5,-4.3,20.9,2.6,14,2.8,31.5,0,31.4,3.8,52.3",
        "direct-left": "-3.9,52.4,-7.9,31.6,-5.3,31.5,-5.4,0.2,-2.6,0,-2.7,3.5,4.1,10.3,4.4,3,7.9,15.8,4.3,29.5,4.3,20.9,-2.6,14,-2.8,31.5,0,31.4,-3.8,52.3"
    };
    return Arrow;
}(graph_1.Graph));
exports.Arrow = Arrow;
