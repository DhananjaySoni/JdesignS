import { Color, SVG } from '@svgdotjs/svg.js';


import { Utils } from '../extras/utils.js';
import { EventDispatcher } from './EventDispatcher.js';

import { JDEVector } from '../math/JDEVector.js';
import { JDEMatrix } from '../math/JDEMatrix.js';

import { LineAttributes } from '../attributes/LineAttributes';

export class JDEGraphic extends EventDispatcher {

    constructor(parent, style) {
        super();

        this.__name = Utils.uid();
        this.__parent = (parent instanceof JDEGraphic) ? parent : null;
        this.__position = new JDEVector(0, 0);
        this.__scale = new JDEVector(1, 1);
        this.__rotation = 0.0;
        this.__matrix = new JDEMatrix();


        this.__svgelement = SVG(`<g id="graphic-${this.__name}"></g>`);
        this.__container = SVG(`<g id="container-${this.__name}"></g>`);
        this.__graphic = SVG(`<g id="painter-${this.__name}"></g>`);

        this.__lineAttributes = new LineAttributes();

        this.__svgelement.add(this.__container);
        this.__svgelement.add(this.__graphic);
    }

    coordinate() {
        return console.log(this.__position);
    }

    linestyle(value, alpha=1, width) {
        return this.__graphic.stroke({color:value,opacity:alpha,width:width});
    }

    fillstyle(value, alpha = 1) {
        return this.__graphic.fill({color:value,opacity: alpha});
    }

    moveto(x, y) {
        this.__position.x = x;
        this.__position.y = y;        
        return this.__graphic.move(x, y);
    }


    size(x, y) {
        return this.__graphic.size(x, y);
    }
    attribute(fill = null, border = null, x = 0, y = 0, cx = 0, cy = 0) {
        return this.__graphic.attr(this.fillstyle(fill), this.linestyle(border), this.moveto(x, y), this.movecenter(cx, cy));
    }
    movecenter(cx = 0, cy = 0) {
        return this.__graphic.center(cx, cy);
    }
    rectangle(x, y, w, h) {
        let tempRectangle = this.__graphic.rect(w, h);
        tempRectangle.move(x, y);
        return tempRectangle;
    }

    roundedRectangle(w,h,rx,ry){
        return this.__graphic.rect(w,h).radius(rx,ry);
    }

    polyline(...inputs){    
        return this.__graphic.polyline(inputs);
    }

    polygon(...inputs){
        return this.__graphic.polygon(inputs).fill('#f06').fillstyle("#0f6");
    }

    line(x1,y1,x2,y2)
    {
        return this.__graphic.line(x1,y1,x2,y2).stroke('#000');
    }

    skew(x,y)
    {
        return this.__graphic.skew(x,y);
    }


  

    circle(radius) {
        return this.__graphic.circle(radius);
    }

    line(x1,y1,x2,y2) {
        return this.__graphic.line((x1,y1),(x2,y2)).fill('#f06').fillstyle("#0f6");
       
    }

    ellipse(x,y){
        return this.__graphic.ellipse(x, y);
    }

    hide(){
        return this.__graphic.hide();
    }

    show(){
        return this.__graphic.show();
    }
    
    width(x) {
        return this.__graphic.width(x);
    }
    height(x) {
        return this.__graphic.height(x);
    }
    scale(value)
    {
        return this.__graphic.scale(value);
    }
    
    rotate(value)
    { 
        return this.__graphic.rotate(value);
    }
   
    __updateMatrix() {
        /**
         * Updated matrix based on translation (position), rotation and scale
         */
    }

    clear() {
        this.__graphic.clear();
    }

    remove(child) {
        child.parent = null;
    }


    add(child) {
        child.parent = this;
    }
     addtext(w)
     {
        return  this.__graphic.text(w);

     }

   

 /*
     * Implement getter/setter methods for 
     * position
     * scale
     * rotation
     * Any setter method that impacts the visual nature of a graphic 
     * deserves a call to __updateGraphic();
    **/

    get parent() {
        return this.__parent;
    }

    set parent(p) {
        if (!p instanceof JDEGraphic && p !== null) {
            throw new TypeError('Expected an instance of JDEGraphic');
        }
        if (p === this) {
            throw new EvalError("Ha haa, very funny! How can I be a parent of myself? Maybe you watched predestiny movie too many times");
        }
        if (this.__parent) {
            /**
             * Clear all things related to current parent
             */
            this.__parent.__container.remove(this.__svgelement);
        }
        if (p !== null) {
            this.__parent = p;
            this.__parent.__container.add(this.__svgelement);
        }        
    }
   // group = this.__parent.group();
    get graphic() {
        return this.__graphic;
    }

    get x() {
        return this.__position.x;
    }

    set x(value) {
        this.__position.x = value;
    }

    get y() {
        return this.__position.y;
    }

    set y(value) {
        this.__position.y = value;
    }

    /*get scale() {
        return this.__scale;
    }

    set scale(scl) {
        this.__scale = scl.clone();
    }*/

    get rotation() {
        return this.__rotation;
    }

    set rotation(value) {
        this.__rotation = value;
    }
}

