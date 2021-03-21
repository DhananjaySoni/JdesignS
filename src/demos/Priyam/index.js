import { IcosahedronBufferGeometry } from 'three';
import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';
console.log('Hello JDESIGNS');
function clearGraphic(){
    child.clear();
}
let app = new JDEApplication();
// let child = new JDEGraphic();
let c = new JDEGraphic();
// child.lineStyle('#f06',1,5);
// child.fillStyle('#0f6')
// child.rectangle(0,0,200,200);
// c.lineStyle('#f06',1,1);
// c.fillStyle('#f06');
c.drawText(0,20,'Hello my Name is Priyam Agarwal');
app.add(c);
// c.add(child);
document.getElementById('clearG').onclick=clearGraphic;