import { Intersection } from "./intersection";

if(!window["data"]) {
    console.error("can not find intersection data!")
}
let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

let intersection = new Intersection(canvas,window["data"]);

canvas.addEventListener('click', mouseClick, true);

canvas.addEventListener('mousemove', mouseMove, true);

function mouseClick(event) {
    intersection.mouseClick(event);
}

function mouseMove(event) {
    intersection.mouseMove(event);
}

