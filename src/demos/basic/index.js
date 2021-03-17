import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';

console.log('Hello JDESIGNS');

function clearGraphic(){
    child.clear();
}

let app = new JDEApplication();
let child = new JDEGraphic();
let c = new JDEGraphic();


c.lineStyle('#0000FF', 1.0, 5);
c.fillStyle('#0000FF', 0.1);
c.moveTo(0, 0);
c.lineTo(150, 0);
c.lineTo(150, 150);
c.lineTo(0, 150);
c.lineTo(0, 0);

c.circle(75, 75, 50);

child.x = 150;
child.y = 150;
// child.scale = new JDEVector(2, 1);

app.add(child);
child.add(c);



document.getElementById('clearG').onclick=clearGraphic;








