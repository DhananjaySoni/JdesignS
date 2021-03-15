import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';

console.log('Hello JDESIGNS');

let app = new JDEApplication();
let child = new JDEGraphic();
let c = new JDEGraphic();

function clearGraphic() {
    child.clear();
}

document.getElementById('clearG').onclick = clearGraphic;

child.rectangle(50, 50);
child.coordinate();
child.size(100, 100);
child.attribute = { fill: "0xf06" }
child.width(200);
child.height(25);


app.add(child);







