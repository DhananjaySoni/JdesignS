import {JDEApplication} from '../../scripts/core/JDEApplication.js';
import {JDEGraphic} from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';
import data from './data.json';
console.log('Hello JDESIGNS');
function clearGraphic(){
    child.clear();
}
let app = new JDEApplication();
let line = new JDEGraphic();
let graph = new JDEGraphic();
let rect1=new JDEGraphic();
let rect2=new JDEGraphic();
let text1=new JDEGraphic();
let text2=new JDEGraphic();

line.lineStyle('#000', 1, 1);
line.moveTo(30, 10);
line.lineTo(30, 244);

rect1.lineStyle('#000',1,1);   
rect1.fillStyle('#0f6');
rect1.rectangle(340,-30,10,10);
rect2.lineStyle('#000',1,1);   
rect2.fillStyle('#f06');
rect2.rectangle(340,-10,10,10);

text1.textColor('#000');
text1.fontSize(13);
text1.drawText(354,-34,'Export of Goods');
text2.textColor('#000');
text2.fontSize(13);
text2.drawText(354,-14,'Import of Goods');

for (let i = 244; i > 24; i -= 30) {
    let lineX = new JDEGraphic();
    lineX.lineStyle('#000', 1, 1);
    lineX.moveTo(30, i);
    lineX.lineTo(430, i);
    graph.add(lineX);
}

for (let i = 236, j = 0; i >= 24; i -= 30, j++) {
    let temp = new JDEGraphic();
    temp.textColor('#000');
    temp.drawText(7, i, data.value[j])
    graph.add(temp);
}


for (let i = 46, j = 0; i <= 286; i += 80, j++) {
    let time = new JDEGraphic();
    time.textColor('#000');
    time.fontSize(13);
    time.drawText(i, 242, data.times[j]);
    graph.add(time);
}

for(let i=40,j=0;i<=360;i+=80,j++){
    let Import=new JDEGraphic();
    Import.lineStyle('#000',1,0.6);
    Import.fillStyle('#0f6'); 
    Import.rectangle(i,244-data.import[j],30,data.import[j]);
    graph.add(Import);
}


for(let i=70,j=0;i<=390;i+=80,j++){
    let Export=new JDEGraphic();
    Export.lineStyle('#000',1,0.6);
    Export.fillStyle('#f06'); 
    Export.rectangle(i,244-data.export[j],30,data.export[j]);
    graph.add(Export);
}

graph.x=40;
graph.y=40;


