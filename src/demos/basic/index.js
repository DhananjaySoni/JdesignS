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
//


child.rectangle(50,50);
child.fillstyle('#f06');
c.fillstyle('#00f');
c.addtext('vinayak');
c.movecenter(25,25);
//c.group();

app.add(child);
app.add(c);





