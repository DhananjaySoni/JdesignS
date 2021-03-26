import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';
console.log('Hello JDESIGNS');
function clearGraphic(){
    child.clear();
}
let app = new JDEApplication();
let c = new JDEGraphic();
// let child = new JDEGraphic();
// child.lineStyle('#f06',1,5);
// child.fillStyle('#0f6')  
// child.rectangle(0,0,200,200);
// c.lineStyle('#f06',1,1);
// c.fillStyle('#f06');
// c.textStyle('#000000','Arial',16,0,'start','normal','normal','normal','extra-condensed');
c.textColor('#085');
c.fontSize(15);
c.fontLeading(15);
// console.log(c.leading);
c.drawText(0,20,'Hello my Name is Priyam Agarwal');
app.add(c);
// c.add(child);
document.getElementById('clearG').onclick=clearGraphic;
