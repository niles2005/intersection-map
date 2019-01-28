import { Intersection } from "./intersection";

if(!window["data"]) {
    console.error("can not find intersection data!")
}
let canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

let intersection = new Intersection(canvas,window["data"]);

canvas.addEventListener('click', mouseClick, true);

canvas.addEventListener('mousemove', mouseMove, true);

canvas.addEventListener("mousewheel",mouseWheel,true);

function mouseClick(event) {
    let str = intersection.mouseClick(event);
    // (<HTMLInputElement>document.getElementById("input")).value = str;
}

function mouseMove(event) {
    intersection.mouseMove(event);
}

function mouseWheel(event) {
    event.preventDefault();
    event.stopPropagation();
    intersection.mouseWheel(event);
}

canvas.addEventListener("mousedown",function(event) {
    let offsetX = event.offsetX - intersection.origoX;
    let offsetY = event.offsetY - intersection.origoY; 
    
    var draggingMouse = function(event) {
        intersection.origoX = event.offsetX - offsetX;
        intersection.origoY = event.offsetY - offsetY;

        intersection.repaint();
    }
    var droppedMouse = function(event) {
        document.removeEventListener("mousemove",draggingMouse);
        document.removeEventListener("mouseup",droppedMouse);
    };
    document.addEventListener("mousemove",draggingMouse);
    document.addEventListener("mouseup",droppedMouse);
});

