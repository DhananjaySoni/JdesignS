import { TextPath } from '@svgdotjs/svg.js';
import { RGB_ETC1_Format } from 'three';
import { JDEApplication } from '../../scripts/core/JDEApplication.js';
import { JDEGraphic } from '../../scripts/core/JDEGraphic.js';
import { JDEVector } from '../../scripts/math/JDEVector.js';

console.log('Hello JDESIGNS');

function clearGraphic() {
    // textDemo.clear();
}

let app = new JDEApplication();
let line = new JDEGraphic();
let text = new JDEGraphic();

// y axis
line.lineStyle('#000', 1, 1);
line.moveTo(100, 10);
line.lineTo(100, 244);
app.add(line);

// x lines
for(let i =244 ;i>24;i=i-30)
{ 
    let  linex = new JDEGraphic();
    linex.lineStyle('#000', 1, 1);
    linex.moveTo(100,i);
    linex.lineTo(530,i);
    app.add(linex);  
}
// y heading
 text.textColor('#000');
 text.fontSize(18);
 text.drawText(0,130,'Y-axis');

 // x heading
 text.textColor('#000');
 text.fontSize(18);
 text.drawText(250,280,'X-axis');
 app.add(text);
 

 // y values
let y=0;
for(let i =244 ;i>24;i=i-30)
{   
    let  textx = new JDEGraphic();
    let texty= new JDEGraphic();
     textx.textColor('#000');
     textx.drawText(75, i-10, ' '+( y));
     y=y+5;
     app.add(textx);
     app.add(texty);
         
}
// x values
let x=0;
for(let i =0 ;i<244;i=i+30)
{   
    let texty= new JDEGraphic();
     texty.textColor('#000');
     texty.drawText(i+100, 250, ' '+( x));
     x=x+5;
     app.add(texty);
       
}
//let curve=new JDEGraphic();
//curve.lineStyle('#f06', 1, 1);
//curve.path('M250 100, c0 -90, 90 -90, 90 0, s-90 90, -90 0');
//curve.moveTo(250,100)

for(let x=0;x<=50;x++) 
	{  
        
   let curve=new JDEGraphic();
   curve.lineStyle('#0')
   curve.moveTo(39,100);
   curve.x=200;
   
	//curve.lineStyle('#0')
	curve.lineTo(39+x,100-Math.sqrt(4*20*x)); 
	curve.lineTo(39+x,100+Math.sqrt(4*20*x)); 
    app.add(curve);

	} 
let count =0;
// for(let q=10;q<25;q=q+1)
// { 
//     let e1 =new JDEGraphic();
//     e1.lineStyle('#000');


//     e1.moveTo(100,100);
    
//    e1.lineTo(q, Math.sqrt(100 + (2*q*q)));
//    //e1.lineTo(q, Math.sqrt(100 + (2*q*q)));

//    app.add(e1);

// }

    let el=new JDEGraphic();
    el.lineStyle('#0')
     el.moveTo(100,100);
     el.path('M 400, 175 m 10 , 0 a 45,65 0 1,0 -10,0');
     app.add(el);
  
    
  




document.getElementById('clearG').onclick = clearGraphic;








