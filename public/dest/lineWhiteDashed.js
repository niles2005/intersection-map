"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lineWhiteSolid_1 = require("./lineWhiteSolid");
class LineWhiteDashed extends lineWhiteSolid_1.LineWhiteSolid {
    static build(data, intersection) {
        return new LineWhiteDashed(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._data.dash = this._data.dash || [25, 50];
    }
    draw(ctx) {
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
    }
}
exports.LineWhiteDashed = LineWhiteDashed;
