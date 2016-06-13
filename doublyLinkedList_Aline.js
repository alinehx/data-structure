function Node(value) {
  this.value = value,
  this.previous = null,
  this.next = null;
}


function DoublyLinkedList () {
  this.head = null;
  this.tail = null;
  
  this.addNode = function (value, head) {
    if (!head.next) {
      return head.next = value; 
    }
    return this.addNode(value, head.next);
  }
  this.add = function (value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = new Node(value);
    } else {
      var node = new Node(value);
      node.previous = this.tail;
      this.tail = node;
      this.addNode(this.tail,this.head);
    }
  }
  this.addFirst = function (value) {
  	if(!this.head) {
      this.add(value);
  	} else {
  	  var node = new Node(value);
  	  this.head.previous = node;
  	  node.next = this.head;
  	  this.head = node;
  	}
  }
  this.addLast = function (value) {
    add(value);
  }
  this.printHead = function (){
    var temp = this.head;
    while(temp) {
      console.log(temp);
      temp = temp.next;
    }
  }
  this.printTail = function () {
    var temp = this.tail;
    while(temp) {
      console.log(temp);
      temp = temp.previous;
    }
  }
  this.removeFirst = function () {
    if(!this.head) {
      return console.log('List empty');
    }
    this.head = this.head.next;
    this.head.previous = null;
  }
  this.removeLast = function () {
  	if(!this.tail) {
  	  return console.log('List empty');
  	}
  	this.tail = this.tail.previous;
  	this.tail.next = null;
  }
}