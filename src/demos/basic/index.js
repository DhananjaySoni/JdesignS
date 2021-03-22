// import {JDEApplication} from '../../scripts/core/JDEApplication.js';
// import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
// import { JDEVector } from '../../scripts/math/JDEVector.js';
// import {DrawingAttributes } from '../../scripts/attributes/DrawingAttributes.js';

// console.log('Hello JDESIGNS');

// function clearGraphic(){
//     child.clear();
// }

// let app = new JDEApplication();
// let child = new JDEGraphic();
// let c = new JDEGraphic();
// let c1 =  new JDEGraphic();
// let c3 =new JDEGraphic();
// c.circle(135,130,50).fillColor("#000000");
// c.circle(265,130,50).fillColor("#000000");
// c1.ellipse(180,240,90,60).stroke("#ff0000", 5).fillColor("#FFFF00");
// child.circle(75, 75, 300);
// child.fillColor("#ffff00");
// c.x=100;
// c.y=100;
// c.add(child);
// c.add(c1);
// app.add(c);
function  hello(...inputs)
{
console.log(...inputs);

}

<<<<<<< HEAD
hello('m20 d34',50,new Date);
=======
let app = new JDEApplication();
let child = new JDEGraphic();
let c = new JDEGraphic();


c.lineStyle('#FF0000', 1.0, 5);
c.fillStyle('#0000FF', 0.1);
c.moveTo(0, 0);
c.lineTo(150, 0);
c.lineTo(150, 150);
c.lineTo(0, 150);
c.lineTo(0, 0);

c.lineStyle('#00FF00', 1.0, 5);
c.fillStyle('#FF0000', 0.1);
c.circle(75, 75, 50);

child.x = 150;
child.y = 150;
// child.scale = new JDEVector(2, 1);

app.add(child);
child.add(c);



document.getElementById('clearG').onclick=clearGraphic;






>>>>>>> 5331de6e4612c4890c711cbcd147b52723c74e76


