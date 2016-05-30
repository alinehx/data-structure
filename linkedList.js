var Node = function (value) {
  this.value = value;
  this.next = null;
};



var LinkedList = function () {
  this.head = null; 

  this.addFirst = function(value) {
    if (!this.head) {
      this.head = new Node(value);      
    } else {
      var node = new Node (value);
      node.next = this.head;
      this.head = node;
    }
  };
  this.addLast = function (value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      addNode(this.head, value);
    }
  };
  this.removeFirst = function (value) {
    if (!this.head) {
      console.log('item not existing');
    } else {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  };

  var addNode = function (head, value) {
    if(!head) {
      head.next = new Node(value);
      return;
    }
    return addNode(head.next, value);
  };
  this.show = function () {
    var aux = this.head;
    while(aux) {
      console.log(aux.value);
      aux = aux.next;
    }
  };
};