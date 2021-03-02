export default class JDEMatrix{
    constructor(){
        var  this.matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];
     const rows = this.matrix.length;
     const columns = this.matrix[0].length;
    }
    
  function  transpose( matA ) {
      const this.matrix = Array(this.columns).fill(0);
      this.matrix = mat.map((r, i) => this.getColumn(i + 1));
      return this;
    }
   function getrow(r) {
     
      return this.matrix[r - 1].slice(0);
    }
    function setvalue(r, c, v) {
      this.matrix[r-1][c-1] = v;
      return this;
    }
    function addnumber (n) {
      const self = this;
      const { rows, columns } = this;
      this.loop(t => t.setValue(t.value + n));
      return this;
    }
     function subnumber (n) {
      const self = this;
      const { rows, columns } = this;
      this.loop(t => t.setValue(t.value - n));
      return this;
    }
    
     JDEMatrix.vectorDotProduct = (a, b) => {
    if (a.length !== b.length) throw new Error(`length of 'a' not equal length of 'b'`)
    return a.map((x, i) => x * b[i]).reduce((a, b) => a + b);
  }
    
       
    }

   
