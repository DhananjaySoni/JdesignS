import {SVG, Group} from '@svgdotjs/svg.js';
import {JDEGraphic} from "./JDEGraphic.js";

export class JDEApplication extends JDEGraphic{

    constructor(containerid){
        super();
        if(!containerid){
            containerid = (containerid) ? containerid : 'jdesign-doc';
        }
        let element = document.createElement('div');
        element.id = containerid;
        document.body.appendChild(element);
        
        this.__application = SVG().addTo(`#${containerid}`);
        this.__application.add(this.__svgelement);

    }

    add(child){
        child.parent = this;
    }

    remove(child){
        child.parent = null;
    }

    get application(){
        return this.__application;
    }
}