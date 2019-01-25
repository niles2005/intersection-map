import { Background } from "./background";
import { Point } from "./point";
import { Shape } from "./shape";
import { QuadraticCurve } from "./quadraticCurve";
import { ZebraLine } from "./zebraLine";
import { Arrow } from "./arrow";
import { Line } from "./line";
export class Intersection {
    constructor(canvas, data) {
        this._graphs = [];
        this._mouseClicks = [];
        this._subImageCenter = new Point(this, 100, 100);
        this._origoX = 0;
        this._origoY = 0;
        this._globalScale = 1;
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        console.dir(data);
        this.initGraphs(data.graphs);
    }
    initGraphs(graphsData) {
        graphsData.forEach((graphData) => {
            let type = graphData.type;
            let theGraph = null;
            if (type === "background") {
                this._background = new Background(this, graphData);
                theGraph = this._background;
            }
            else if (type === "shape") {
                theGraph = new Shape(this, graphData);
            }
            else if (type === "quadraticCurve") {
                theGraph = new QuadraticCurve(this, graphData);
            }
            else if (type === "zebraLine") {
                theGraph = new ZebraLine(this, graphData);
            }
            else if (type === "arrow") {
                theGraph = new Arrow(this, graphData);
            }
            else if (type === "line") {
                theGraph = new Line(this, graphData);
            }
            if (theGraph) {
                this._graphs.push(theGraph);
                if (graphData.focus) {
                    this._focuxedGraph = theGraph;
                }
            }
        });
    }
    mouseClick(event) {
        let x = (event.offsetX - this._origoX) / this._globalScale;
        let y = (event.offsetY - this._origoY) / this._globalScale;
        console.log(x + " , " + y);
        if (this._focuxedGraph) {
            this._focuxedGraph.setFocusPoint(x, y);
        }
        else {
            this._mouseClicks.push(new Point(this, x, y));
        }
        this.repaint();
    }
    mouseWheel(event) {
        let posX = (1.0 * (event.offsetX - this._origoX)) /
            (this._canvas.clientWidth * this._globalScale);
        let posY = (1.0 * (event.offsetY - this._origoY)) /
            (this._canvas.clientHeight * this._globalScale);
        if (event.deltaY === -100) {
            this._globalScale *= 1.1;
        }
        else if (event.deltaY === 100) {
            this._globalScale /= 1.1;
        }
        this._origoX =
            event.offsetX - posX * (this._canvas.clientWidth * this._globalScale);
        this._origoY =
            event.offsetY - posY * (this._canvas.clientHeight * this._globalScale);
        this.repaint();
    }
    mouseMove(event) {
    }
    repaint() {
        this._ctx.save();
        this._ctx.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);
        this._ctx.translate(this._origoX, this._origoY);
        this._ctx.scale(this._globalScale, this._globalScale);
        this._graphs.forEach(graph => {
            graph.draw(this._ctx);
        });
        this._mouseClicks.forEach(point => {
            point.draw(this._ctx);
        });
        this._ctx.restore();
    }
}
