export default class JDEMatrix{
    constructor(){
    this.__a = 1;
	this.__b = 0;
	this.__c = 0;
	this.__d = 0;
	this.__e = 1;
	this.__f = 0;
       this.__h = 0;
       this.__i = 0;
       this.__j = 1;
          this.__matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];
     const rows = this.__matrix.length;
     const columns = this.__matrix[0].length;
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
      this.__matrix = Array(this.columns).fill(0);
      this.__matrix = mat.map((r, i) => this.getColumn(i + 1));
      return this;
    }
 function reset() {
	this.__a = 1;
	this.__b = 0;
	this.__c = 0;
	this.__d = 0;
	this.__e = 1;
	this.__f = 0;
        this.__h = 0;
        this.__i = 0;
        this.__j = 1;
		return this;
	}
function getrow(r) {
     
      return this.__matrix[r - 1].slice(0);
    }
      function setvalue(r, c, v) {
      this.__matrix[r-1][c-1] = v;
      return this;
    }
function rotate(angle) {
		var cos = Math.cos(angle),
	        var sin = Math.sin(angle);
		this.transform(cos, -sin, 0,sin, cos, 0, 0,0,1);
		return this;
	} /** angle in radians**/
     function rotateDeg(angle) {
		this.rotate(angle * 0.017453292519943295);
		return this;
	},
   
    
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
		this.transform(1, sy, 0, 0, 1,0 0, 0,1);
		return this;
	},



    
       
    }

   
