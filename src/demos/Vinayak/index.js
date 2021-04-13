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

fig1.fillStyle('#f00', 1);
fig1.roundedRectangle(10, 10, 50, 50, 10, 10);
fig1.x = 10;
fig1.y = 10;


fig2.fillStyle('#0f0', 1);
fig2.rectangle(10, 10, 100, 100);
fig2.x = 10;
fig2.y = 10;

fig3.fillStyle('#00f', 1);
fig3.rectangle(20, 10, 150, 150);
fig3.x = 20;
fig3.y = 10;


fig1.add(fig2);
fig2.add(fig3);

coordinatesApp.add(fig1);

let worldpoints = fig3.getGlobalCoordinates();
console.log(worldpoints);


fig3.getLocalcoordinates(fig1);




document.getElementById('clearG').onclick = clearGraphic;










