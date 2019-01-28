"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bounds_1 = require("./utils/bounds");
const pole_1 = require("./pole");
class PoleFlag extends pole_1.Pole {
    static build(data, intersection) {
        return new PoleFlag(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
    }
    init() {
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-5, -5);
        this._bounds.expandToIncludePoint(5, 5);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    }
    draw(ctx) {
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
    }
}
exports.PoleFlag = PoleFlag;
