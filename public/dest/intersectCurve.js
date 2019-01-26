import { Graph } from "./graph";
export class IntersectCurve extends Graph {
    static build(data, intersection) {
        return new IntersectCurve(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        let strPoints = data.points;
        let arr = strPoints.split(",");
        if (arr.length === 8) {
            this._p1 = { x: parseFloat(arr[0]), y: parseFloat(arr[1]) };
            this._p2 = { x: parseFloat(arr[2]), y: parseFloat(arr[3]) };
            this._p3 = { x: parseFloat(arr[4]), y: parseFloat(arr[5]) };
            this._p4 = { x: parseFloat(arr[6]), y: parseFloat(arr[7]) };
            this._px = interscetion_line.intersect({ start: this._p1, end: this._p2 }, { start: this._p3, end: this._p4 });
        }
        else if (arr.length === 10) {
            this._p1 = { x: parseFloat(arr[0]), y: parseFloat(arr[1]) };
            this._p2 = { x: parseFloat(arr[2]), y: parseFloat(arr[3]) };
            this._px = { x: parseFloat(arr[4]), y: parseFloat(arr[5]) };
            this._p3 = { x: parseFloat(arr[6]), y: parseFloat(arr[7]) };
            this._p4 = { x: parseFloat(arr[8]), y: parseFloat(arr[9]) };
        }
        else {
            console.log("points's length is not >=8");
        }
    }
    setFocusPoint(x, y) {
        this._px.x = x;
        this._px.y = y;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this._p1.x, this._p1.y);
        ctx.lineTo(this._p2.x, this._p2.y);
        ctx.quadraticCurveTo(this._px.x, this._px.y, this._p3.x, this._p3.y);
        ctx.lineTo(this._p4.x, this._p4.y);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}