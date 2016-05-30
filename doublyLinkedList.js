var Node  = function (value) {
  this.value = value;
  this.prev = null;
  this.next = null;
};


function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.addAtFirst = function (value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      console.log('this.tail', this.tail);
      var node = new Node(value);
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      console.log('new tail', this.tail);
    }
  };
  this.removeAtFirst = function () {
    this.head.next.prev = null;
    this.head = this.head.next;
  };
  this.removeAtLast = function () {
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
  };
  this.addAtLast = function (value) {
    if (!this.tail) {
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      var node = new Node(value);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };
  this.show = function () {
    var aux = this.head;
    while(aux) {
      console.log(aux.value);
      aux = aux.next;
    }
  };
}