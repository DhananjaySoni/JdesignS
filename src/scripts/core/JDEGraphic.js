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

    //To draw a rectangle
	rectangle(object,x,y){
        let object = SVG().rect(x,y);
        return object;
    }

    //To draw a circle
    circle(object,r){
        let object =SVG().circle(r);
        return object; 
    }

    //To draw a ellipse
    ellipse(object,x,y){
        let object=SVG().ellipse(x,y);
        return object;
    }

    //to Fill the object with the color
    fill(object,color){
        return object.fill(color);
    }

    //To Stroke the object
    stroke(object,value1,value2,value3){
        return object.stroke({ color: value1, opacity: value2, width: value3 });
    }

    //To give opacity 
    opacity(object,value){
        return object.opacity(value);
    }

    // Method to convert Radians to degrees 
    radians_to_degrees(radians) {
        let pi = Math.PI;
        return (radians * (180 / pi));
    }

    //Method To Scale The object
    scale(object,x,y){
        return object.scale(x,y);
        object.__updateGraphic();
    }

	//To Rotate The object 
	rotate(object,value){
		return object.rotate(radians_to_degrees(value));
        object.__updateGraphic();
	}

    //Method to Move the Object
    move(object,x,y){
        return object.move(x,y);
    } 

    //To Hide the Object
    hide(object){
        return object.hide();
    }

    //To Show the Object
    show(object){
        return object.show();
    }

    //To remove the Object
    remove(object){
        return object.remove();
    }

    //To set the size of object
    size(object,x,y){
        return object.size(x,y);
    }

    //Method to clone the object
    clone(object){
        return object.clone();
    }
    
    scaleX(sx) {
		
		return this.__scale;
	}

    setsx(value)
    { 
        this.__scale.x = value;

    }
     
    scaleY(sy) {
		
		return this.__scale;
	}

    setsy(value)
    { 
        this.__scale.y = value;

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