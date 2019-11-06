let fraction = {
  numerator: 1,
  denominator: 3,
  toStr: function() {
    return `${this.numerator} / ${this.denominator}`;
  },
  val: function() {
    return this.numerator / this.denominator;
  },

  show: function() {
    for (let key in this) {
      if (typeof this[key] == "function") {
        continue;
      }
      console.log(key, this[key]);
    }
  }
}

console.log(fraction);
console.log(fraction.toStr());
console.log(fraction.val());
fraction.show();

console.log(window);
console.log(document.location);
