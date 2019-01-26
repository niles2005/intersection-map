import { Line } from "./line";
export class LineWhiteSolid extends Line {
    static build(data, intersection) {
        return new LineWhiteSolid(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._data.lineWidth = this._data.lineWidth || 1;
        this._data.strokeStyle = this._data.strokeStyle || "white";
    }
}
