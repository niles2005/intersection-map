!function(t){var i={};function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=6)}([function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.Graph=class{constructor(t,i){this._data=t,this._intersection=i}drawBounds(t){this._bounds&&(t.strokeStyle="blue",t.lineWidth=2,t.strokeRect(this._bounds.minX,this._bounds.minY,this._bounds.width,this._bounds.height))}setFocusPoint(t,i){}containPoint(t,i){if(this._bounds)return this._bounds.containPoint(t,i)}initGui(){}destroyGui(){this._gui&&(this._gui.destroy(),this._gui=null)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});class e{constructor(t,i,s,e){this.init(t,i,s,e)}init(t,i,s,e){void 0===t?this.setToNull():(t<s?(this._minx=t,this._maxx=s):(this._minx=s,this._maxx=t),i<e?(this._miny=i,this._maxy=e):(this._miny=e,this._maxy=i))}setToNull(){this._minx=0,this._miny=0,this._maxx=-1,this._maxy=-1}isNull(){return this._maxx<this._minx}get width(){return this.isNull()?0:this._maxx-this._minx}get height(){return this.isNull()?0:this._maxy-this._miny}get maxX(){return this._maxx}get minX(){return this._minx}get maxY(){return this._maxy}get minY(){return this._miny}getCenterX(){return(this._minx+this._maxx)/2}getCenterY(){return(this._miny+this._maxy)/2}expandBy(t,i){this.isNull()||(this._minx-=t,this._miny-=i,this._maxx+=t,this._maxy+=i,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull())}expandToIncludePoint(t,i){this.isNull()?(this._minx=t,this._miny=i,this._maxx=t,this._maxy=i):(t<this._minx&&(this._minx=t),i<this._miny&&(this._miny=i),t>this._maxx&&(this._maxx=t),i>this._maxy&&(this._maxy=i))}expandToIncludeBounds(t){this.isNull()?(this._minx=t._minx,this._miny=t._miny,this._maxx=t._maxx,this._maxy=t._maxy):(t._minx<this._minx&&(this._minx=t._minx),t._miny<this._miny&&(this._miny=t._miny),t._maxx>this._maxx&&(this._maxx=t._maxx),t._maxy>this._maxy&&(this._maxy=t._maxy))}translate(t,i){this.isNull()||this.init(this._minx+t,this._miny+i,this._maxx+t,this._maxy+i)}rotate(t){let i=this._minx*Math.cos(t)-this._miny*Math.sin(t),s=this._miny*Math.cos(t)+this._minx*Math.sin(t),e=this._maxx*Math.cos(t)-this._maxy*Math.sin(t),a=this._maxy*Math.cos(t)+this._maxx*Math.sin(t),n=this._minx*Math.cos(t)-this._maxy*Math.sin(t),h=this._maxy*Math.cos(t)+this._minx*Math.sin(t),_=this._maxx*Math.cos(t)-this._miny*Math.sin(t),o=this._miny*Math.cos(t)+this._maxx*Math.sin(t);this._minx=Math.min(i,e,n,_),this._maxx=Math.max(i,e,n,_),this._miny=Math.min(s,a,h,o),this._maxy=Math.max(s,a,h,o)}intersectBounds(t){return!this.isNull()&&!t.isNull()&&(t._minx<=this._maxx&&t._maxx>=this._minx&&t._miny<=this._maxy&&t._maxy>=this._miny)}intersectPoint(t,i){return t<=this._maxx&&t>=this._minx&&i<=this._maxy&&i>=this._miny}intersectRect(t,i,s,e){return this._minx<=s&&this._maxx>=t&&this._miny<=e&&this._maxy>=i}intersection(t){if(this.isNull()||t.isNull()||!this.intersectBounds(t))return new e(0,0,-1,-1);var i=this._minx<=t._minx?t._minx:this._minx,s=this._miny<=t._miny?t._miny:this._miny,a=this._maxx>=t._maxx?t._maxx:this._maxx,n=this._maxy>=t._maxy?t._maxy:this._maxy;return new e(i,a,s,n)}overlapPoint(t,i){return this.intersectPoint(t,i)}overlapBounds(t){return this.intersectBounds(t)}containPoint(t,i){return t>=this._minx&&t<=this._maxx&&i>=this._miny&&i<=this._maxy}containBounds(t){return!this.isNull()&&!t.isNull()&&(t._minx>=this._minx&&t._maxx<=this._maxx&&t._miny>=this._miny&&t._maxy<=this._maxy)}equals(t){return this.isNull()?t.isNull():this._maxx==t._maxx&&this._maxy==t._maxy&&this._minx==t._minx&&this._miny==t._miny}toString(){return"Bounds:("+this._minx+","+this._miny+" , "+this._maxx+","+this._maxy+")"}}i.Bounds=e},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(3);class a extends e.Line{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._data.lineWidth=this._data.lineWidth||1,this._data.strokeStyle=this._data.strokeStyle||"yellow"}}i.LineYellowSolid=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i),this._p1=t.p1,this._p2=t.p2,this.init()}init(){this._bounds=new a.Bounds,this._bounds.expandToIncludePoint(this._p1.x,this._p1.y),this._bounds.expandToIncludePoint(this._p2.x,this._p2.y),this._bounds.expandBy(2,2)}draw(t){t.save(),t.lineWidth=this._data.lineWidth||1,t.strokeStyle=this._data.strokeStyle||"white",t.beginPath(),t.moveTo(this._p1.x,this._p1.y),t.lineTo(this._p2.x,this._p2.y),t.lineCap="butt",t.stroke(),t.restore()}initGui(){let t=this;this._gui=new dat.GUI;let i={x1:this._data.p1.x,y1:this._data.p1.y,x2:this._data.p2.x,y2:this._data.p2.y};function s(){if(t._data.p1.x=i.x1,t._data.p1.y=i.y1,t._data.p2.x=i.x2,t._data.p2.y=i.y2,t._data.strokeStyle&&(t._data.lineWidth=i.strokeStyle),t._data.lineWidth&&(t._data.lineWidth=i.lineWidth),i.dash){let s=i.dash.split(",");t._data.dash=s.map(t=>parseFloat(t))}t.init(),t._intersection.repaint()}this._data.strokeStyle&&(i.strokeStyle=this._data.strokeStyle),this._data.lineWidth&&(i.lineWidth=this._data.lineWidth),this._data.dash&&(i.dash=this._data.dash.join(",")),this._gui.add(i,"x1").onFinishChange(s),this._gui.add(i,"y1").onFinishChange(s),this._gui.add(i,"x2").onFinishChange(s),this._gui.add(i,"y2").onFinishChange(s),this._data.dash&&this._gui.add(i,"dash").name("虚线设置").onFinishChange(s),this._gui.add(i,"strokeStyle").name("画笔样式").onFinishChange(s),this._gui.add(i,"lineWidth").name("画笔宽度").onFinishChange(s)}}i.Line=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(3);class a extends e.Line{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._data.lineWidth=this._data.lineWidth||1,this._data.strokeStyle=this._data.strokeStyle||"white"}}i.LineWhiteSolid=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);i.Pole=class extends e.Graph{constructor(t,i){super(t,i),this._px=t.px,this._data.angle=this._data.angle||0,this._data.fillStyle=this._data.fillStyle||"black",this.init()}init(){}initGui(){let t=this;this._gui=new dat.GUI;let i={x:this._data.px.x,y:this._data.px.y,angle:this._data.angle,fillStyle:this._data.fillStyle};function s(){t._data.px.x=i.x,t._data.px.y=i.y,t._data.angle=i.angle,t._data.fillStyle=i.fillStyle,t.init(),t._intersection.repaint()}this._gui.add(i,"x").onFinishChange(s),this._gui.add(i,"y").onFinishChange(s),this._gui.add(i,"angle").name("角度").onFinishChange(s),this._gui.add(i,"fillStyle").name("填充样式").onFinishChange(s)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(7);window.data||console.error("can not find intersection data!");let a=document.getElementById("canvas"),n=new e.Intersection(a,window.data);a.addEventListener("click",function(t){let i=n.mouseClick(t);document.getElementById("input").value=i},!0),a.addEventListener("mousemove",function(t){n.mouseMove(t)},!0),a.addEventListener("mousewheel",function(t){t.preventDefault(),t.stopPropagation(),n.mouseWheel(t)},!0),a.addEventListener("mousedown",function(t){let i=t.offsetX-n.origoX,s=t.offsetY-n.origoY;var e=function(t){n.origoX=t.offsetX-i,n.origoY=t.offsetY-s,n.repaint()},a=function(t){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",a)})},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(8),a=s(9),n=s(10),h=s(11),_=s(12),o=s(13),d=s(2),l=s(4),r=s(14),u=s(15),c=s(16),p=s(17),x=s(18),y=s(19),m=s(20),g=s(21);i.Intersection=class{constructor(t,i){this._graphs=[],this._origoX=0,this._origoY=0,this._globalScale=1,this._graphBuilder={"点":a.Point.build,"折线":g.Polyline.build,"白实线":l.LineWhiteSolid.build,"白虚线":u.LineWhiteDashed.build,"黄实线":d.LineYellowSolid.build,"黄虚线":r.LineYellowDashed.build,"斑马线":_.ZebraLine.build,"相交曲线":h.IntersectCurve.build,"曲线":c.Curve.build,"箭头":o.Arrow.build,"形状":n.Shape.build,"路牌柱":p.PoleBoard.build,"标志牌柱":x.PoleFlag.build,"标志牌":y.Flag.build,"红黄绿灯":y.Flag.buildRYG,"背景图":e.Background.build,"文字":m.Label.build},this._canvas=t,this._ctx=this._canvas.getContext("2d"),this.initGraphs(i.graphs)}get origoX(){return this._origoX}get origoY(){return this._origoY}set origoX(t){this._origoX=t}set origoY(t){this._origoY=t}initGraphs(t){t.forEach(t=>{let i=t.type,s=null,e=this._graphBuilder[i];e&&(s=e(t,this)),s&&this._graphs.push(s)})}mouseClick(t){let i=(t.offsetX-this._origoX)/this._globalScale,s=(t.offsetY-this._origoY)/this._globalScale;if(this._selectGraph&&this._selectGraph.containPoint(i,s));else{this._selectGraph&&(this._selectGraph.destroyGui(),this._selectGraph=null);for(let t=this._graphs.length-1;t>=0;t--)if(this._graphs[t].containPoint(i,s)){this._selectGraph=this._graphs[t],this._selectGraph.initGui();break}}return this._mouseClickPoint=new a.Point({x:i,y:s}),this.repaint(),"x: "+Math.round(i)+", y: "+Math.round(s)}mouseWheel(t){let i=1*(t.offsetX-this._origoX)/(this._canvas.clientWidth*this._globalScale),s=1*(t.offsetY-this._origoY)/(this._canvas.clientHeight*this._globalScale);-100===t.deltaY?this._globalScale*=1.1:100===t.deltaY&&(this._globalScale/=1.1),this._origoX=t.offsetX-i*(this._canvas.clientWidth*this._globalScale),this._origoY=t.offsetY-s*(this._canvas.clientHeight*this._globalScale),this.repaint()}mouseMove(t){}repaint(){this._ctx.save(),this._ctx.clearRect(0,0,this._canvas.clientWidth,this._canvas.clientHeight),this._ctx.translate(this._origoX,this._origoY),this._ctx.scale(this._globalScale,this._globalScale),this._graphs.forEach(t=>{t.draw(this._ctx)}),this._selectGraph&&(this._selectGraph.draw(this._ctx),this._selectGraph.drawBounds(this._ctx)),this._mouseClickPoint&&this._mouseClickPoint.draw(this._ctx),this._ctx.restore()}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);class a extends e.Graph{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._bgImage=new Image,this._bgImage.src=t.src,this._bgImage.onload=(()=>{this._intersection.repaint()})}draw(t){this._bgImage.width&&t.drawImage(this._bgImage,0,0)}drawSubImage(t,i,s,e,a){this._bgImage.width&&t.drawImage(this._bgImage,i,s,e,a,0,0,200,200)}}i.Background=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);class a extends e.Graph{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._x=t.x,this._y=t.y}get x(){return this._x}get y(){return this._y}draw(t){t.beginPath(),t.arc(this._x,this._y,2,2*Math.PI,!1),t.fillStyle="red",t.fill()}}i.Point=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);class a extends e.Graph{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._intersection=i;let s=t.points;if(s){this._points=s.split(",");for(let t=0;t<this._points.length;t++)this._points[t]=this._points[t].trim()}}draw(t){let i,s,e,a,n=!1;t.save(),t.beginPath();for(let h=0;h<this._points.length;h+=2)if(this._points[h].startsWith("c")){let t=this._points[h].substring(1);i=parseFloat(t),s=parseFloat(this._points[h+1]),n=!0}else e=parseFloat(this._points[h]),a=parseFloat(this._points[h+1]),0===h?(t.beginPath(),t.moveTo(e,a)):n?(t.quadraticCurveTo(i,s,e,a),n=!1):t.lineTo(e,a);t.closePath(),this._data.fillStyle&&(t.fillStyle=this._data.fillStyle,t.fill()),this._data.strokeStyle&&(t.strokeStyle=this._data.strokeStyle,t.lineWith=this._data.lineWith||1,t.stroke()),t.restore()}}i.Shape=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);class a extends e.Graph{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i);let s=t.points.split(",");8===s.length?(this._p1={x:parseFloat(s[0]),y:parseFloat(s[1])},this._p2={x:parseFloat(s[2]),y:parseFloat(s[3])},this._p3={x:parseFloat(s[4]),y:parseFloat(s[5])},this._p4={x:parseFloat(s[6]),y:parseFloat(s[7])},this._px=interscetion_line.intersect({start:this._p1,end:this._p2},{start:this._p3,end:this._p4})):10===s.length?(this._p1={x:parseFloat(s[0]),y:parseFloat(s[1])},this._p2={x:parseFloat(s[2]),y:parseFloat(s[3])},this._px={x:parseFloat(s[4]),y:parseFloat(s[5])},this._p3={x:parseFloat(s[6]),y:parseFloat(s[7])},this._p4={x:parseFloat(s[8]),y:parseFloat(s[9])}):console.log("points's length is not >=8")}setFocusPoint(t,i){this._px.x=t,this._px.y=i}draw(t){t.beginPath(),t.moveTo(this._p1.x,this._p1.y),t.lineTo(this._p2.x,this._p2.y),t.quadraticCurveTo(this._px.x,this._px.y,this._p3.x,this._p3.y),t.lineTo(this._p4.x,this._p4.y),t.strokeStyle="green",t.lineWidth=2,t.stroke()}}i.IntersectCurve=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i),this._p1=t.p1,this._p2=t.p2,t.num=t.num||10,t.zebraWidth=t.zebraWidth||10,this.init()}init(){this._bounds=new a.Bounds;let t=Math.atan2(this._p2.y-this._p1.y,this._p2.x-this._p1.x),i=this._p1.x+this._data.zebraWidth*Math.cos(t-Math.PI/2),s=this._p1.y+this._data.zebraWidth*Math.sin(t-Math.PI/2),e=this._p1.x+this._data.zebraWidth*Math.cos(t+Math.PI/2),n=this._p1.y+this._data.zebraWidth*Math.sin(t+Math.PI/2);this._bounds.expandToIncludePoint(i,s),this._bounds.expandToIncludePoint(e,n);let h=this._p2.x+this._data.zebraWidth*Math.cos(t-Math.PI/2),_=this._p2.y+this._data.zebraWidth*Math.sin(t-Math.PI/2),o=this._p2.x+this._data.zebraWidth*Math.cos(t+Math.PI/2),d=this._p2.y+this._data.zebraWidth*Math.sin(t+Math.PI/2);this._bounds.expandToIncludePoint(h,_),this._bounds.expandToIncludePoint(o,d)}draw(t){t.save();let i=this._p1.x-this._p2.x,s=this._p1.y-this._p2.y,e=Math.atan2(this._p2.y-this._p1.y,this._p2.x-this._p1.x);t.lineWidth=2.8,t.strokeStyle=this._data.strokeStyle||"white";for(let a=0;a<this._data.num;a++){let n=a/this._data.num,h=this._p1.x-n*i,_=this._p1.y-n*s,o=h+this._data.zebraWidth*Math.cos(e-Math.PI/2),d=_+this._data.zebraWidth*Math.sin(e-Math.PI/2),l=h+this._data.zebraWidth*Math.cos(e+Math.PI/2),r=_+this._data.zebraWidth*Math.sin(e+Math.PI/2);t.beginPath(),t.moveTo(o,d),t.lineTo(l,r),t.lineCap="butt",t.stroke()}t.restore()}initGui(){let t=this;this._gui=new dat.GUI;let i={x1:this._data.p1.x,y1:this._data.p1.y,x2:this._data.p2.x,y2:this._data.p2.y,num:this._data.num,zebraWidth:this._data.zebraWidth};function s(){t._data.p1.x=i.x1,t._data.p1.y=i.y1,t._data.p2.x=i.x2,t._data.p2.y=i.y2,t._data.num=i.num,t._data.zebraWidth=i.zebraWidth,t.init(),t._intersection.repaint()}this._gui.add(i,"x1").onFinishChange(s),this._gui.add(i,"y1").onFinishChange(s),this._gui.add(i,"x2").onFinishChange(s),this._gui.add(i,"y2").onFinishChange(s),this._gui.add(i,"num").name("行数").onFinishChange(s),this._gui.add(i,"zebraWidth").name("宽度").onFinishChange(s)}}i.ZebraLine=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{constructor(t,i){super(t,i),this._points=[],this._data.angle=this._data.angle||0,this._data.fillStyle=this._data.fillStyle||"white",this.init()}static build(t,i){return new n(t,i)}init(){this._points=[];let t,i,s=n.arrowShapes[this._data.name].split(","),e=!1;this._bounds=new a.Bounds;for(let a=0;a<s.length;a+=2){let n=s[a],h=s[a+1];if(n.startsWith("c")){n=n.substring(1),t=parseFloat(n),i=parseFloat(h),e=!0,this._bounds.expandToIncludePoint(t,i);continue}let _=parseFloat(n),o=parseFloat(h);this._bounds.expandToIncludePoint(_,o),e?(this._points.push([t,i,_,o]),e=!1):this._points.push([_,o])}this._data.angle||(this._data.angle=0),this._data.angle&&this._bounds.rotate(this._data.angle/180*Math.PI),this._data.px&&this._bounds.translate(this._data.px.x,this._data.px.y)}_drawShape(t){t.beginPath();for(let i=0;i<this._points.length;i++){let s=this._points[i];0===i?t.moveTo(s[0],s[1]):4===s.length?t.quadraticCurveTo(s[0],s[1],s[2],s[3]):t.lineTo(s[0],s[1])}}draw(t){t.save(),this._data.px&&t.translate(this._data.px.x,this._data.px.y),t.rotate(this._data.angle/180*Math.PI),this._data.scale&&t.scale(this._data.scale,this._data.scale),t.fillStyle=this._data.fillStyle,this._drawShape(t),t.closePath(),t.fill(),t.restore()}initGui(){let t=this;this._gui=new dat.GUI;let i={name:this._data.name,x:this._data.px.x,y:this._data.px.y,angle:this._data.angle,scale:this._data.scale,fillStyle:this._data.fillStyle};function s(){t._data.name=i.name,t._data.px.x=i.x,t._data.px.y=i.y,t._data.angle=i.angle,t._data.scale=i.scale,t._data.fillStyle=i.fillStyle,t.init(),t._intersection.repaint()}this._gui.add(i,"name",{"直行":"direct","左转":"left","右转":"right","直行左转":"direct-left","直行右转":"direct-right"}).onFinishChange(s),this._gui.add(i,"x").onFinishChange(s),this._gui.add(i,"y").onFinishChange(s),this._gui.add(i,"angle").name("角度").onFinishChange(s),this._gui.add(i,"scale").name("比例").onFinishChange(s),this._gui.add(i,"fillStyle").name("填充样式").onFinishChange(s)}}n.arrowShapes={direct:"0,52.4,-3.9,31.5,-1.4,31.5,-1.4,0,1.2,0,1.2,31.5,3.9,31.5",right:"-6.75,36,-3.15,49.9,-3.15,41.4,6.75,31.3,6.75,0,4.15,0,4.15,23.5,-3.15,30.2,-3.15,22.9",left:"6.75,36,3.15,49.9,3.15,41.4,-6.75,31.3,-6.75,0,-4.15,0,-4.15,23.5,3.15,30.2,3.15,22.9","direct-right":"3.9,52.4,7.9,31.6,5.3,31.5,5.4,0.2,2.6,0,2.7,3.5,-4.1,10.3,-4.4,3,-7.9,15.8,-4.3,29.5,-4.3,20.9,2.6,14,2.8,31.5,0,31.4,3.8,52.3","direct-left":"-3.9,52.4,-7.9,31.6,-5.3,31.5,-5.4,0.2,-2.6,0,-2.7,3.5,4.1,10.3,4.4,3,7.9,15.8,4.3,29.5,4.3,20.9,-2.6,14,-2.8,31.5,0,31.4,-3.8,52.3"},i.Arrow=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(2);class a extends e.LineYellowSolid{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._data.dash=this._data.dash||[25,50]}draw(t){t.save(),t.beginPath(),t.moveTo(this._p1.x,this._p1.y),t.lineTo(this._p2.x,this._p2.y),t.lineCap="butt",t.setLineDash(this._data.dash),t.lineWidth=this._data.lineWidth,t.strokeStyle=this._data.strokeStyle,t.stroke(),t.restore()}}i.LineYellowDashed=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(4);class a extends e.LineWhiteSolid{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._data.dash=this._data.dash||[25,50]}draw(t){t.save(),t.beginPath(),t.moveTo(this._p1.x,this._p1.y),t.lineTo(this._p2.x,this._p2.y),t.lineCap="butt",t.setLineDash(this._data.dash),t.lineWidth=this._data.lineWidth,t.strokeStyle=this._data.strokeStyle,t.stroke(),t.restore()}}i.LineWhiteDashed=a},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i),this._p1=t.p1,this._p2=t.p2,this._px=t.px,this._data.strokeStyle=this._data.strokeStyle||"white",this._data.lineWidth=this._data.lineWidth||1,this.init()}init(){this._bounds=new a.Bounds,this._bounds.expandToIncludePoint(this._p1.x,this._p1.y),this._bounds.expandToIncludePoint(this._px.x,this._px.y),this._bounds.expandToIncludePoint(this._p2.x,this._p2.y),this._bounds.expandBy(2,2)}setFocusPoint(t,i){this._px.x=t,this._px.y=i}draw(t){t.save(),t.beginPath(),t.moveTo(this._p1.x,this._p1.y),t.quadraticCurveTo(this._px.x,this._px.y,this._p2.x,this._p2.y),t.strokeStyle=this._data.strokeStyle,t.lineWidth=this._data.lineWidth,this._data.dash&&t.setLineDash(this._data.dash),t.stroke(),t.restore()}initGui(){let t=this;this._gui=new dat.GUI;let i={x1:this._data.p1.x,y1:this._data.p1.y,x2:this._data.p2.x,y2:this._data.p2.y,c1:this._data.px.x,c2:this._data.px.y,strokeStyle:this._data.strokeStyle,lineWidth:this._data.lineWidth};function s(){if(t._data.p1.x=i.x1,t._data.p1.y=i.y1,t._data.p2.x=i.x2,t._data.p2.y=i.y2,t._data.px.x=i.c1,t._data.px.y=i.c2,t._data.lineWidth=i.strokeStyle,t._data.lineWidth=i.lineWidth,i.dash){let s=i.dash.split(",");t._data.dash=s.map(t=>parseFloat(t))}t.init(),t._intersection.repaint()}this._data.dash&&(i.dash=this._data.dash.join(",")),this._gui.add(i,"x1").onFinishChange(s),this._gui.add(i,"y1").onFinishChange(s),this._gui.add(i,"x2").onFinishChange(s),this._gui.add(i,"y2").onFinishChange(s),this._gui.add(i,"c1").name("控制点x").onFinishChange(s),this._gui.add(i,"c2").name("控制点y").onFinishChange(s),this._data.dash&&this._gui.add(i,"dash").name("虚线设置").onFinishChange(s),this._gui.add(i,"strokeStyle").name("画笔样式").onFinishChange(s),this._gui.add(i,"lineWidth").name("画笔宽度").onFinishChange(s)}}i.Curve=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(1),a=s(5);class n extends a.Pole{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i)}init(){this._bounds=new e.Bounds,this._bounds.expandToIncludePoint(-12,-12),this._bounds.expandToIncludePoint(12,12),this._px&&this._bounds.translate(this._px.x,this._px.y)}draw(t){t.save(),this._px&&t.translate(this._px.x,this._px.y),this._data.angle&&t.rotate(this._data.angle/180*Math.PI),this._data.scale&&t.scale(this._data.scale,this._data.scale),t.fillStyle=this._data.fillStyle||"black",t.beginPath(),t.ellipse(0,0,3,6,Math.PI/2,0,2*Math.PI),t.fillRect(-12,2.5,24,4),t.fill(),t.restore()}}i.PoleBoard=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(1),a=s(5);class n extends a.Pole{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i)}init(){this._bounds=new e.Bounds,this._bounds.expandToIncludePoint(-5,-5),this._bounds.expandToIncludePoint(5,5),this._px&&this._bounds.translate(this._px.x,this._px.y)}draw(t){t.save(),this._px&&t.translate(this._px.x,this._px.y),t.rotate(this._data.angle/180*Math.PI),t.fillStyle=this._data.fillStyle,t.beginPath(),t.fillRect(-5,-1.5,10,3),t.fill(),t.restore()}}i.PoleFlag=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{static build(t,i){return new n(t,i)}static buildRYG(t,i){return t.src="./images/红黄绿.png",new n(t,i)}constructor(t,i){super(t,i),this._px=t.px,this._image=new Image,this._image.src=t.src,this._image.onload=(()=>{this.init()})}init(){this._bounds=new a.Bounds;let t=this._image.width,i=this._image.height;this._data.scale&&(t*=this._data.scale,i*=this._data.scale),this._bounds.expandToIncludePoint(-t/2,-i/2),this._bounds.expandToIncludePoint(t/2,i/2),this._data.angle||(this._data.angle=0),this._data.angle&&this._bounds.rotate(this._data.angle/180*Math.PI),this._px&&this._bounds.translate(this._px.x,this._px.y),this._intersection.repaint()}draw(t){this._image.width&&(t.save(),this._px&&t.translate(this._px.x,this._px.y),this._data.angle&&t.rotate(this._data.angle/180*Math.PI),this._data.scale&&t.scale(this._data.scale,this._data.scale),t.translate(-this._image.width/2,-this._image.height/2),t.drawImage(this._image,0,0),t.restore())}initGui(){let t=this;this._gui=new dat.GUI;let i={x:this._data.px.x,y:this._data.px.y,angle:this._data.angle,scale:this._data.scale,src:this._data.src};function s(){t._data.px.x=i.x,t._data.px.y=i.y,t._data.angle=i.angle,t._data.scale=i.scale,t._data.src=i.src,t.init(),t._intersection.repaint()}this._gui.add(i,"x").onFinishChange(s),this._gui.add(i,"y").onFinishChange(s),this._gui.add(i,"angle").name("角度").onFinishChange(s),this._gui.add(i,"scale").name("比例").onFinishChange(s),this._gui.add(i,"src").name("图片").onFinishChange(s)}}i.Flag=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0),a=s(1);class n extends e.Graph{static build(t,i){return new n(t,i)}constructor(t,i){super(t,i),this._px=t.px,this._data.orient=this._data.orient||0,this._data.fontSize=this._data.fontSize||25,this._data.fontName=this._data.fontName||"宋体",this._data.fillStyle=this._data.fillStyle||"black",this.init()}init(){this._font=this._data.fontSize+"px "+this._data.fontName;let t=this.getLabelSize(this._data.label,this._font);this._width=t[0],this._height=t[1],this._bounds=new a.Bounds,this._bounds.expandToIncludePoint(-this._width/2,-this._height/2),this._bounds.expandToIncludePoint(this._width/2,this._height/2),this._px&&this._bounds.translate(this._px.x,this._px.y),this._intersection.repaint()}draw(t){t.save(),this._px&&t.translate(this._px.x,this._px.y),t.font=this._font,t.fillStyle=this._data.fillStyle,t.fillText(this._data.label,-this._width/2,this._height/2),t.restore()}initGui(){let t=this;this._gui=new dat.GUI;let i={x:this._data.px.x,y:this._data.px.y,fontSize:this._data.fontSize,fontName:this._data.fontName,fillStyle:this._data.fillStyle};function s(){t._data.px.x=i.x,t._data.px.y=i.y,t._data.fontSize=i.fontSize,t._data.fontName=i.fontName,t._data.fillStyle=i.fillStyle,t.init(),t._intersection.repaint()}this._gui.add(i,"x").onFinishChange(s),this._gui.add(i,"y").onFinishChange(s),this._gui.add(i,"fontSize").name("字体大小").onFinishChange(s),this._gui.add(i,"fontName").name("字体名称").onFinishChange(s),this._gui.add(i,"fillStyle").name("填充样式").onFinishChange(s)}getLabelSize(t,i){let s=document.createElement("label");s.style.font=i,s.innerText=t,document.body.appendChild(s);let e=[s.offsetWidth,s.offsetHeight];return document.body.removeChild(s),e}}i.Label=n},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const e=s(0);class a extends e.Graph{static build(t,i){return new a(t,i)}constructor(t,i){super(t,i),this._intersection=i;let s=t.points;if(s){this._points=s.split(",");for(let t=0;t<this._points.length;t++)this._points[t]=this._points[t].trim()}this._data.strokeStyle=this._data.strokeStyle||"black",this._data.lineWith=this._data.lineWith||1}draw(t){let i,s,e,a,n=!1;t.save(),t.beginPath();for(let h=0;h<this._points.length;h+=2)if(this._points[h].startsWith("c")){let t=this._points[h].substring(1);i=parseFloat(t),s=parseFloat(this._points[h+1]),n=!0}else e=parseFloat(this._points[h]),a=parseFloat(this._points[h+1]),0===h?(t.beginPath(),t.moveTo(e,a)):n?(t.quadraticCurveTo(i,s,e,a),n=!1):t.lineTo(e,a);t.strokeStyle=this._data.strokeStyle,t.lineWith=this._data.lineWith,t.stroke(),t.restore()}}i.Polyline=a}]);