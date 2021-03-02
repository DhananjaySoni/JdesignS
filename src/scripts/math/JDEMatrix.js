export default class JDEMatrix{
    constructor(){
    this.__a = 1;
    this.__b = 0;
    this.__c = 0;
    this.__d = 0;
    this.__e = 1;
    this.__f = 0;
    this.__g = 0;
    this.__h = 0;
    this.__i = 1;
    this.__matrix = [
        [this.__a, this.__b,this.c],
        [this.__d,this.__e,this.__f],
        [this.__g,this.__h,this.__i]
    ];
     const rows = this.__matrix.length;
     const columns = this.__matrix[0].length;
    }
	
 flipX() {
		this.transform(-1, 0, 0, 0, 1 ,0 ,0 ,0 ,1);
		return this;
	}
	
 flipY() {
		this.transform(1, 0, 0, 0, -1, 0,0,0,1);
		return this;
	}
	
 transpose( matA ) {
      this.__matrix = Array(this.columns).fill(0);
      this.__matrix = mat.map((r, i) => this.getColumn(i + 1));
      return this;
    }
	
 reset() {
	this.__a = 1;
	this.__b = 0;
	this.__c = 0;
	this.__d = 0;
	this.__e = 1;
	this.__f = 0;
        this.__g = 0;
        this.__h = 0;
        this.__i = 1;
     return this;
	}
 
getrow(r) {
     return this.__matrix[r - 1].slice(0);
    }
      function setvalue(r, c, v) {
      this.__matrix[r-1][c-1] = v;
      return this;
    }
	
	/** angle in radians**/
 rotate(angle) {
		var cos = Math.cos(angle),
	        var sin = Math.sin(angle);
		this.transform(cos, -sin, 0,sin, cos, 0, 0,0,1);
		return this;
	}
/** angle in degree**/
	
 rotateDeg(angle) {
	this.rotate(angle * 0.017453292519943295);
	return this;
	}
   
    
JDEMatrix.vectorDotProduct = (a, b) => {
if (a.length !== b.length) throw new Error(`length of 'a' not equal length of 'b'`)
    return a.map((x, i) => x * b[i]).reduce((a, b) => a + b);
  }

translate(tx, ty) {
		this.transform(1, 0, 0, 0, 1, 0, tx, ty,1);
		return this;
	}


	
translateX(tx) {
		this.transform(1, 0, 0, 0, 1, 0, tx,  01);
		return this;
	}

	
translateY(ty) {
		this.transform(1, 0, 0, 0, 1, 0, 0, ty,1);
		
		return this;
	}
scale(sx, sy) {
		this.transform(sx, 0, 0, 0, sy, 0, 0, 0,1);
		return this;
	}

	
scaleX(sx) {
		this.transform(sx, 0, 0, 0, 1, 0, 0,  0,1);
		return this;
	}

	
scaleY(sy) {
		this.transform(1, 0, 0, 0, sy, 0, 0, 0,1);
		
		return this;
	}
skew(sx, sy) {
		this.transform(1, sy,0, sx, 1, 0,0, 0,1);
		return this;
	}

skewX(sx) {
		this.transform(1, 0,0, sx, 1, 0,0,0, 0);
		return this;
	}

skewY(sy) {
		this.transform(1, sy, 0, 0, 1,0 0, 0,1);
		return this;
	}



    }

   
