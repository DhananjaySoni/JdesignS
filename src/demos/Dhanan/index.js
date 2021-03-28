import { TextPath } from '@svgdotjs/svg.js';
import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';

console.log('Hello JDESIGNS');

function clearGraphic() {
    // textDemo.clear();
}

let app = new JDEApplication();
let textDemo = new JDEGraphic();

let line = new JDEGraphic();
let line1 = new JDEGraphic();
let line2 = new JDEGraphic();
let line3 = new JDEGraphic();
let line4 = new JDEGraphic();
let line5 = new JDEGraphic();
let line6 = new JDEGraphic();
let line7 = new JDEGraphic();
let line8 = new JDEGraphic();
let text = new JDEGraphic();
let text1 = new JDEGraphic();
let text2 = new JDEGraphic();
let text3 = new JDEGraphic();
let text4 = new JDEGraphic();
let text5 = new JDEGraphic();
let text6 = new JDEGraphic();
let textBottom1 = new JDEGraphic();
let textBottom2 = new JDEGraphic();
let textBottom3 = new JDEGraphic();
let textBottom4 = new JDEGraphic();
let textBottom5 = new JDEGraphic();
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

// GRAPH LINES 
line.lineStyle('#000', 1, 1);
line.moveTo(30, 10);
line.lineTo(30, 244);
line1.lineStyle('#000', 1, 1);
line1.moveTo(30, 244);
line1.lineTo(430, 244);
line2.lineStyle('#000', 1, 1);
line2.moveTo(30, 214);
line2.lineTo(430, 214);
line3.lineStyle('#000', 1, 1);
line3.moveTo(30, 184);
line3.lineTo(430, 184);
line4.lineStyle('#000', 1, 1);
line4.moveTo(30, 154);
line4.lineTo(430, 154);
line5.lineStyle('#000', 1, 1);
line5.moveTo(30, 124);
line5.lineTo(430, 124);
line6.lineStyle('#000', 1, 1);
line6.moveTo(30, 94);
line6.lineTo(430, 94);
line7.lineStyle('#000', 1, 1);
line7.moveTo(30, 64);
line7.lineTo(430, 64);
line8.lineStyle('#000', 1, 1);
line8.moveTo(30, 34);
line8.lineTo(430, 34);

// TEMPERATURE LINES 
point1.lineStyle('#624',1,2);
point1.moveTo(56,184);
point1.lineTo(146,144);

point2.lineStyle('#624',1,2);
point2.moveTo(146,144);
point2.lineTo(226,214);

point3.lineStyle('#624',1,2);
point3.moveTo(226,214);
point3.lineTo(306,94);

point4.lineStyle('#624',1,2);
point4.moveTo(306,94);
point4.lineTo(386,184);

// TEMPERATURE HEADING 
tempText.textColor('#000');
tempText.fontSize(18);
tempText.drawText(0,160,'TEMP(*C)')

// TEMP VALUES 
text.textColor('#000');
text.drawText(17, 236, '0');
text1.textColor('#000');
text1.drawText(7, 204, '20');
text2.textColor('#000');
text2.drawText(7, 174, '25');
text3.textColor('#000');
text3.drawText(7, 144, '35');
text4.textColor('#000');
text4.drawText(7, 114, '40');
text5.textColor('#000');
text5.drawText(7, 84, '45');
text6.textColor('#000');
text6.drawText(7, 54, '50');

// TIME VALUES 
textBottom1.textColor('#000');
textBottom1.fontSize(13);
textBottom1.drawText(46, 242, '01:00');
textBottom2.textColor('#000');
textBottom2.fontSize(13);
textBottom2.drawText(136, 242, '02:00');
textBottom3.textColor('#000');
textBottom3.fontSize(13);
textBottom3.drawText(216, 242, '03:00');
textBottom4.textColor('#000');
textBottom4.fontSize(13);
textBottom4.drawText(296, 242, '04:00');
textBottom5.textColor('#000');
textBottom5.fontSize(13);
textBottom5.drawText(376, 242, '05:00');
textBottom5.y = 50;
textBottom5.x = 80;

// TIME HEADING 
// timeText.textColor('#000');
// timeText.fontSize(18);
// timeText.drawText(200,286,'TIME')

//  ADDING CHILDREN
app.add(textDemo);
app.add(tempText);
textDemo.add(textBottom5);
textBottom5.add(textBottom4);
textBottom4.add(textBottom3);
textBottom3.add(textBottom2);
textBottom2.add(textBottom1);
textBottom1.add(timeText);
timeText.add(text6);
text6.add(text5);
text5.add(text4);
text4.add(text3);
text3.add(text2);
text2.add(text1);
text1.add(text);
text.add(line8);
line8.add(line7);
line7.add(line6);
line6.add(line5);
line5.add(line4);
line4.add(line3);
line3.add(line2);
line2.add(line1);
line1.add(line);
line.add(point1);
point1.add(point2);
point2.add(point3);
point3.add(point4);

document.getElementById('clearG').onclick = clearGraphic;








