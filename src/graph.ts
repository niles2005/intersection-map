import { Intersection } from "./intersection";
import { GUI } from "dat-gui";

export abstract class Graph {
    protected _data:any;
    protected _intersection:Intersection;
    protected _gui: GUI;
    constructor(data:any,intersection?:Intersection) {
        this._data = data;
        this._intersection = intersection;
    }

    abstract draw(ctx:CanvasRenderingContext2D):void;

    /**
     * 用于对当前聚焦的图形，输入点击的点，便于调试
     * @param x 
     * @param y 
     */
    setFocusPoint(x:number,y:number) {

    }

    initGui(): GUI {
        return this._gui;
    }
}