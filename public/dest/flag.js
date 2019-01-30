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
var Flag = (function (_super) {
    __extends(Flag, _super);
    function Flag(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._px = data.px;
        _this._image = new Image();
        _this._image.src = data.src;
        _this._image.onload = function () {
            _this.init();
        };
        return _this;
    }
    Flag.build = function (data, intersection) {
        return new Flag(data, intersection);
    };
    Flag.buildRYG = function (data, intersection) {
        data.src = "./images/ryg.png";
        return new Flag(data, intersection);
    };
    Flag.prototype.init = function () {
        this._bounds = new bounds_1.Bounds();
        var x = this._image.width;
        var y = this._image.height;
        this._bounds.expandToIncludePoint(-x / 2, -y / 2);
        this._bounds.expandToIncludePoint(x / 2, y / 2);
        if (this._data.scale) {
            this._bounds.scale(this._data.scale, this._data.scale);
            this._data.angle = 0;
        }
        if (!this._data.angle) {
            this._data.angle = 0;
        }
        if (this._data.angle) {
            this._bounds.rotate(this._data.angle / 180 * Math.PI);
        }
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
        this._intersection.repaint();
    };
    Flag.prototype.draw = function (ctx) {
        if (this._image.width) {
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
            ctx.translate(-this._image.width / 2, -this._image.height / 2);
            ctx.drawImage(this._image, 0, 0);
            ctx.restore();
        }
    };
    Flag.prototype.initGui = function () {
        var self = this;
        this._gui = new dat.GUI();
        var guiData = {
            x: this._data["px"].x,
            y: this._data["px"].y,
            angle: this._data["angle"],
            scale: this._data["scale"],
            src: this._data["src"]
        };
        function updateData() {
            self._data["px"].x = guiData.x;
            self._data["px"].y = guiData.y;
            self._data["angle"] = guiData.angle;
            self._data["scale"] = guiData.scale;
            self._data["src"] = guiData.src;
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
            .add(guiData, "scale")
            .name("比例")
            .onFinishChange(updateData);
        this._gui
            .add(guiData, "src")
            .name("图片")
            .onFinishChange(updateData);
    };
    return Flag;
}(graph_1.Graph));
exports.Flag = Flag;
