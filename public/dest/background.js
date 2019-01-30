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
var Background = (function (_super) {
    __extends(Background, _super);
    function Background(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._bgImage = new Image();
        _this._bgImage.src = data.src;
        _this._bgImage.onload = function () {
            _this._intersection.repaint();
        };
        return _this;
    }
    Background.build = function (data, intersection) {
        return new Background(data, intersection);
    };
    Background.prototype.draw = function (ctx) {
        if (this._bgImage.width) {
            ctx.drawImage(this._bgImage, 0, 0);
        }
    };
    Background.prototype.drawSubImage = function (ctx, x, y, w, h) {
        if (this._bgImage.width) {
            ctx.drawImage(this._bgImage, x, y, w, h, 0, 0, 200, 200);
        }
    };
    return Background;
}(graph_1.Graph));
exports.Background = Background;
