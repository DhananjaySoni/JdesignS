export default class JDEVector {
    constructor(x, y) {
        this.__x = (x) ? x : 0.0;
        this.__y = (y) ? y : 0.0;
    }
    /**
     * Implement all the vector functions
    //  */
<<<<<<< HEAD
    dot(vector) {
        let x2 = vector.x();
        let y2 = vector.y();
        return (this.__x * x2 + this.__y * y2);
    }
    cross(vector) {
        let x2 = vector.x();
        let y2 = vector.y();
        return (this.__x * y2 - this.__y * x2);
    }
    dist(vector) {
        let x2 = vector.x();
        let y2 = vector.y();
        return (Math.sqrt((Math.pow(this.__x - x2), 2) + (Math.pow(this.__x - x2), 2)));
=======
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
>>>>>>> 0fd9308b7346457cba33c836e3fa22f257940ad6
    }

    get x() {
        return this.__x;
    }

    set x(value) {
        this.__x = value;
    }

    get y() {
        return this.__y;
    }

    set y(value) {
        this.__y = value;
    }

    get length() {
        //Implement length of a vector (return number)
<<<<<<< HEAD
        return (Math.sqrt(Math.pow(this.__x), 2) + (Math.pow(this.__y), 2));
    }

    get clone() {
        var vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    toString(vector) {
        var string = `x=${vector.x}, y=${vector.y}`;
        return string;
    }

    add(vector) {
        var x2 = vector.x;
        var y2 = vector.y;
        this.__x += x2;
        this.__y += y2;
        var newVector = new JDEVector(this.__x, this.__y);
        return newVector;
    }

    subtract(vector) {
        var x2 = vector.x;
        var y2 = vector.y;
        this.__x -= x2;
        this.__y -= y2;
        var newVector = new JDEVector(this.__x, this.__y);
        return newVector;
    }

    multiply(vector) {
        this.__x *= vector.x;
        this.__y *= vector.y;
        var newVector = new JDEVector(this.__x, this.__y);
        return newVector;
=======
        return (Math.sqrt(Math.pow(this.__x),2)+(Math.pow(this.__y),2));
>>>>>>> 0fd9308b7346457cba33c836e3fa22f257940ad6
    }

    divide(vector) {
        if (vector.x != 0 && vector.y != 0) {
            this.__x /= vector.x;
            this.__y /= vector.y;
            var newVector = new JDEVector(this.__x, this.__y);
            return newVector;
        }
    }

    invert() {
        this.__x = -this.__x;
        this.__y = -this.__y;
    }

    invertX() {
        this.__x = -this.__x;
    }

    invertY() {
        this.__y = -this.__y;
    }

    rotateDeg(angle) {
        var pi = Math.PI;
        var theta = angle * (pi / 180);
        var cs = Math.cos(theta);
        var sn = Math.sin(theta);
        px = this.__x * cs - this.__y * sn;
        py = this.__x * sn + this.__y * cs;
        this.__x = px;
        this.__y = py;
    }
}


