import { TextPath } from '@svgdotjs/svg.js';
import { RGB_ETC1_Format } from 'three';
import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';

console.log('Hello JDESIGNS');

function clearGraphic() {
    // textDemo.clear();
}


let coordinatesApp = new JDEApplication();
let fig1 = new JDEGraphic();
let fig2 = new JDEGraphic();
let fig3 = new JDEGraphic();

fig1.fillStyle('#f00',1);
fig1.roundedRectangle(10,10,50,50,10,10);
console.log('fig1')
console.log(fig1.__matrix)
// console.log('x:'+fig1.x+',y:'+fig1.y)


fig2.fillStyle('#0f0',1);
fig2.rectangle(10,10,100,100);
console.log('fig2')
console.log(fig2.__matrix)
// // console.log('x:'+fig2.x+',y:'+fig2.y)

fig3.fillStyle('#00f',1);
fig3.rectangle(20,10,150,150);
console.log('fig3')
console.log(fig3.__matrix)
// console.log('x:'+fig3.x+',y:'+fig3.y)



// fig1.add(fig2);
fig1.add(fig2);
fig2.add(fig3);
//fig3.setToWorld(50,50);
coordinatesApp.add(fig1);

let worldpoints =fig3.getGlobalCoordinates();
console.log(worldpoints);
 
 
fig3.getLocalcoordinates(fig1);




document.getElementById('clearG').onclick = clearGraphic;










