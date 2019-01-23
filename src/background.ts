import { Graph } from "./graph";
import { Intersection } from "./intersection";


export class Background extends Graph {
    private _bgImage:HTMLImageElement;
    private _intersection:Intersection;
    constructor(intersection:Intersection,data:any) {
        super();
        this._intersection = intersection;
        this._bgImage = new Image();
        this._bgImage.src = data.src;
        this._bgImage.onload = () => {
            this._intersection.repaint();
        }
    }

    draw(ctx:CanvasRenderingContext2D) {
        if(this._bgImage.width) {
            ctx.drawImage(this._bgImage,0,0);   
        }
    }

    drawSubImage(ctx:CanvasRenderingContext2D,x:number,y:number,w:number,h:number) {
        if(this._bgImage.width) {
            ctx.drawImage(this._bgImage,x,y,w,h,0,0,200,200);

        }
    }
}    
