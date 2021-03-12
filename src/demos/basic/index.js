import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';

console.log('Hello JDESIGNS');

let app = new JDEApplication();
let child = new JDEGraphic();
let child2 = new JDEGraphic();
let child3 = new JDEGraphic();

function clearGraphic(){
    child.clear();
}


document.getElementById('clearG').onclick=clearGraphic;

child.graphic.rect(50, 50);//Should not work in the final deployment

//child.x = xposition;
//child.y = yposition;

//child.scale = somescalarvalue;
//child.rotation = rotationinradians(a scalar value);

//console.log(child.worldCoordinates);
//console.log(child.worldToLocal(convertWorldCoordinates==>(ajdevectorinstance))
//console.log(child.localToWorld(convertLocalCoordinates==>(ajdevectorinstance))

// child.lineStyle(1, color);
// child.fillStyle(rgb, alpha);

// child.moveTo(x, y);
// child.lineTo(x, y);
// child.lineTo(x, y);

// child.rectangle(x, y, w, h, fill=true/false);
// child.circle(x, y, r, fill=true/false);

// child.lineStyle(2, differentrgb);
// child.roundedrectangle(x, y, w, h, r, fill=true/false);

app.add(child);
app.add(child2);
child.add(child3);
