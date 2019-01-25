import { Intersection } from "./intersection";
if (!window["data"]) {
    console.error("can not find intersection data!");
}
let canvas = document.getElementById("canvas");
let intersection = new Intersection(canvas, window["data"]);
canvas.addEventListener('click', mouseClick, true);
canvas.addEventListener('mousemove', mouseMove, true);
canvas.addEventListener("mousewheel", mouseWheel, true);
function mouseClick(event) {
    intersection.mouseClick(event);
}
function mouseMove(event) {
    intersection.mouseMove(event);
}
function mouseWheel(event) {
    event.preventDefault();
    event.stopPropagation();
    intersection.mouseWheel(event);
}
