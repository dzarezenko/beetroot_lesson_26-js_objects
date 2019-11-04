let MyMath = {

  min: function(x, y) {
    if (x < y) {
      return x;
    }
    
    return y;
  },

  max: function(x, y) {
    if (x > y) {
      return x;
    }
    
    return y;
  },

}

console.log(MyMath.min(12, 42));
console.log(MyMath.min(56, 17));
console.log(MyMath.max(56, 17));
