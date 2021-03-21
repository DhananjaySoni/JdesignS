import {SVG, Group} from '@svgdotjs/svg.js';
import { JDEVector } from '../math/JDEVector.js';
import {JDEGraphic} from "./JDEGraphic.js";

export class JDEApplication extends JDEGraphic{

    constructor(containerid){
        super();
        if(!containerid){
            containerid = (containerid) ? containerid : 'jdesign-doc';
        }

        this.__autoResize = true;
        this.__size = new JDEVector(500, 500);

        let element = document.createElement('div');
        element.id = containerid;
        document.body.appendChild(element);
        
        this.__application = SVG().addTo(`#${containerid}`);
        this.__application.add(this.__svgelement);

        console.log('VIEW BOX ', this.__application.viewbox());

        this.__updateViewBox();

    }

    __updateViewBox(){
        /**
         * the below line scaling the image, why?
         */
        // this.__application.viewbox(0, 0, this.__size.x, this.__size.y);

        /**
         * Setting the viewbox size via css
         */
        this.__application.css('width', `${this.__size.x}px`);
        this.__application.css('height', `${this.__size.y}px`);
    }

    add(child){
        child.parent = this;
    }

    remove(child){
        child.parent = null;
    }

    get size(){
        return this.__size;
    }

    set size(sz){
        this.__size.x = sz.x;
        this.__size.y = sz.y;
        __updateViewBox();
    }

    get application(){
        return this.__application;
    }
}