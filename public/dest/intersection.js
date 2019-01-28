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
import { PoleBoard } from "./PoleBoard";
import { PoleFlag } from "./PoleFlag";
import { Flag } from "./flag";
import { Label } from "./label";
export class Intersection {
    constructor(canvas, data) {
        this._graphs = [];
        this._origoX = 0;
        this._origoY = 0;
        this._globalScale = 1;
        this._graphBuilder = {
            点: Point.build,
            白实线: LineWhiteSolid.build,
            白虚线: LineWhiteDashed.build,
            黄实线: LineYellowSolid.build,
            黄虚线: LineYellowDashed.build,
            斑马线: ZebraLine.build,
            相交曲线: IntersectCurve.build,
            曲线: Curve.build,
            箭头: Arrow.build,
            形状: Shape.build,
            路牌柱: PoleBoard.build,
            标志牌柱: PoleFlag.build,
            标志牌: Flag.build,
            红黄绿灯: Flag.buildRYG,
            背景图: Background.build,
            文字: Label.build
        };
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        this.initGraphs(data.graphs);
    }
    get origoX() {
        return this._origoX;
    }
    get origoY() {
        return this._origoY;
    }
    set origoX(x) {
        this._origoX = x;
    }
    set origoY(y) {
        this._origoY = y;
    }
    initGraphs(graphsData) {
        graphsData.forEach((graphData) => {
            let type = graphData.type;
            let theGraph = null;
            let func = this._graphBuilder[type];
            if (func) {
                theGraph = func(graphData, this);
            }
            if (theGraph) {
                this._graphs.push(theGraph);
            }
        });
    }
    mouseClick(event) {
        let x = (event.offsetX - this._origoX) / this._globalScale;
        let y = (event.offsetY - this._origoY) / this._globalScale;
        if (this._selectGraph && this._selectGraph.containPoint(x, y)) {
        }
        else {
            if (this._selectGraph) {
                this._selectGraph.destroyGui();
                this._selectGraph = null;
            }
            for (let i = this._graphs.length - 1; i >= 0; i--) {
                if (this._graphs[i].containPoint(x, y)) {
                    this._selectGraph = this._graphs[i];
                    this._selectGraph.initGui();
                    break;
                }
            }
        }
        this._mouseClickPoint = new Point({ x: x, y: y });
        this.repaint();
        return "x: " + Math.round(x) + ", y: " + Math.round(y);
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
        if (this._selectGraph) {
            this._selectGraph.draw(this._ctx);
            this._selectGraph.drawBounds(this._ctx);
        }
        if (this._mouseClickPoint) {
            this._mouseClickPoint.draw(this._ctx);
        }
        this._ctx.restore();
    }
}
