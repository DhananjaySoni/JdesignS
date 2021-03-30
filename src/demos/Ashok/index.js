import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';

console.log('Hello JDESIGNS');

function clearGraphic(){
    child.clear();
}

function drawGrid(jdeElement, startX, startY, width, height, resolutionX = 10, resolutionY = 10){

    let unitX = width / resolutionX;
    let unitY = height / resolutionY;
    let i = 0;
    jdeElement.clear();
    jdeElement.lineStyle('#000000', 1.0, 1);
    for (i=0;i<resolutionX;i++){
        let x = startX + (i * unitX);
       
        jdeElement.moveTo(x, startY);
        jdeElement.lineTo(x, startY + height);
    }

    for (i=0;i<resolutionY;i++){
        let y = startY + (i * unitY);
        jdeElement.moveTo(startX, y);
        jdeElement.lineTo(startX + width, y);
    }

    jdeElement.lineStyle('#C3C3C3', 1.0, 5);

    jdeElement.moveTo(startX, startY + height);
    jdeElement.lineTo(startX + width, startY + height);

    jdeElement.moveTo(startX, startY);
    jdeElement.lineTo(startX, startY + height);
}

let app = new JDEApplication();
let graph = new JDEGraphic();

let axisMarkers = new JDEGraphic();
let grid = new JDEGraphic();


drawGrid(grid, 30, 30, 300, 300, 5, 5);

graph.add(grid);
graph.add(axisMarkers);

app.add(graph);


