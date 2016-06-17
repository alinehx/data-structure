'use strict';



var Stack = function () {
  var bracketObject = {
    '{': true,
    '(': true,
    '[': true
  };
  var bracketOpenObject = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  var validateBracket = function (value) {
    console.log ('retorno do validate', bracketObject[value] || false);
    return bracketObject[value] || false;
  };
  var bracketOpen = function (value) {
    return bracketOpenObject[value] || false;
  };
  this.createStack = function (size) {
    this.stack = new Array(size);
  };
  this.readExpression = function (expression) {
    var count = 0,
      sizeExpression = expression.length,
      valueExpression,
      searchBracket,
      resultValidade = 'Expression is correct';
    this.createStack(sizeExpression);
    
    
    for (count; count < sizeExpression; count ++) {
      valueExpression = expression.charAt(count);
      if (validateBracket(valueExpression)) {
        this.stack.push(valueExpression);
      } else {
        valueExpression = bracketOpen(valueExpression);
        searchBracket = this.stack.indexOf(valueExpression);
        if(searchBracket === -1) {
          resultValidade  = 'Error, expression is not correct';
          break;
        } else {
          this.stack.pop();
        }
      }
    }
   
    if(this.stack.size) {
      resultValidade = 'Error, expression is not correct';
    }
    
  };
};
