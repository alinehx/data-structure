var Stack = function (size) {
  var array = new Array (size),
  count = 0;
  var push = function (object) {
    array[count] = object;
    this.count ++;
  },
  pop = function (object) {
    item = array[count];
    console.log(item);
    this.count--;
  },
  peek = function() {
    while (this.count >= 0) {
      console.log(array[count]);
      count--;
    }
  };

  return {
    Push: push,
    Pop: pop,
    Peek: peek
  };

};