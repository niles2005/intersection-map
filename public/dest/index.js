"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intersection_1 = require("./intersection");
if (!window["data"]) {
    console.error("can not find intersection data!");
}
var canvas = document.getElementById("canvas");
var intersection = new intersection_1.Intersection(canvas, window["data"]);
canvas.addEventListener('click', mouseClick, true);
canvas.addEventListener('mousemove', mouseMove, true);
canvas.addEventListener("mousewheel", mouseWheel, true);
function mouseClick(event) {
    var str = intersection.mouseClick(event);
}
function mouseMove(event) {
    intersection.mouseMove(event);
}
function mouseWheel(event) {
    event.preventDefault();
    event.stopPropagation();
    intersection.mouseWheel(event);
}
canvas.addEventListener("mousedown", function (event) {
    var offsetX = event.offsetX - intersection.origoX;
    var offsetY = event.offsetY - intersection.origoY;
    var draggingMouse = function (event) {
        intersection.origoX = event.offsetX - offsetX;
        intersection.origoY = event.offsetY - offsetY;
        intersection.repaint();
    };
    var droppedMouse = function (event) {
        document.removeEventListener("mousemove", draggingMouse);
        document.removeEventListener("mouseup", droppedMouse);
    };
    document.addEventListener("mousemove", draggingMouse);
    document.addEventListener("mouseup", droppedMouse);
});
