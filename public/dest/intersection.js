"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var background_1 = require("./background");
var point_1 = require("./point");
var shape_1 = require("./shape");
var intersectCurve_1 = require("./intersectCurve");
var zebraLine_1 = require("./zebraLine");
var arrow_1 = require("./arrow");
var lineYellowSolid_1 = require("./lineYellowSolid");
var lineWhiteSolid_1 = require("./lineWhiteSolid");
var lineYellowDashed_1 = require("./lineYellowDashed");
var lineWhiteDashed_1 = require("./lineWhiteDashed");
var curve_1 = require("./curve");
var PoleBoard_1 = require("./PoleBoard");
var PoleFlag_1 = require("./PoleFlag");
var flag_1 = require("./flag");
var label_1 = require("./label");
var polyline_1 = require("./polyline");
var Intersection = (function () {
    function Intersection(canvas, data) {
        this._graphs = [];
        this._origoX = 0;
        this._origoY = 0;
        this._globalScale = 1;
        this._graphBuilder = {
            点: point_1.Point.build,
            折线: polyline_1.Polyline.build,
            白实线: lineWhiteSolid_1.LineWhiteSolid.build,
            白虚线: lineWhiteDashed_1.LineWhiteDashed.build,
            黄实线: lineYellowSolid_1.LineYellowSolid.build,
            黄虚线: lineYellowDashed_1.LineYellowDashed.build,
            斑马线: zebraLine_1.ZebraLine.build,
            相交曲线: intersectCurve_1.IntersectCurve.build,
            曲线: curve_1.Curve.build,
            箭头: arrow_1.Arrow.build,
            形状: shape_1.Shape.build,
            路牌柱: PoleBoard_1.PoleBoard.build,
            标志牌柱: PoleFlag_1.PoleFlag.build,
            标志牌: flag_1.Flag.build,
            红黄绿灯: flag_1.Flag.buildRYG,
            背景图: background_1.Background.build,
            文字: label_1.Label.build
        };
        this._canvas = canvas;
        this._ctx = this._canvas.getContext("2d");
        this.initGraphs(data.graphs);
    }
    Object.defineProperty(Intersection.prototype, "origoX", {
        get: function () {
            return this._origoX;
        },
        set: function (x) {
            this._origoX = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Intersection.prototype, "origoY", {
        get: function () {
            return this._origoY;
        },
        set: function (y) {
            this._origoY = y;
        },
        enumerable: true,
        configurable: true
    });
    Intersection.prototype.initGraphs = function (graphsData) {
        var _this = this;
        graphsData.forEach(function (graphData) {
            var type = graphData.type;
            var theGraph = null;
            var func = _this._graphBuilder[type];
            if (func) {
                theGraph = func(graphData, _this);
            }
            if (theGraph) {
                _this._graphs.push(theGraph);
            }
        });
    };
    Intersection.prototype.mouseClick = function (event) {
        var x = (event.offsetX - this._origoX) / this._globalScale;
        var y = (event.offsetY - this._origoY) / this._globalScale;
        if (this._selectGraph && this._selectGraph.containPoint(x, y)) {
        }
        else {
            if (this._selectGraph) {
                this._selectGraph.destroyGui();
                this._selectGraph = null;
            }
            for (var i = this._graphs.length - 1; i >= 0; i--) {
                if (this._graphs[i].containPoint(x, y)) {
                    this._selectGraph = this._graphs[i];
                    this._selectGraph.initGui();
                    break;
                }
            }
        }
        this.repaint();
        return "x: " + Math.round(x) + ", y: " + Math.round(y);
    };
    Intersection.prototype.mouseWheel = function (event) {
        var posX = (1.0 * (event.offsetX - this._origoX)) /
            (this._canvas.clientWidth * this._globalScale);
        var posY = (1.0 * (event.offsetY - this._origoY)) /
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
    };
    Intersection.prototype.mouseMove = function (event) {
    };
    Intersection.prototype.repaint = function () {
        var _this = this;
        this._ctx.save();
        this._ctx.clearRect(0, 0, this._canvas.clientWidth, this._canvas.clientHeight);
        this._ctx.translate(this._origoX, this._origoY);
        this._ctx.scale(this._globalScale, this._globalScale);
        this._graphs.forEach(function (graph) {
            graph.draw(_this._ctx);
        });
        if (this._selectGraph) {
            this._selectGraph.draw(this._ctx);
            this._selectGraph.drawBounds(this._ctx);
        }
        if (this._mouseClickPoint) {
            this._mouseClickPoint.draw(this._ctx);
        }
        this._ctx.restore();
    };
    return Intersection;
}());
exports.Intersection = Intersection;
