"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bounds_1 = require("./utils/bounds");
const pole_1 = require("./pole");
class PoleBoard extends pole_1.Pole {
    static build(data, intersection) {
        return new PoleBoard(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
    }
    init() {
        this._bounds = new bounds_1.Bounds();
        this._bounds.expandToIncludePoint(-12, -12);
        this._bounds.expandToIncludePoint(12, 12);
        if (this._px) {
            this._bounds.translate(this._px.x, this._px.y);
        }
    }
    draw(ctx) {
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
    }
}
exports.PoleBoard = PoleBoard;
