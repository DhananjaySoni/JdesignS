export default class JDEVector{
    constructor(x, y){
        this.__x = (x) ? x : 0.0;
        this.__y = (y) ? y : 0.0;
    }
    /**
     * Implement all the vector functions
    //  */
    dot(vector){
        let x2 = vector.x();
        let y2= vector.y();
        return (this.__x*x2 + this.__y*y2);
    }
    cross(vector){
        let x2 = vector.x();
        let y2= vector.y();
        return(this.__x*y2 - this.__y*x2);
    }
    dist(vector){
        let x2 = vector.x();
        let y2= vector.y();
        return(Math.sqrt((Math.pow(this.__x - x2),2)+(Math.pow(this.__x - x2),2)));
    }

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
        return (Math.sqrt(Math.pow(this.__x),2)+(Math.pow(this.__y),2));
    }
}