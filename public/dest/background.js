import { Graph } from "./graph";
export class Background extends Graph {
    static build(data, intersection) {
        return new Background(data, intersection);
    }
    constructor(data, intersection) {
        super(data, intersection);
        this._bgImage = new Image();
        this._bgImage.src = data.src;
        this._bgImage.onload = () => {
            this._intersection.repaint();
        };
    }
    draw(ctx) {
        if (this._bgImage.width) {
            ctx.drawImage(this._bgImage, 0, 0);
        }
    }
    drawSubImage(ctx, x, y, w, h) {
        if (this._bgImage.width) {
            ctx.drawImage(this._bgImage, x, y, w, h, 0, 0, 200, 200);
        }
    }
}
