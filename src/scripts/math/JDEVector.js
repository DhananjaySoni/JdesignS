export default class JDEVector{
    constructor(x, y){
        this.__x = (x) ? x : 0.0;
        this.__y = (y) ? y : 0.0;
    }
    /**
     * Implement all the vector functions
     */

    get x(){
        return this.__x;
    }

    set x(value){
        this.__x = value;
    }

    get y(){
        return this.__y;
    }

    set y(value){
        this.__y = value;
    }

    get length(){
        //Implement length of a vector (return number)
    }
}