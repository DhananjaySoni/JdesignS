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