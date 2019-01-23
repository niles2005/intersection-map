import { Graph } from "./graph";
import { Intersection } from "./intersection";


export class Point extends Graph {
    private _x:number;
    private _y:number;
    private  intersection:Intersection;
    constructor(intersection:Intersection,x:number,y:number) {
        super();
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }


    draw(ctx) {
        let r = 2;
        ctx.beginPath();
        ctx.arc(this._x,this._y,r,Math.PI * 2,false);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}