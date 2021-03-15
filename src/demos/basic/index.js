import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';

console.log('Hello JDESIGNS');

let app = new JDEApplication();
let child = new JDEGraphic();

function clearGraphic(){
    child.clear();
}


document.getElementById('clearG').onclick=clearGraphic;
child.rectangle(50,50);


app.add(child);






