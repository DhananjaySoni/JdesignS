import {EventDispatcher} from './EventDispatcher.js';
import {JDEVector} from '../math/JDEVector.js';
import {JDEMatrix} from '../math/JDEMatrix.js';


export default class JDEGraphic extends EventDispatcher{
    constructor(style){
        super();
        this.__position = new JDEVector(0, 0);
        this.__scale = new JDEVector(1, 1);
        this.__rotation = 0.0;        
    }

    __updateMatrix(){

    }

    __updateGraphic(){
        this.__updateMatrix();
    }

    //To draw a line
    line(object,x1,y1,x2,y2){
        object=SVG().line(x1,y1,x2,y2);
        return object;
    }

    //To draw a rectangle
	rectangle(object,width,height){
         object = SVG().rect(width,height);
        return object;
    }

    //To draw a circle
    circle(object,radius){
         object =SVG().circle(radius);
        return object; 
    }

    //To draw a ellipse
    ellipse(object,radiusx,radiusy){
         object=SVG().ellipse(radiusx,radiusy);
        return object;
    }

    //to draw a polyline
    polyline(object,...inputs){
        object=SVG().polyline(inputs);
        return object;
    }
    
     //to draw a polygon
     polygon(object,...inputs){
        object=SVG().polygon(inputs);
        return object;
    }

    //Method to fill the object with the color
    fill(object,color){
        return object.fill(color);
    }

    //Method to stroke the object
    stroke(object,value1,value2,value3){
        return object.stroke({ color: value1, opacity: value2, width: value3 });
    }

    //Method to give opacity to the object
    opacity(object,value){
        return object.opacity(value);
    }

    //Method to convert Radians to degrees 
    radians_to_degrees(radians) {
        let pi = Math.PI;
        return (radians * (180 / pi));
    }

    //Method to scale the object
    scale(object,x,y){
        return object.scale(x,y);
        object.__updateGraphic();
    }

	/** 
    *Method to rotate the object 
    *according to the center of the object
    **/
	rotate(object,value){
		return object.rotate(radians_to_degrees(value));
        object.__updateGraphic();
	}

    /** 
    *Method to move the object 
    *by its upper left corner 
    *to a given x and y position
    **/
    move(object,x,y){
        return object.move(x,y);
    } 

    //Method to hide the object
    hide(object){
        return object.hide();
    }

    //Method to show the object
    show(object){
        return object.show();
    }

    //Method to remove the object
    remove(object){
        return object.remove();
    }

    //Method to set the size of object
    size(object,x,y){
        return object.size(x,y);
    }

    //Method to clone the object
    clone(object){
        return object.clone();
    }

    /**
     * Implement getter/setter methods for 
     * position
     * scale
     * rotation
     * Any setter method that impacts the visual nature of a graphic 
     * deserves a call to __updateGraphic();
    **/

    get x(){
        return this.__position.x;
    }

    set x (value){
        this.__position.x = value;
    }

    get y(){
        return this.__position.y;
    }

    set y(value){
        this.__position.y = value;
    }
}