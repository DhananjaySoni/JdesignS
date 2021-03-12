export default class JDEMatrix {
	constructor() {
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
			[this.__a, this.__b, this.c],
			[this.__d, this.__e, this.__f],
			[this.__g, this.__h, this.__i]
		];
		const rows = this.__matrix.length;
		const columns = this.__matrix[0].length;
	}
	setmatrix(a, b, c, d, tx, ty, g, h, i) {
		this.__a = a;
		this.__b = b;
		this.__c = c;
		this.__d = d;
		this.__d = tx; //transform x
		this.__e = ty; // transform y
		this.__g = g;
		this.__h = h;
		this.__i = i;

		return this;
	}

	flipX() {
		this.transform(-this.__a, this.__b, this.__c, this.__d, this.__e, this.__f, this.__g, this.__h, this.__i);
		return this;
	}

	flipY() {
		this.transform(this.__a, this.__b, this.__c, this.__d, -this.__e, this.__f, this.__g, this.__h, this.__i);
		return this;
	}

	transpose(matA) {
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
	setvalue(r, c, v) {
		this.__matrix[r - 1][c - 1] = v;
		return this;
	}

	/** angle in radians**/
	rotate(angle) {
		var cos = Math.cos(angle),
		var sin = Math.sin(angle);
		this.transform(this.__a*cos,this.b__*(-sin), this.__c, this.__d*(sin), this.__e*(cos),this.__f, this.__g, this.__h, this.__i);
		return this;
	}
	/** angle in degree**/
	clone() {
		return new JDEMatrix(this.__matrix);
	}
	

	rotateDeg(angle) {
		this.rotate(angle * 0.017453292519943295);
		return this;
	}

	


	vectorDotProduct = (a, b) => {
		if (a.length !== b.length) {
			throw
			new Error(`length of 'a' not equal length of 'b'`)
			return a.map((x, i) => x * b[i]).reduce((a, b) => a + b);
		}
	}

	translate(tx, ty) {
		this.transform(this.__a, this.__b, this.__c, this.__d, -this.__e, this.__f, this.__g+ (tx), this.__h + (ty), this.__i);
		return this;
	}



	translateX(tx) {
		this.transform(this.__a, this.__b, this.__c, this.__d, -this.__e, this.__f, this.__g+ (tx), this.__h , this.__i);
		return this;
	}


	translateY(ty) {
		this.transformthis.transform(this.__a, this.__b, this.__c, this.__d, this.__e, this.__f, this.__g, this.__h+ (ty) , this.__i);

		return this;
	}
	scale(sx, sy) {
		this.transform(this.__a + sx, this.__b, this.__c, this.__d, this.__e + sy, this.__f, this.__g, this.__h , this.__i);

		return this;
	}


	scaleX(sx) {
		this.transform(this.__a + sx, this.__b, this.__c, this.__d, this.__e , this.__f, this.__g, this.__h , this.__i);
		return this;
	}


	scaleY(sy) {
		this.transform(this.__a , this.__b, this.__c, this.__d, this.__e + sy, this.__f, this.__g, this.__h , this.__i);

		return this;
	}
	skew(sx, sy) {
		this.transform(this.__a , this.__b+ sy, this.__c, this.__d + sx, this.__e , this.__f, this.__g, this.__h , this.__i);
		return this;
	}

	skewX(sx) {
		this.transform(this.__a , this.__b, this.__c, this.__d + sx, this.__e , this.__f, this.__g, this.__h , this.__i);
		return this;
	}

	skewY(sy) {
		this.transform(this.__a , this.__b+ sy, this.__c, this.__d , this.__e , this.__f, this.__g, this.__h , this.__i);
		return this;
	}



}


