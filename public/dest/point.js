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
var Point = (function (_super) {
    __extends(Point, _super);
    function Point(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._x = data.x;
        _this._y = data.y;
        return _this;
    }
    Point.build = function (data, intersection) {
        return new Point(data, intersection);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function (ctx) {
        var r = 2;
        ctx.beginPath();
        ctx.arc(this._x, this._y, r, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    };
    return Point;
}(graph_1.Graph));
exports.Point = Point;
