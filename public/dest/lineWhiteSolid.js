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
var line_1 = require("./line");
var LineWhiteSolid = (function (_super) {
    __extends(LineWhiteSolid, _super);
    function LineWhiteSolid(data, intersection) {
        var _this = _super.call(this, data, intersection) || this;
        _this._data.lineWidth = _this._data.lineWidth || 1;
        _this._data.strokeStyle = _this._data.strokeStyle || "white";
        return _this;
    }
    LineWhiteSolid.build = function (data, intersection) {
        return new LineWhiteSolid(data, intersection);
    };
    return LineWhiteSolid;
}(line_1.Line));
exports.LineWhiteSolid = LineWhiteSolid;
