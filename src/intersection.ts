import { Graph } from "./graph";
import { Background } from "./background";
import { Point } from "./point";
import { Shape } from "./shape";
import { QuadraticCurve } from "./quadraticCurve";
import { ZebraLine } from "./zebraLine";
import { Arrow } from "./arrow";

export class Intersection {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _graphs: Graph[] = [];
  private _mouseClicks: Point[] = [];
  private _mosueMovePoint: Point;
  private _subImageCenter = new Point(this, 100, 100);
  private _background: Background;
  private _focuxedGraph: Graph;

  private _origoX = 0;
  private _origoY = 0;
  private _globalScale = 1;
  constructor(canvas: HTMLCanvasElement, data: any) {
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");
    console.dir(data);
    this.initGraphs(data.graphs);
  }

  initGraphs(graphsData: any) {
    graphsData.forEach((graphData: any) => {
      let type = graphData.type;
      let theGraph = null;
      if (type === "background") {
        this._background = new Background(this, graphData);
        theGraph = this._background;
      } else if (type === "shape") {
        theGraph = new Shape(this, graphData);
      } else if (type === "quadraticCurve") {
        theGraph = new QuadraticCurve(this, graphData);
      } else if (type === "zebraLine") {
        theGraph = new ZebraLine(this, graphData);
      } else if (type === "arrow") {
        theGraph = new Arrow(this, graphData);
      }
      if (theGraph) {
        this._graphs.push(theGraph);
        if (graphData.focus) {
          this._focuxedGraph = theGraph;
        }
      }
    });
  }

  mouseClick(event: any) {
    let x = (event.offsetX - this._origoX) / this._globalScale;
    let y = (event.offsetY - this._origoY) / this._globalScale;
    console.log(x + " , " + y);
    if (this._focuxedGraph) {
      this._focuxedGraph.setFocusPoint(x, y);
    } else {
      this._mouseClicks.push(new Point(this, x, y));
    }
    this.repaint();
  }

  mouseWheel(event: any) {
    let posX =
      (1.0 * (event.offsetX - this._origoX)) /
      (this._canvas.clientWidth * this._globalScale);
    let posY =
      (1.0 * (event.offsetY - this._origoY)) /
      (this._canvas.clientHeight * this._globalScale);
    if (event.deltaY === -100) {
      this._globalScale *= 1.1;
    } else if (event.deltaY === 100) {
      this._globalScale /= 1.1;
    }

    this._origoX =
      event.offsetX - posX * (this._canvas.clientWidth * this._globalScale);
    this._origoY =
      event.offsetY - posY * (this._canvas.clientHeight * this._globalScale);

    this.repaint();
  }

  mouseMove(event: any) {
    // this._mosueMovePoint = new Point(this, event.offsetX, event.offsetY);
    // this.repaint();
  }

  repaint() {
    this._ctx.save();
    this._ctx.clearRect(
      0,
      0,
      this._canvas.clientWidth,
      this._canvas.clientHeight
    );
    this._ctx.translate(this._origoX, this._origoY);
    this._ctx.scale(this._globalScale, this._globalScale);

    this._graphs.forEach(graph => {
      graph.draw(this._ctx);
    });

    this._mouseClicks.forEach(point => {
      point.draw(this._ctx);
    });

    // if (this._mosueMovePoint) {
    //   this._background.drawSubImage(
    //     this._ctx,
    //     this._mosueMovePoint.x - 20,
    //     this._mosueMovePoint.y - 20,
    //     40,
    //     40
    //   );
    //   this._subImageCenter.draw(this._ctx);
    // }
    this._ctx.restore();
  }
}
