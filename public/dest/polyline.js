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
var Polyline = (function (_super) {
    __extends(Polyline, _super);
    function Polyline(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._intersection = intersection;
        var strPoints = data.points;
        if (strPoints) {
            _this._points = strPoints.split(",");
            for (var i = 0; i < _this._points.length; i++) {
                _this._points[i] = _this._points[i].trim();
            }
        }
        _this._data.strokeStyle = _this._data.strokeStyle || "black";
        _this._data.lineWith = _this._data.lineWith || 1;
        return _this;
    }
    Polyline.build = function (data, intersection) {
        return new Polyline(data, intersection);
    };
    Polyline.prototype.draw = function (ctx) {
        var curve = false;
        var curveX, curveY;
        var x, y;
        ctx.save();
        ctx.beginPath();
        for (var i = 0; i < this._points.length; i += 2) {
            if (this._points[i][0] === "c") {
                var strX = this._points[i].substring(1);
                curveX = parseFloat(strX);
                curveY = parseFloat(this._points[i + 1]);
                curve = true;
                continue;
            }
            x = parseFloat(this._points[i]);
            y = parseFloat(this._points[i + 1]);
            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
            else {
                if (curve) {
                    ctx.quadraticCurveTo(curveX, curveY, x, y);
                    curve = false;
                }
                else {
                    ctx.lineTo(x, y);
                }
            }
        }
        ctx.strokeStyle = this._data.strokeStyle;
        ctx.lineWith = this._data.lineWith;
        ctx.stroke();
        ctx.restore();
    };
    return Polyline;
}(graph_1.Graph));
exports.Polyline = Polyline;
