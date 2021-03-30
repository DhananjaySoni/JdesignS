import { TextPath } from '@svgdotjs/svg.js';
import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';
import data from './data.json'
console.log('Hello JDESIGNS');
console.log(data)
function clearGraphic() {
    // textDemo.clear();
    // tempText.clear();
    // graph.clear();
}


let app = new JDEApplication();
let textDemo = new JDEGraphic();
let line = new JDEGraphic();
// let text = new JDEGraphic();
// let text1 = new JDEGraphic();
// let text2 = new JDEGraphic();
// let text3 = new JDEGraphic();
// let text4 = new JDEGraphic();
// let text5 = new JDEGraphic();
// let text6 = new JDEGraphic();
// let textBottom1 = new JDEGraphic();
// let textBottom2 = new JDEGraphic();
// let textBottom3 = new JDEGraphic();
// let textBottom4 = new JDEGraphic();
// let textBottom5 = new JDEGraphic();
let graph = new JDEGraphic();
let point1 = new JDEGraphic();
let point2 = new JDEGraphic();
let point3 = new JDEGraphic();
let point4 = new JDEGraphic();
let timeText = new JDEGraphic();
let tempText = new JDEGraphic();

// HEADING 
// textDemo.textColor('#005');
// textDemo.fontSize(22);
// textDemo.fontLetterSpace(5);
// textDemo.drawText(100, 30, 'Temperature in New York');

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


// TEMPERATURE POINTS 
// point1.lineStyle('#624', 1, 2);
// point1.moveTo(56, 184);
// point1.lineTo(146, 154);

// point2.lineStyle('#624', 1, 2);
// point2.moveTo(146, 154);
// point2.lineTo(226, 214);

// point3.lineStyle('#624', 1, 2);
// point3.moveTo(226, 214);
// point3.lineTo(306, 94);

// point4.lineStyle('#624', 1, 2);
// point4.moveTo(306, 94);
// point4.lineTo(386, 184);


// TEMP VALUES 
// text.textColor('#000');
// text.drawText(17, 236, '0');
// text1.textColor('#000');
// text1.drawText(7, 204, '20');
// text2.textColor('#000');
// text2.drawText(7, 174, '25');
// text3.textColor('#000');
// text3.drawText(7, 144, '35');
// text4.textColor('#000');
// text4.drawText(7, 114, '40');
// text5.textColor('#000');
// text5.drawText(7, 84, '45');
// text6.textColor('#000');
// text6.drawText(7, 54, '50');


// TIME VALUES
// textBottom1.textColor('#000');
// textBottom1.fontSize(13);
// textBottom1.drawText(46, 242, '01:00');
// textBottom2.textColor('#000');
// textBottom2.fontSize(13);
// textBottom2.drawText(136, 242, '02:00');
// textBottom3.textColor('#000');
// textBottom3.fontSize(13);
// textBottom3.drawText(216, 242, '03:00');
// textBottom4.textColor('#000');
// textBottom4.fontSize(13);
// textBottom4.drawText(296, 242, '04:00');
// textBottom5.textColor('#000');
// textBottom5.fontSize(13);
// textBottom5.drawText(376, 242, '05:00');

// POSITIONING THE GRAPH
graph.y = 50;
graph.x = 80;

let textP = new JDEGraphic();
textP.textPath('dhananjay','M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80')
app.add(textP)
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
// graph.add(textBottom5);
// graph.add(textBottom4);
// graph.add(textBottom3);
// graph.add(textBottom2);
// graph.add(textBottom1);
// graph.add(text6);
// graph.add(text5);
// graph.add(text4);
// graph.add(text3);
// graph.add(text2);
// graph.add(text1);
// graph.add(text);
// app.add(line7);
// app.add(line6);
// line6.add(line5);
// line5.add(line4);
// line4.add(line3);
// line3.add(line2);
// line2.add(line1);
// line1.add(line);


document.getElementById('clearG').onclick = clearGraphic;








