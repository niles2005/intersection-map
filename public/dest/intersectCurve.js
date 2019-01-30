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
var IntersectCurve = (function (_super) {
    __extends(IntersectCurve, _super);
    function IntersectCurve(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        var strPoints = data.points;
        var arr = strPoints.split(",");
        if (arr.length === 8) {
            _this._p1 = { x: parseFloat(arr[0]), y: parseFloat(arr[1]) };
            _this._p2 = { x: parseFloat(arr[2]), y: parseFloat(arr[3]) };
            _this._p3 = { x: parseFloat(arr[4]), y: parseFloat(arr[5]) };
            _this._p4 = { x: parseFloat(arr[6]), y: parseFloat(arr[7]) };
            _this._px = interscetion_line.intersect({ start: _this._p1, end: _this._p2 }, { start: _this._p3, end: _this._p4 });
        }
        else if (arr.length === 10) {
            _this._p1 = { x: parseFloat(arr[0]), y: parseFloat(arr[1]) };
            _this._p2 = { x: parseFloat(arr[2]), y: parseFloat(arr[3]) };
            _this._px = { x: parseFloat(arr[4]), y: parseFloat(arr[5]) };
            _this._p3 = { x: parseFloat(arr[6]), y: parseFloat(arr[7]) };
            _this._p4 = { x: parseFloat(arr[8]), y: parseFloat(arr[9]) };
        }
        else {
            console.log("points's length is not >=8");
        }
        return _this;
    }
    IntersectCurve.build = function (data, intersection) {
        return new IntersectCurve(data, intersection);
    };
    IntersectCurve.prototype.setFocusPoint = function (x, y) {
        this._px.x = x;
        this._px.y = y;
    };
    IntersectCurve.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.quadraticCurveTo(this._px.x, this._px.y, this._p3.x, this._p3.y);
        ctx.lineTo(this._p4.x, this._p4.y);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.stroke();
    };
    return IntersectCurve;
}(graph_1.Graph));
exports.IntersectCurve = IntersectCurve;
