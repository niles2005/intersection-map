import { Line } from "./line";
import { Intersection } from "./intersection";

export class LineYellowSolid extends Line {
  static build(data: any, intersection?: Intersection) {
    return new LineYellowSolid(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._data.lineWidth = this._data.lineWidth || 2;
    this._data.strokeStyle = this._data.strokeStyle || "yellow";
  }
}
