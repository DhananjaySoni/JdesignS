import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';

console.log('Hello JDESIGNS');

let app = new JDEApplication();
let child = new JDEGraphic();
let c= new JDEGraphic();
 function clearGraphic(){
    child.clear();
}


 document.getElementById('clearG').onclick=clearGraphic;



c.rectangle(0,0,50,50);
c.fillStyle('#f06');
child.fillStyle('#00f');
child.addtext('vinayak');

child.moveCenter(25,25);



 app.add(child);
 child.add(c);
 
 child.moveTo(50,50);
 //child.add(c);





