var interscetion_line = function() {
    var vector = {};
    vector.oA = function(segment) {
        return segment.start;
    };
    vector.AB = function(segment) {
        var start = segment.start;
        var end = segment.end;
        return {x:end.x - start.x, y: end.y - start.y};
    };
    vector.add = function(v1,v2) {
        return {x: v1.x + v2.x, y: v1.y + v2.y};
    }
    vector.sub = function(v1,v2) {
        return {x:v1.x - v2.x, y: v1.y - v2.y};
    }
    vector.scalarMult = function(s, v) {
        return {x: s * v.x, y: s * v.y};
    }
    vector.crossProduct = function(v1,v2) {
        return (v1.x * v2.y) - (v2.x * v1.y);
    };
    var self = {};
    self.vector = function(segment) {
        return vector.AB(segment);
    };
    self.intersectSegments = function(a,b) {
        // turn a = p + t*r where 0<=t<=1 (parameter)
        // b = q + u*s where 0<=u<=1 (parameter) 
        var p = vector.oA(a);
        var r = vector.AB(a);

        var q = vector.oA(b);
        var s = vector.AB(b);
    
        var cross = vector.crossProduct(r,s); 
        var qmp = vector.sub(q,p);
        var numerator = vector.crossProduct(qmp, s);
        var t = numerator / cross;
        var interscetion_line = vector.add(p,vector.scalarMult(t,r));
        return interscetion_line;
    };
    self.isParallel = function(a,b) {
        // a and b are line segments. 
        // returns true if a and b are parallel (or co-linear)
        var r = vector.AB(a);
        var s = vector.AB(b);
        return (vector.crossProduct(r,s) === 0);
    };
    self.isCollinear = function(a,b) {
        // a and b are line segments. 
        // returns true if a and b are co-linear
        var p = vector.oA(a);
        var r = vector.AB(a);

        var q = vector.oA(b);
        var s = vector.AB(b);
        return (vector.crossProduct(vector.sub(p,q), r) === 0);
    };
    self.safeIntersect = function(a,b) {
        if (self.isParallel(a,b) === false) {
            return self.intersectSegments(a,b);
        } else {
            return false;
        }
    };
    return self;
};
interscetion_line.intersectSegments = interscetion_line().intersectSegments;
interscetion_line.intersect = interscetion_line().safeIntersect;
interscetion_line.isParallel = interscetion_line().isParallel;
interscetion_line.isCollinear = interscetion_line().isCollinear;
interscetion_line.describe = function(a,b) {
    var isCollinear = interscetion_line().isCollinear(a,b);
    var isParallel = interscetion_line().isParallel(a,b);
    var pointOfinterscetion_line = undefined;
    if (isParallel === false) {
        pointOfinterscetion_line = interscetion_line().intersectSegments(a,b);
    }
    return {collinear: isCollinear,parallel: isParallel,interscetion_line:pointOfinterscetion_line};
};
