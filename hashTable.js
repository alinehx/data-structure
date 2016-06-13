Function HashTable () {
   this.hashArray = {};
  this.add = function (index, value) {
	this.hashArray[index] = value;
  };
  this.getAll = function () {
    console.log(this.hashArray);
  }
}

