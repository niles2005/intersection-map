import { Graph } from "./graph";
import { Background } from "./background";
import { Point } from "./point";

export class Intersection {
    private _canvas:HTMLCanvasElement;
    private _ctx:CanvasRenderingContext2D;
    private _graphs:Graph[] = [];
    private _mouseClicks:Point[] = [];
    private _mosueMovePoint:Point;
    private _subImageCenter = new Point(this,100,100);
    private _background:Background;
    constructor(canvas:HTMLCanvasElement,data:any) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        console.dir(data)
        this.initGraphs(data.graphs);
    }

    initGraphs(graphsData:any) {
        graphsData.forEach((graphData:any) => {
            let clazz = graphData.clazz;
            if(clazz === "background") {
                this._background = new Background(this,graphData);
                this._graphs.push(this._background);
            }
        });
    }

    mouseClick(event:any) {
        this._mouseClicks.push(new Point(this,event.offsetX,event.offsetY));
        this.repaint();
    }

    mouseMove(event:any) {
        this._mosueMovePoint = new Point(this,event.offsetX,event.offsetY);
        this.repaint();
    }
    

    repaint() {
        this._ctx.save();
        this._ctx.clearRect(0,0,this._canvas.clientWidth,this._canvas.clientHeight);
    
        this._graphs.forEach(graph => {
            graph.draw(this._ctx);
        })

        this._mouseClicks.forEach(point => {
            point.draw(this._ctx);
        })
    
        if(this._mosueMovePoint) {
            this._background.drawSubImage(this._ctx,this._mosueMovePoint.x - 20,this._mosueMovePoint.y - 20,40,40);
            this._subImageCenter.draw(this._ctx);
        }
        this._ctx.restore();


    }
}