import { Color, SVG } from "@svgdotjs/svg.js";

import { Utils } from "../extras/utils.js";
import { EventDispatcher } from "./EventDispatcher.js";

import { JDEVector } from "../math/JDEVector.js";
import { JDEMatrix } from "../math/JDEMatrix.js";

import { DrawingAttributes } from "../attributes/DrawingAttributes";

export class JDEGraphic extends EventDispatcher {
    constructor(parent, style) {
        super();

        this.__name = Utils.uid();
        this.__parent = parent instanceof JDEGraphic ? parent : null;
        this.__position = new JDEVector(0, 0);
        this.__scale = new JDEVector(1, 1);
        this.__rotation = 0.0;
        this.__matrix = new JDEMatrix();

        this.__visible = true;

        this.__svgelement = SVG(`<g id="graphic-${this.__name}"></g>`);
        this.__container = SVG(`<g id="container-${this.__name}"></g>`);
        this.__graphic = SVG(`<g id="painter-${this.__name}"></g>`);

        this.__drawingAttributes = new DrawingAttributes();
        this.__lines = [];

        this.__svgelement.add(this.__container);
        this.__svgelement.add(this.__graphic);
    }

    __updateMatrix() {
        /**
         * Updated matrix based on translation (position), rotation and scale
         */
        let translate = `translate(${this.x}, ${this.y})`;
        let rotate = `rotate(${Utils.toDegrees(this.rotation)})`;
        let scale = `scale(${this.scale.x}, ${this.scale.y})`;
        this.__svgelement.attr({transform: `${translate},${rotate},${scale}`});
    }

    lineStyle(color, alpha = 1, width) {
        this.__drawingAttributes.alpha = alpha;
        this.__drawingAttributes.color = color;
        this.__drawingAttributes.thickness = width;
        return this;
    }

    fillStyle(color, alpha = 1) {
        this.__drawingAttributes.fillColor = color;
        this.__drawingAttributes.fillAlpha = alpha;
        return this;
    }

    moveTo(x, y) {
        let path = this.__graphic.path();
        path.fill({color: this.__drawingAttributes.fillColor, opacity: this.__drawingAttributes.fillAlpha});
        path.stroke({color: this.__drawingAttributes.color, opacity: this.__drawingAttributes.alpha, width: this.__drawingAttributes.thickness});
        path.plot(['M', x, y]);
        this.__lines.push(path);
        return this;
    }

    lineTo(x, y) {
        if(!this.__lines.length){
            return this;
        }
        let path = this.__lines[0];        
        let pathPoints = path.array();
        pathPoints.push(['L', x, y]);
        path.plot(pathPoints);
        return this;
    }

    rectangle(x, y, w, h) {
        let tempRectangle = this.__graphic.rect(w, h);
        tempRectangle.move(x, y);
        return this;
    }

    circle(x, y, radius) {
        let circle = this.__graphic.circle(radius);

        circle.fill({color: this.__drawingAttributes.fillColor, opacity: this.__drawingAttributes.fillAlpha});
        circle.stroke({color: this.__drawingAttributes.color, opacity: this.__drawingAttributes.alpha, width: this.__drawingAttributes.thickness});

        circle.move(x, y);
        return this;
    }

    ellipse(x, y, r1, r2) {
        let ellipse = this.__graphic.ellipse(r1, r2);
        ellipse.fill({color: this.__drawingAttributes.fillColor, opacity: this.__drawingAttributes.fillAlpha});
        ellipse.stroke({color: this.__drawingAttributes.color, opacity: this.__drawingAttributes.alpha, width: this.__drawingAttributes.thickness});
        ellipse.move(x, y);
        return this;
    }

    roundedRectangle(x, y, w, h, rx, ry) {
        let roundRectangle = this.graphic.rect(w, h);
        roundRectangle.fill({color: this.__drawingAttributes.fillColor, opacity: this.__drawingAttributes.fillAlpha});
        roundRectangle.stroke({color: this.__drawingAttributes.color, opacity: this.__drawingAttributes.alpha, width: this.__drawingAttributes.thickness});        
        roundRectangle.radius(rx, ry);
        roundRectangle.move(x, y);
        return this;
    }

    polygon(...listOfCoordinates) {
        let polygon = this.__graphic.polygon(listOfCoordinates);
        polygon.fill({color: this.__drawingAttributes.fillColor, opacity: this.__drawingAttributes.fillAlpha});
        polygon.stroke({color: this.__drawingAttributes.color, opacity: this.__drawingAttributes.alpha, width: this.__drawingAttributes.thickness});        
        return this;
    }

    drawText(x, y, textString) {
        let text = this.__graphic.text(textString);
        text.move(x, y);
        return this;
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
            throw new TypeError("Expected an instance of JDEGraphic");
        }
        if (p === this) {
            throw new EvalError(
                "Ha haa, very funny! How can I be a parent of myself? Maybe you watched predestiny movie too many times"
            );
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
    
    get x() {
        return this.__position.x;
    }

    set x(value) {
        this.__position.x = value;
        this.__updateMatrix();
    }

    get y() {
        return this.__position.y;
    }

    set y(value) {
        this.__position.y = value;
        this.__updateMatrix();
    }

    get scale() {
        return this.__scale;
    }
    set scale(scl) {
        this.__scale = scl.clone();
        this.__updateMatrix();        
    }

    get rotation() {
        return this.__rotation;
    }

    set rotation(value) {
        this.__rotation = value;
        this.__updateMatrix();
    }

    get visible(){
        return this.__visible;
    }

    set visible(flag){
        this.__visible = flag;
        (!flag) ? this.__svgelement.hide() : this.__svgelement.show();
    }
}
