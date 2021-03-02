export default class JDEMatrix{
    constructor(){
    this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 0;
	this.e = 1;
	this.f = 0;
    this.h = 0;
    this.i = 0;
    this.j = 1;
          this.matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];
     const rows = this.matrix.length;
     const columns = this.matrix[0].length;
    }
   function flipX() {
		this.transform(-1, 0, 0, 0, 1 ,0 ,0 ,0 ,1);
		return this;
	}
    function flipY() {
		this.transform(1, 0, 0, 0, -1, 0,0,0,1);
		return this;
	}
  function  transpose( matA ) {
      this.matrix = Array(this.columns).fill(0);
      this.matrix = mat.map((r, i) => this.getColumn(i + 1));
      return this;
    }
 function reset() {
	this.a = 1;
	this.b = 0;
	this.c = 0;
	this.d = 0;
	this.e = 1;
	this.f = 0;
    this.h = 0;
    this.i = 0;
    this.j = 1;
		return this;
	}
function getrow(r) {
     
      return this.matrix[r - 1].slice(0);
    }
    function setvalue(r, c, v) {
      this.matrix[r-1][c-1] = v;
      return this;
    }
function rotate(angle) {
		var cos = Math.cos(angle),
			sin = Math.sin(angle);
		this.transform(cos, -sin, 0,sin, cos, 0, 0,0,1);
		return this;
	} /** angle in radians**/
     function rotateDeg(angle) {
		this.rotate(angle * 0.017453292519943295);
		return this;
	}
   
    
     JDEMatrix.vectorDotProduct = (a, b) => {
    if (a.length !== b.length) throw new Error(`length of 'a' not equal length of 'b'`)
    return a.map((x, i) => x * b[i]).reduce((a, b) => a + b);
  }
translate : function(tx, ty) {
		this.transform(1, 0, 0, 0, 1, 0, tx, ty,1);
		return this;
	}


	
translateX: function(tx) {
		this.transform(1, 0, 0, 0, 1, 0, tx,  01);
		return this;
	}

	
translateY: function(ty) {
		this.transform(1, 0, 0, 0, 1, 0, 0, ty,1);
		
		return this;
	}
scale : function(sx, sy) {
		this.transform(sx, 0, 0, 0, sy, 0, 0, 0,1);
		return this;
	}

	
scaleX: function(sx) {
		this.transform(sx, 0, 0, 0, 1, 0, 0,  0,1);
		return this;
	}

	
scaleY: function(sy) {
		this.transform(1, 0, 0, 0, sy, 0, 0, 0,1);
		
		return this;
	}
skew: function(sx, sy) {
		this.transform(1, sy,0, sx, 1, 0,0, 0,1);
		return this;
	}

skewX: function(sx) {
		this.transform(1, 0,0, sx, 1, 0,0,0, 0);
		return this;
	}

skewY: function(sy) {
		this.transform(1, sy, 0, 0, 1,0 ,0, 0,1);
		return this;
	},



    
       
    }

   
