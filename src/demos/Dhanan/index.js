import { TextPath } from '@svgdotjs/svg.js';
import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';
import data from './data.json'
console.log('Hello JDESIGNS');
// console.log(data)
function clearGraphic() {

}


let app = new JDEApplication();
let textDemo = new JDEGraphic();
let line = new JDEGraphic();

let graph = new JDEGraphic();
let point1 = new JDEGraphic();
let point2 = new JDEGraphic();
let point3 = new JDEGraphic();
let point4 = new JDEGraphic();
let timeText = new JDEGraphic();
let tempText = new JDEGraphic();


// TEMPERATURE HEADING 
tempText.textColor('#000');
tempText.fontSize(18);
tempText.drawText(0, 160, 'TEMP(*C)')

// TIME HEADING 
timeText.textColor('#000');
timeText.fontSize(18);
timeText.drawText(200, 286, 'TIME')



// ******GRAPH LINES******* 

// VERTICAL LINE
line.lineStyle('#000', 1, 1);
line.moveTo(30, 10);
line.lineTo(30, 244);

// HORIZONTAL LINES
for (let i = 244; i > 24; i -= 30) {
    let lineX = new JDEGraphic();
    lineX.lineStyle('#000', 1, 1);
    lineX.moveTo(30, i);
    lineX.lineTo(430, i);
    graph.add(lineX);
}

// TEMP VALUES 
for (let i = 236, j = 0; i >= 54; i -= 30, j++) {
    let temp = new JDEGraphic();
    temp.textColor('#000');
    temp.drawText(7, i, data.temps[j])
    graph.add(temp);
}

// TIME VALUES 
for (let i = 46, j = 0; i <= 376; i += 80, j++) {
    let time = new JDEGraphic();
    time.textColor('#000');
    time.fontSize(13);
    time.drawText(i, 242, data.times[j])
    graph.add(time);
}

// TEMPERATURE POINTS 
for (let i = 0, j = 0; i < (data.points.length) / 2; i++, j += 2) {
    let point = new JDEGraphic();
    point.lineStyle('#624', 1, 2);
    point.moveTo(data.points[j], data.points[j + 1]);
    point.lineTo(data.points[j + 2], data.points[j + 3]);
    graph.add(point);
}



// POSITIONING THE GRAPH
graph.y = 50;
graph.x = 80;


//  ADDING CHILDREN
app.add(textDemo);
app.add(tempText);
textDemo.add(graph);
graph.add(timeText);
graph.add(line);
graph.add(point1);
graph.add(point2);
graph.add(point3);
graph.add(point4);




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






