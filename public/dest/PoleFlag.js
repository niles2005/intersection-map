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
var bounds_1 = require("./utils/bounds");
var pole_1 = require("./pole");
var PoleFlag = (function (_super) {
    __extends(PoleFlag, _super);
    function PoleFlag(data, intersection) {
        return _super.call(this, data, intersection) || this;
    }
    PoleFlag.build = function (data, intersection) {
        return new PoleFlag(data, intersection);
    };
    PoleFlag.prototype.init = function () {
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-5, -5);
        this._bounds.expandToIncludePoint(5, 5);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    };
    PoleFlag.prototype.draw = function (ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        ctx.rotate((this._data.angle / 180) * Math.PI);
        ctx.fillStyle = this._data.fillStyle;
        ctx.beginPath();
        ctx.fillRect(-5, -1.5, 10, 3);
        ctx.fill();
        ctx.restore();
    };
    return PoleFlag;
}(pole_1.Pole));
exports.PoleFlag = PoleFlag;
