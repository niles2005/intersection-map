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
var PoleBoard = (function (_super) {
    __extends(PoleBoard, _super);
    function PoleBoard(data, intersection) {
        return _super.call(this, data, intersection) || this;
    }
    PoleBoard.build = function (data, intersection) {
        return new PoleBoard(data, intersection);
    };
    PoleBoard.prototype.init = function () {
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-12, -12);
        this._bounds.expandToIncludePoint(12, 12);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    };
    PoleBoard.prototype.draw = function (ctx) {
        ctx.save();
        if (this._px) {
            ctx.translate(this._px.x, this._px.y);
        }
        if (this._data.angle) {
            ctx.rotate(this._data.angle / 180 * Math.PI);
        }
        if (this._data.scale) {
            ctx.scale(this._data.scale, this._data.scale);
        }
        ctx.fillStyle = this._data.fillStyle || "black";
        ctx.beginPath();
        ctx.ellipse(0, 0, 3, 6, Math.PI / 2, 0, Math.PI * 2);
        ctx.fillRect(-12, 2.5, 24, 4);
        ctx.fill();
        ctx.restore();
    };
    return PoleBoard;
}(pole_1.Pole));
exports.PoleBoard = PoleBoard;
