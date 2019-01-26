import { Line } from "./line";
import { Intersection } from "./intersection";

export class LineWhiteSolid extends Line {
  static build(data: any, intersection?: Intersection) {
    return new LineWhiteSolid(data, intersection);
  }

  constructor(data: any, intersection?: Intersection) {
    super(data, intersection);
    this._data.lineWidth = this._data.lineWidth || 1;
    this._data.strokeStyle = this._data.strokeStyle || "white";
  }
}
