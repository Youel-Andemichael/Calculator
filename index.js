const add = function (a,b){
    return a + b;
  };
  
  const subtract = function (a,b){
    return a - b;
  };
  
  const sum = function(array) {
      return array.reduce((total,current) => total + current, 0);
  };
  
  const multiply = function(array) {
    return array.reduce((product, current) => product * current);
  };

  const divide = function(array) {
    return array.reduce((divide, current) => divide / current)
  };
  
  const power = function(a,b) {
    return Math.pow(a,b)
  };
  
  const factorial = function(n) {
      if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--){
      product *= i;
    }
    return product
  };

  if (array.length < 2) {
    throw new Error('Array must contain at least two elements');
  }