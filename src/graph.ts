import { Intersection } from "./intersection";
import { GUI } from "dat-gui";
import { Bounds } from './utils/bounds';

export abstract class Graph {
    protected _data:any;
    protected _intersection:Intersection;
    protected _bounds: Bounds;
    protected _gui: GUI;
    constructor(data:any,intersection?:Intersection) {
        this._data = data;
        this._intersection = intersection;
    }

    abstract draw(ctx:CanvasRenderingContext2D):void;

    drawBounds(ctx:CanvasRenderingContext2D):void {
        if(this._bounds) {
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 2;
            ctx.strokeRect(this._bounds.minX,this._bounds.minY,this._bounds.width,this._bounds.height);
        }
    }

    /**
     * 用于对当前聚焦的图形，输入点击的点，便于调试
     * @param x 
     * @param y 
     */
    setFocusPoint(x:number,y:number):void {

    }

    containPoint(x:number,y:number):boolean {
        if(this._bounds) {
            return this._bounds.containPoint(x,y);
        }
    }

    initGui() {
    }

    destroyGui(): void {
        if(this._gui) {
            this._gui.destroy();
            this._gui = null;
        }
    }
}