app.add(graph);
graph.add(line);
graph.add(rect1);
graph.add(rect2);
graph.add(text1);
graph.add(text2);
graph.add(graph);
// // let child = new JDEGraphic();
// let line = new JDEGraphic();
// let line1=new JDEGraphic();
// let line2=new JDEGraphic();
// let line3=new JDEGraphic();
// let line4=new JDEGraphic();
// let line5=new JDEGraphic();
// let line6=new JDEGraphic();
// let line7=new JDEGraphic();
// let line8=new JDEGraphic();
// let c = new JDEGraphic();
// let c1=new JDEGraphic();
// let c2=new JDEGraphic();
// let c3=new JDEGraphic();
// let c4=new JDEGraphic();
// let c5=new JDEGraphic(); 
// let c6=new JDEGraphic();
// let c7=new JDEGraphic(); 
// let c8=new JDEGraphic();
// let c9=new JDEGraphic();
// let text=new JDEGraphic();
// let text1=new JDEGraphic();
// let text2=new JDEGraphic();
// let text3=new JDEGraphic();
// let text4=new JDEGraphic();
// let text5=new JDEGraphic();
// let text6=new JDEGraphic();
// let text7=new JDEGraphic();
// let text8=new JDEGraphic();
// let text9=new JDEGraphic();
// let text10=new JDEGraphic();
// let text11=new JDEGraphic();
// let text12=new JDEGraphic();
// let text13=new JDEGraphic();
// // child.lineStyle('#f06',1,5);
// // child.fillStyle('#0f6')  
// // child.rectangle(0,0,200,200);
// // c.lineStyle('#f06',1,1);
// // c.fillStyle('#f06');
// // c.textStyle('#000000','Arial',16,0,'start','normal','normal','normal','extra-condensed');
// // c.drawText(0,20,'Hello my Name is Priyam Agarwal');
// // app.add(c);
// // c.add(child);
// line.lineStyle('#000',1,1);
// line.moveTo(30,10);
// line.lineTo(30,244);
// line1.lineStyle('#000',1,1);
// line1.moveTo(30,244);
// line1.lineTo(430,244);
// line2.lineStyle('#000',1,1);
// line2.moveTo(30,214);
// line2.lineTo(430,214);
// line3.lineStyle('#000',1,1);
// line3.moveTo(30,184);
// line3.lineTo(430,184);
// line4.lineStyle('#000',1,1);
// line4.moveTo(30,154);
// line4.lineTo(430,154);
// line5.lineStyle('#000',1,1);
// line5.moveTo(30,124);
// line5.lineTo(430,124);
// line6.lineStyle('#000',1,1);
// line6.moveTo(30,94);
// line6.lineTo(430,94);
// line7.lineStyle('#000',1,1);
// line7.moveTo(30,64);
// line7.lineTo(430,64);
// line8.lineStyle('#000',1,1);
// line8.moveTo(30,34);
// line8.lineTo(430,34);
// c.lineStyle('#000',1,0.6);
// c.fillStyle('#0f6'); 
// c.rectangle(40,54,30,190);
// c1.lineStyle('#000',1,0.6);
// c1.fillStyle('#f06'); 
// c1.rectangle(70,44,30,200);
// c2.lineStyle('#000',1,1);
// c2.fillStyle('#0f6'); 
// c2.rectangle(120,104,30,140);
// c3.lineStyle('#000',1,1);
// c3.fillStyle('#f06'); 
// c3.rectangle(150,60,30,184);
// c4.lineStyle('#000',1,1);
// c4.fillStyle('#0f6');
// c4.rectangle(200,34,30,210);
// c5.lineStyle('#000',1,1);
// c5.fillStyle('#f06');
// c5.rectangle(230,74,30,170);
// c6.lineStyle('#000',1,1);
// c6.fillStyle('#0f6');
// c6.rectangle(280,134,30,110);
// c7.lineStyle('#000',1,1);   
// c7.fillStyle('#f06');
// c7.rectangle(310,94,30,150);
// c8.lineStyle('#000',1,1);   
// c8.fillStyle('#0f6');
// c8.rectangle(340,-30,10,10);
// c9.lineStyle('#000',1,1);   
// c9.fillStyle('#f06');
// c9.rectangle(340,-10,10,10);
// text.textColor('#000');
// text.drawText(17,236,'0');
// text1.textColor('#000');
// text1.drawText(7,204,'10');
// text2.textColor('#000');
// text2.drawText(7,174,'20');
// text3.textColor('#000');
// text3.drawText(7,144,'30');
// text4.textColor('#000');
// text4.drawText(7,114,'40');
// text5.textColor('#000');
// text5.drawText(7,84,'50');
// text6.textColor('#000');
// text6.drawText(7,54,'60');
// text7.textColor('#000');
// text7.drawText(7,24,'70');
// text8.textColor('#000');
// text8.fontSize(13);
// text8.drawText(354,-34,'Export of Goods');
// text9.textColor('#000');
// text9.fontSize(13);
// text9.drawText(354,-14,'Import of Goods');
// text10.textColor('#000');
// text10.fontSize(13);
// text10.drawText(46,242,'Canada');
// text11.textColor('#000');
// text11.fontSize(13);
// text11.drawText(136,242,'India');
// text12.textColor('#000');
// text12.fontSize(13);
// text12.drawText(216,242,'China');
// text13.textColor('#000');
// text13.fontSize(13);
// text13.drawText(286,242,'Mexico');
// text13.y=50;
// text13.x=40;
// app.add(text13);
// text13.add(text12);
// text12.add(text11);
// text11.add(text10);
// text10.add(text9);
// text9.add(text8);
// text8.add(text7);
// text7.add(text6);
// text6.add(text5);
// text5.add(text4);
// text4.add(text3);
// text3.add(text2);
// text2.add(text1);
// text1.add(text);
// text.add(c9);
// c9.add(c8);
// c8.add(c7);
// c7.add(c6);
// c6.add(c5);
// c5.add(c4);
// c4.add(c3);
// c3.add(c2);
// c2.add(c1);
// c1.add(c);
// c.add(line8);
// line8.add(line7);
// line7.add(line6);
// line6.add(line5);
// line5.add(line4);
// line4.add(line3);
// line3.add(line2);
// line2.add(line1);
// line1.add(line);
document.getElementById('clearG').onclick=clearGraphic;
