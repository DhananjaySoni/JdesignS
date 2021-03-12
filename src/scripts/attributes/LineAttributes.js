export class LineAttributes{

    constructor(){
        this.__thick = 5;
        this.__color = '#000000';        
    }

    get thickness(){
        return this.__thick;
    }

    get color(){
        return this.__color;
    }
}