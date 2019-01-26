import { Line } from "./line";
export class LineYellowSolid extends Line {
    static build(data, intersection) {
        return new LineYellowSolid(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._data.lineWidth = this._data.lineWidth || 2;
        this._data.strokeStyle = this._data.strokeStyle || "yellow";
    }
}
