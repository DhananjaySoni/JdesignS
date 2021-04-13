export class JDEMatrix {

	constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}

	translate(x, y) {
		this.tx += x;
		this.ty += y;
		return this;
	}

	set(a, b, c, d, tx, ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
		return this;
	}


	scale(x, y) {
		this.a *= x;
		this.d *= y;
		this.c *= x;
		this.b *= y;
		this.tx *= x;
		this.ty *= y;

		return this;
	}

	setTransform(x, y, pivotX, pivotY, scaleX,
		scaleY, rotation, skewX, skewY) {
		this.a = Math.cos(rotation + skewY) * scaleX;
		this.b = Math.sin(rotation + skewY) * scaleX;
		this.c = -Math.sin(rotation - skewX) * scaleY;
		this.d = Math.cos(rotation - skewX) * scaleY;

		this.tx = x - ((pivotX * this.a) + (pivotY * this.c));
		this.ty = y - ((pivotX * this.b) + (pivotY * this.d));

		return this;
	}

	reset() {
		this.a = 1;

		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
		return this;
	}
	invert() {
		const a1 = this.a;
		const b1 = this.b;
		const c1 = this.c;
		const d1 = this.d;
		const tx1 = this.tx;
		const n = (a1 * d1) - (b1 * c1);

		this.a = d1 / n;
		this.b = -b1 / n;
		this.c = -c1 / n;
		this.d = a1 / n;
		this.tx = ((c1 * this.ty) - (d1 * tx1)) / n;
		this.ty = -((a1 * this.ty) - (b1 * tx1)) / n;

		return this;
	}
	prepend(matrix) {
		const tx1 = this.tx;

		if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
			const a1 = this.a;
			const c1 = this.c;

			this.a = (a1 * matrix.a) + (this.b * matrix.c);
			this.b = (a1 * matrix.b) + (this.b * matrix.d);
			this.c = (c1 * matrix.a) + (this.d * matrix.c);
			this.d = (c1 * matrix.b) + (this.d * matrix.d);
		}

		this.tx = (tx1 * matrix.a) + (this.ty * matrix.c) + matrix.tx;
		this.ty = (tx1 * matrix.b) + (this.ty * matrix.d) + matrix.ty;

		return this;
	}
	append(matrix) {
		const a1 = this.a;
		const b1 = this.b;
		const c1 = this.c;
		const d1 = this.d;

		this.a = (matrix.a * a1) + (matrix.b * c1);
		this.b = (matrix.a * b1) + (matrix.b * d1);
		this.c = (matrix.c * a1) + (matrix.d * c1);
		this.d = (matrix.c * b1) + (matrix.d * d1);

		this.tx = (matrix.tx * a1) + (matrix.ty * c1) + this.tx;
		this.ty = (matrix.tx * b1) + (matrix.ty * d1) + this.ty;

		return this;
	}

	getrow(r) {
		return this.__matrix[r - 1].slice(0);
	}
	setvalue(r, c, v) {
		this.__matrix[r - 1][c - 1] = v;
		return this;
	}

	/* angle in radians*/
	rotate(angle) {
		const cos = Math.cos(angle);
		const sin = Math.sin(angle);

		const a1 = this.a;
		const c1 = this.c;
		const tx1 = this.tx;

		this.a = (a1 * cos) - (this.b * sin);
		this.b = (a1 * sin) + (this.b * cos);
		this.c = (c1 * cos) - (this.d * sin);
		this.d = (c1 * sin) + (this.d * cos);
		this.tx = (tx1 * cos) - (this.ty * sin);
		this.ty = (tx1 * sin) + (this.ty * cos);

		return this;
	}

	// clone the matrix
	clone() {
		let matrix = new Matrix();

		matrix.a = this.a;
		matrix.b = this.b;
		matrix.c = this.c;
		matrix.d = this.d;
		matrix.tx = this.tx;
		matrix.ty = this.ty;

		return matrix;
	}

}