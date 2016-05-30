// como eu resolvi
var addDigits = function(num) {  
  var numberArray = (""+num).split("");
  var numSum = 0; 
  
  numberArray.forEach(function(entry) {
    numSum+=Number(entry);
  });
  
  if (numSum.toString().length > 1) {    
    addDigits(numSum);
  } else {
    return numSum;
  }
};

// problema matematico http://mathworld.wolfram.com/DigitalRoot.html 

// melhor resolucao 

var addDigits = function(num) {
  return ( 1 + (num - 1) % 9);
};



