class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  get isSquare() {
    return this._width === this._height;
  }

  toString() {
    return `${this._width}x${this._height}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }
  set height(value) {
    this._height = this._width = value;
  }
}

let useIt = function (rs) {
  let width = rs._width;
  rs.height = 10;
  console.log(`Expected area of ${10 * width}, ` + `got ${rs.area}`);
};

let rc = new Rectangle(2, 3);
useIt(rc);
console.log(rc.toString());

let sq = new Square(5);
useIt(sq);
console.log(sq.toString());
sq.width = 10;
console.log(sq.toString());
