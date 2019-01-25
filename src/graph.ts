export abstract class Graph {
    constructor() {
    }

    abstract draw(ctx:CanvasRenderingContext2D):void;

    /**
     * 用于对当前聚焦的图形，输入点击的点，便于调试
     * @param x 
     * @param y 
     */
    setFocusPoint(x:number,y:number) {

    }
}