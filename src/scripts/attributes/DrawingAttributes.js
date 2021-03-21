export class DrawingAttributes{

    constructor(){
        this.__thick = 5;
        this.__color = '#FF0000';        
        this.__alpha = 1.0;

        this.__fillColor = '#FF0000';
        this.__fillAlpha = 1.0;
    }

    get fillColor(){
        return this.__fillColor;
    }

    set fillColor(fcolor){
        this.__fillColor = fcolor;
    }

    get fillAlpha(){
        return this.__fillAlpha;
    }

    set fillAlpha(falpha){
        this.__fillAlpha = falpha;
    }

    get thickness(){
        return this.__thick;
    }

    set thickness(t){
        this.__thick = t;
    }

    get color(){
        return this.__color;
    }

    set color(color){
        this.__color = color;
    }

    get alpha(){
        return this.__alpha;
    }

    set alpha(alpha){
        this.__alpha = alpha;
    }
}