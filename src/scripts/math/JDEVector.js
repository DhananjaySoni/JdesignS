export default class JDEVector {
    constructor(x, y) {
        this.__x = (x) ? x : 0.0;
        this.__y = (y) ? y : 0.0;
    }
    /**
     * Implement all the vector functions
    //  */


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

    set(x, y) {
        this.__x = x;
        this.__y = y;
        return this;
    }
    // Method to convert Radians to degrees 
    radians_to_degrees(radians) {
        let pi = Math.PI;
        return (radians * (180 / pi));
    }

    // get dot product of given and current vector
    dot(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        return ((this.__x * x2) + (this.__y * y2));
    }

    // get Cross product of given and current vector
    cross(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        let x3 = ((this.__x * x2) * (Math.sin(radians_to_degrees(0.5))));
        let y3 = ((this.__y * y2) * (Math.sin(radians_to_degrees(0.5))));
        let newVector = new JDEVector(x3, y3);
        return newVector;
    }

    // get distance between given and current vector
    distance(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        return (Math.sqrt((Math.pow(this.__x - x2), 2) + (Math.pow(this.__y - y2), 2)));
    }

    /*
    * get squarred distance between vectors
    * Use it when only comparison between distances is needed
    * Faster than distance method*/
    squarredDistance(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        return ((Math.pow(this.__x - x2), 2) + (Math.pow(this.__y - y2), 2));
    }

    // get length of the current vector 
    length() {
        return (Math.sqrt(Math.pow(this.__x), 2) + (Math.pow(this.__y), 2));
    }

    // Clone current vector
    clone() {
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    // Convert the given vector to string
    toString() {
        let string = `x=${this.__x}, y=${this.__y}`;
        return string;
    }

    // Add a vector to current vector
    add(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        this.__x += x2;
        this.__y += y2;
        return this;
    }

    //Adds another vector's X component to itself.
    addX(vector) {
        let x2 = vector.x;
        this.__x += x2;
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    //Adds another vector's Y component to itself.
    addY(vector) {
        let y2 = vector.y;
        this.__y += y2;
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    // Add a scalar value to current vector
    addScalar(value) {
        this.__x += value;
        this.__y += value;
        return this;
    }

    // Subtract given vector from current vector
    subtract(vector) {
        let x2 = vector.x;
        let y2 = vector.y;
        this.__x -= x2;
        this.__y -= y2;
        return this;
    }

    //Subtracts another vector's X component to itself.
    subtractX(vector) {
        let x2 = vector.x;
        this.__x -= x2;
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    //Subtracts another vector's Y component to itself.
    subtractY(vector) {
        let y2 = vector.y;
        this.__y -= y2;
        let vector = new JDEVector(this.__x, this.__y);
        return vector;
    }

    // Subtract a scalar value to current vector
    subtractScalar(value) {
        this.__x -= value;
        this.__y -= value;
        return this;
    }

    // divide current vector by given vector
    divide(vector) {
        if (vector.length() != 0) {
            let i = this.__x / vector.x;
            let j = this.__y / vector.y;
            let newVector = new JDEVector(i, j);
            return newVector;
        }
        else { return this; }
    }

    // divide a scalar value to current vector
    divideScalar(value) {
        if (value != 0) {
            this.__x /= value;
            this.__y /= value;
            return this;
        }
        else { return this; }
    }

    // Invert x and y coordinates of current vector
    invert() {
        this.__x = -this.__x;
        this.__y = -this.__y;
        return this;
    }

    // Invert x coordinate of current vector
    invertX() {
        this.__x = -this.__x;
        return this;
    }

    // Invert y coordinate of current vector
    invertY() {
        this.__y = -this.__y;
        return this;
    }

    // Copy other vector onto current vector
    copy(vector) {
        this.__x = vector.x;
        this.__y = vector.y;
        return this;
    }
	
	//Copies the X component of another vector in to itself.
	    copyX(vector) {
			let x2 = vector.x;
			this.__x = x2;
			let vector = new JDEVector(this.__x, this.__y);
			return vector;
    }
		//Copies the Y component of another vector in to itself.
	    copyY(vector) {
			let y2 = vector.y;
			this.__Y= y2;
			let vector = new JDEVector(this.__x, this.__y);
			return vector;
    }
	
    // Convert x and y coordinates to whole numbers
    unFloat() {
        this.__x = Math.round(this.__x);
        this.__y = Math.round(this.__y);
        return this;
    }

    // Get x and y coordinates into an array
    toArray() {
        let arr = [];
        arr.push(this.__x, this.__y);
        return arr;
    }

    // Get x and y coordinates into an object
    toObject() {
        let obj = {};
        obj = {
            x: this.__x,
            y: this.__y
        }
        return obj;
    }


    /* 
    * Check if the vectors are equal
    * Returns a boolean */
    equals(vector, epsilon = Number.EPSILON) {
        if ((Math.abs(vector.x - this.__x) < epsilon) && (Math.abs(vector.y - this.__y) < epsilon)) { return true; }
        else { return false; }
    }

    // Floor the x and y coordinates of the vector
    floor() {
        this.__x = Math.floor(this.__x);
        this.__y = Math.floor(this.__y);
        return this;
    }

    // Ceil the x and y coordinates of the vector
    ceil() {
        this.__x = Math.ceil(this.__x);
        this.__y = Math.ceil(this.__y);
        return this;
    }

    // Get normalized vector
    normalize() {
        let len = this.length();
        this.__x /= len;
        this.__y /= len;
        return this;
    }

    // Set random x and y values for the vector
    random() {
        this.__x = (Math.random() * 1);
        this.__y = (Math.random() * 1);
        return this;
    }
}