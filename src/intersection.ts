import { Graph } from "./graph";
import { Background } from "./background";
import { Point } from "./point";
import { Shape } from "./shape";
import { IntersectCurve } from "./intersectCurve";
import { ZebraLine } from "./zebraLine";
import { Arrow } from "./arrow";
import { LineYellowSolid } from "./lineYellowSolid";
import { LineWhiteSolid } from "./lineWhiteSolid";
import { LineYellowDashed } from "./lineYellowDashed";
import { LineWhiteDashed } from "./lineWhiteDashed";
import { Curve } from "./curve";
import { BoardPole } from "./boardPole";
import { FlagPole } from "./flagPole";
import { Flag } from "./flag";
import { GUI } from "dat-gui";
declare var dat;

export class Intersection {
  private _canvas: HTMLCanvasElement;
  private _ctx: CanvasRenderingContext2D;
  private _graphs: Graph[] = [];
  private _mouseClickPoint: Point;
  private _mosueMovePoint: Point;
  private _focuxedGraph: Graph;

  private _origoX = 0;
  private _origoY = 0;
  private _globalScale = 1;
  private _gui: GUI;

  private _graphBuilder:any = {
    "点": Point.build,
    "白实线": LineWhiteSolid.build,
    "白虚线": LineWhiteDashed.build,
    "黄实线": LineYellowSolid.build,
    "黄虚线": LineYellowDashed.build,
    "斑马线": ZebraLine.build,
    "相交曲线" : IntersectCurve.build,
    "曲线" : Curve.build,
    "箭头": Arrow.build,
    "形状": Shape.build,
    "路牌柱" : BoardPole.build,
    "标志牌柱": FlagPole.build,
    "标志牌": Flag.build,
    "红黄绿灯": Flag.buildRYG,
    "背景图1": Background.build
  }

  constructor(canvas: HTMLCanvasElement, data: any) {
    this._canvas = canvas;
    this._ctx = this._canvas.getContext("2d");
    console.dir(data);
    
    this.initGraphs(data.graphs);
  }


  get origoX():number {
    return this._origoX;
  }

  get origoY():number {
    return this._origoY;
  }

  set origoX(x:number) {
    this._origoX = x;
  }

  set origoY(y:number) {
    this._origoY = y;
  }

  initGraphs(graphsData: any) {
    graphsData.forEach((graphData: any) => {
      let type = graphData.type;
      let theGraph = null;
      let func = this._graphBuilder[type];
      if(func) {
        theGraph = func(graphData,this);
      }
      if (theGraph) {
        this._graphs.push(theGraph);
        if (graphData.focus) {
          this._focuxedGraph = theGraph;
        }
      }
    });
  }

  mouseClick(event: any):string {
    let x = (event.offsetX - this._origoX) / this._globalScale;
    let y = (event.offsetY - this._origoY) / this._globalScale;

    if(this._focuxedGraph && this._focuxedGraph.containPoint(x,y)) {

    } else {
      for(let i=this._graphs.length-1;i>=0;i--) {
        if(this._graphs[i].containPoint(x,y)) {
          this._focuxedGraph = this._graphs[i];
          break;
        }
      }
    }
    console.log(x + " , " + y);
    if (this._focuxedGraph) {
      // this._focuxedGraph.setFocusPoint(x, y);
      if(this._gui) {
        this._gui.destroy();
        this._gui = null;
      }
      this._gui = this._focuxedGraph.initGui();
    } else {
      this._mouseClickPoint = new Point({x:x, y:y});
    }
    this.repaint();



    return "x: " + Math.round(x) + ", y: " + Math.round(y);
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

    if(this._mouseClickPoint) {
      this._mouseClickPoint.draw(this._ctx);
    }

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
