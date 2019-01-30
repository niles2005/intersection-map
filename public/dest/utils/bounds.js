"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bounds = (function () {
    function Bounds(x1, y1, x2, y2) {
        this.init(x1, y1, x2, y2);
    }
    Bounds.prototype.init = function (x1, y1, x2, y2) {
        if (x1 === undefined) {
            this.setToNull();
        }
        else {
            if (x1 < x2) {
                this._minx = x1;
                this._maxx = x2;
            }
            else {
                this._minx = x2;
                this._maxx = x1;
            }
            if (y1 < y2) {
                this._miny = y1;
                this._maxy = y2;
            }
            else {
                this._miny = y2;
                this._maxy = y1;
            }
        }
    };
    Bounds.prototype.setToNull = function () {
        this._minx = 0;
        this._miny = 0;
        this._maxx = -1;
        this._maxy = -1;
    };
    Bounds.prototype.isNull = function () {
        return this._maxx < this._minx;
    };
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            if (this.isNull())
                return 0;
            else
                return this._maxx - this._minx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            if (this.isNull())
                return 0;
            else
                return this._maxy - this._miny;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "maxX", {
        get: function () {
            return this._maxx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "minX", {
        get: function () {
            return this._minx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "maxY", {
        get: function () {
            return this._maxy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "minY", {
        get: function () {
            return this._miny;
        },
        enumerable: true,
        configurable: true
    });
    Bounds.prototype.getCenterX = function () {
        return (this._minx + this._maxx) / 2;
    };
    Bounds.prototype.getCenterY = function () {
        return (this._miny + this._maxy) / 2;
    };
    Bounds.prototype.expandBy = function (distanceX, distanceY) {
        if (this.isNull())
            return;
        this._minx -= distanceX;
        this._miny -= distanceY;
        this._maxx += distanceX;
        this._maxy += distanceY;
        if (this._minx > this._maxx || this._miny > this._maxy)
            this.setToNull();
    };
    Bounds.prototype.expandToIncludePoint = function (x, y) {
        if (this.isNull()) {
            this._minx = x;
            this._miny = y;
            this._maxx = x;
            this._maxy = y;
        }
        else {
            if (x < this._minx)
                this._minx = x;
            if (y < this._miny)
                this._miny = y;
            if (x > this._maxx)
                this._maxx = x;
            if (y > this._maxy)
                this._maxy = y;
        }
    };
    Bounds.prototype.expandToIncludeBounds = function (bounds) {
        if (this.isNull()) {
            this._minx = bounds._minx;
            this._miny = bounds._miny;
            this._maxx = bounds._maxx;
            this._maxy = bounds._maxy;
        }
        else {
            if (bounds._minx < this._minx)
                this._minx = bounds._minx;
            if (bounds._miny < this._miny)
                this._miny = bounds._miny;
            if (bounds._maxx > this._maxx)
                this._maxx = bounds._maxx;
            if (bounds._maxy > this._maxy)
                this._maxy = bounds._maxy;
        }
    };
    Bounds.prototype.translate = function (transX, transY) {
        if (this.isNull()) {
            return;
        }
        else {
            this.init(this._minx + transX, this._miny + transY, this._maxx + transX, this._maxy + transY);
        }
    };
    Bounds.prototype.scale = function (x, y) {
        this._minx *= x;
        this._miny *= y;
        this._maxx *= x;
        this._maxy *= y;
    };
    Bounds.prototype.rotate = function (alpha) {
        var newX1 = this._minx * Math.cos(alpha) - this._miny * Math.sin(alpha);
        var newY1 = this._miny * Math.cos(alpha) + this._minx * Math.sin(alpha);
        var newX2 = this._maxx * Math.cos(alpha) - this._maxy * Math.sin(alpha);
        var newY2 = this._maxy * Math.cos(alpha) + this._maxx * Math.sin(alpha);
        var newX3 = this._minx * Math.cos(alpha) - this._maxy * Math.sin(alpha);
        var newY3 = this._maxy * Math.cos(alpha) + this._minx * Math.sin(alpha);
        var newX4 = this._maxx * Math.cos(alpha) - this._miny * Math.sin(alpha);
        var newY4 = this._miny * Math.cos(alpha) + this._maxx * Math.sin(alpha);
        this._minx = Math.min(newX1, newX2, newX3, newX4);
        this._maxx = Math.max(newX1, newX2, newX3, newX4);
        this._miny = Math.min(newY1, newY2, newY3, newY4);
        this._maxy = Math.max(newY1, newY2, newY3, newY4);
    };
    Bounds.prototype.intersectBounds = function (bounds) {
        if (this.isNull() || bounds.isNull())
            return false;
        else
            return (bounds._minx <= this._maxx &&
                bounds._maxx >= this._minx &&
                bounds._miny <= this._maxy &&
                bounds._maxy >= this._miny);
    };
    Bounds.prototype.intersectPoint = function (x, y) {
        return (x <= this._maxx && x >= this._minx && y <= this._maxy && y >= this._miny);
    };
    Bounds.prototype.intersectRect = function (minX, minY, maxX, maxY) {
        return (this._minx <= maxX &&
            this._maxx >= minX &&
            this._miny <= maxY &&
            this._maxy >= minY);
    };
    Bounds.prototype.intersection = function (bounds) {
        if (this.isNull() || bounds.isNull() || !this.intersectBounds(bounds)) {
            return new Bounds(0, 0, -1, -1);
        }
        else {
            var intMinX = this._minx <= bounds._minx ? bounds._minx : this._minx;
            var intMinY = this._miny <= bounds._miny ? bounds._miny : this._miny;
            var intMaxX = this._maxx >= bounds._maxx ? bounds._maxx : this._maxx;
            var intMaxY = this._maxy >= bounds._maxy ? bounds._maxy : this._maxy;
            return new Bounds(intMinX, intMaxX, intMinY, intMaxY);
        }
    };
    Bounds.prototype.overlapPoint = function (x, y) {
        return this.intersectPoint(x, y);
    };
    Bounds.prototype.overlapBounds = function (bounds) {
        return this.intersectBounds(bounds);
    };
    Bounds.prototype.containPoint = function (x, y) {
        return (x >= this._minx && x <= this._maxx && y >= this._miny && y <= this._maxy);
    };
    Bounds.prototype.containBounds = function (bounds) {
        if (this.isNull() || bounds.isNull())
            return false;
        else
            return (bounds._minx >= this._minx &&
                bounds._maxx <= this._maxx &&
                bounds._miny >= this._miny &&
                bounds._maxy <= this._maxy);
    };
    Bounds.prototype.equals = function (bounds) {
        if (this.isNull())
            return bounds.isNull();
        else
            return (this._maxx == bounds._maxx &&
                this._maxy == bounds._maxy &&
                this._minx == bounds._minx &&
                this._miny == bounds._miny);
    };
    Bounds.prototype.toString = function () {
        return ("Bounds:(" +
            this._minx +
            "," +
            this._miny +
            " , " +
            this._maxx +
            "," +
            this._maxy +
            ")");
    };
    return Bounds;
}());
exports.Bounds = Bounds;
