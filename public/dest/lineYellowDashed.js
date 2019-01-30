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
var lineYellowSolid_1 = require("./lineYellowSolid");
var LineYellowDashed = (function (_super) {
    __extends(LineYellowDashed, _super);
    function LineYellowDashed(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._data.dash = _this._data.dash || [25, 50];
        return _this;
    }
    LineYellowDashed.build = function (data, intersection) {
        return new LineYellowDashed(data, intersection);
    };
    LineYellowDashed.prototype.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.lineCap = "butt";
        ctx.setLineDash(this._data.dash);
        ctx.lineWidth = this._data.lineWidth;
        ctx.strokeStyle = this._data.strokeStyle;
        ctx.stroke();
        ctx.restore();
    };
    return LineYellowDashed;
}(lineYellowSolid_1.LineYellowSolid));
exports.LineYellowDashed = LineYellowDashed;
