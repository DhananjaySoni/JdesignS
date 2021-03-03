export default class JDEVector {
    constructor(x, y) {
        this.__x = (x) ? x : 0.0;
        this.__y = (y) ? y : 0.0;
    }
    /**
     * Implement all the vector functions
    //  */
    dot(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        return ((this.__x * x2) + (this.__y * y2));
    }
    cross(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        this.__x=((this.__x)*(x2)*(Math.sin(radians_to_degrees(0.5))));
        this.__y=((this.__y)*(y2)*(Math.sin(radians_to_degrees(0.5))));
        let newVector = new JDEVector(this.__x,this.__y);
        return newVector;
    }
    dist(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        return (Math.sqrt((Math.pow(this.__x - x2), 2) + (Math.pow(this.__x - x2), 2)));
    }
    radians_to_degrees(radians)
    {
        let pi = Math.PI;
        return (radians * (180/pi));
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
        return (Math.sqrt(Math.pow(this.__x), 2) + (Math.pow(this.__y), 2));
    }

    get clone() {
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    toString(vector) {
        let string = `x=${vector.x}, y=${vector.y}`;
        return string;
    }

    add(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        this.__x += x2;
        this.__y += y2;
        let newVector = new JDEVector(this.__x, this.__y);
        return newVector;
    }

    subtract(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        this.__x -= x2;
        this.__y -= y2;
        let newVector = new JDEVector(this.__x, this.__y);
        return newVector;
    }

    multiply(vector) {
        this.__x *= vector.x;
        this.__y *= vector.y;
        let newVector = new JDEVector(this.__x, this.__y);
        return newVector;
    }

    divide(vector) {
        if (vector.x != 0 && vector.y != 0) {
            this.__x /= vector.x;
            this.__y /= vector.y;
            let newVector = new JDEVector(this.__x, this.__y);
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
        let pi = Math.PI;
        let theta = angle * (pi / 180);
        let cs = Math.cos(theta);
        let sn = Math.sin(theta);
        px = this.__x * cs - this.__y * sn;
        py = this.__x * sn + this.__y * cs;
        this.__x = px;
        this.__y = py;
    }
}