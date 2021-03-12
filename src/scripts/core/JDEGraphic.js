import {SVG} from '@svgdotjs/svg.js';


import {Utils} from '../extras/utils.js';
import {EventDispatcher} from './EventDispatcher.js';

import {JDEVector} from '../math/JDEVector.js';
import {JDEMatrix} from '../math/JDEMatrix.js';

import {LineAttributes} from '../attributes/LineAttributes';

export class JDEGraphic extends EventDispatcher{

    constructor(parent, style){
        super();

        this.__name = Utils.uid();
        this.__parent = (parent instanceof JDEGraphic)? parent : null;
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

    __updateMatrix(){
        /**
         * Updated matrix based on translation (position), rotation and scale
         */
    }

    clear(){
        this.__graphic.clear();
    }

    remove(child){
        child.parent = null;
    }


    add(child){
        child.parent = this;        
    }

    /**
     * Implement getter/setter methods for 
     * position
     * scale
     * rotation
     * Any setter method that impacts the visual nature of a graphic 
     * deserves a call to __updateGraphic();
    **/

    get parent(){
        return this.__parent;
    }

    set parent(p){
        if(!p instanceof JDEGraphic && p !== null){
            throw new TypeError('Expected an instance of JDEGraphic');
        }
        if(p === this){
            throw new EvalError("Ha haa, very funny! How can I be a parent of myself? Maybe you watched predestiny movie too many times");
        }
        if(this.__parent){
            /**
             * Clear all things related to current parent
             */
            this.__parent.__svgelement.remove(this.__svgelement);
        }
        if(p !== null){
            this.__parent = p;
            this.__parent.__svgelement.add(this.__svgelement);
        }        
    }

    get graphic(){
        return this.__graphic;
    }

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

    get scale(){
        return this.__scale;
    }

    set scale(scl){
        this.__scale = scl.clone();
    }

    get rotation(){
        return this.__rotation;
    }

    set rotation(value){
        this.__rotation = value;
    }
}