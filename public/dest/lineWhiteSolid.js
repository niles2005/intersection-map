"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_1 = require("./line");
class LineWhiteSolid extends line_1.Line {
    static build(data, intersection) {
        return new LineWhiteSolid(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._data.lineWidth = this._data.lineWidth || 1;
        this._data.strokeStyle = this._data.strokeStyle || "white";
    }
}
exports.LineWhiteSolid = LineWhiteSolid;
