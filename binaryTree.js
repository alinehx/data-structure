var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var Tree = function() {
  this.root = null;
  var findAdd = function(value, root) {
    if (root.value > value) {
      if (!root.left) {
        root.left = new Node(value);
        return;
      }
      return findAdd(value, root.left);
    } else {
      if (!root.right) {
        root.right = new Node(value);
        return;
      }
      return findAdd(value, root.right);
    }
  };
  var findNode = function(value, root) {
    if (!root) {
      return null;
    } else if (root.value === value) {
      return value;
    } else {
      if (root.value > value) {
        return findNode(value, root.left);
      }
      return findNode(value, root.right);
    }
  };
  var findMinValue = function(root) {
    if (!root.left) {
      return root;
    }
    return findMinValue(root.left);
  }
  this.deleteRoot = function() {
    if (!this.root.right && !this.root.left) {
      this.root = null;
      return;
    } else if (!this.root.right && this.root.left) {
      this.root = this.root.left;
    } else if (this.root.right && !this.root.left) {
      this.root = this.root.right;
    } else {
      var nodeRightMinValue = findMinValue(this.root.right);
      if (nodeRightMinValue.left) {
        this.root.value = nodeRightMinValue.left.value;
        nodeRightMinValue.left = null;
      } else {
        this.root.value = nodeRightMinValue.value;
      }
    }
  }
  this.delete = function(value) {
    if (this.root.value === value) {
      return this.deleteRoot();
    } else {
      var root = findNode(value, this.root),
        nodeDelete = root.left.value === value ? root.left : root.right;
      if (!nodeDelete.right && !nodeDelete.left) {
        root.value > value ? root.left = null : root.right = null;
      } else if (!nodeDelete.right && nodeDelete.left) {
        root.value > value ? root.left = root.left.left : root.right = root.right.left;
      } else if (nodeDelete.right && !nodeDelete.left) {
        root.value > value ? root.left = root.left.right : root.right = root.right.right;
      } else {
        var nodeRightMinValue = findMinValue(nodeDelete);
        if (nodeRightMinValue.left) {
          root.value > value ? root.left.value = nodeRightMinValue.left.value : root.right.value = nodeRightMinValue.left.value;
          nodeRightMinValue.left = null;
        } else {
          root.value > value ? root.left.value = nodeRightMinValue.value : root.right.value = nodeRightMinValue.value;
        }
      }
    }
  }
  this.add = function(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    if (this.root.value > value) {
      return findAdd(value, this.root, this.root.left);
    } 
    return findAdd(value, this.root, this.root.right);    
  };
  var PreOrderPrint = function (node) {
    if (node !== null) {
      console.log(node.value);
      PreOrderPrint(node.left);
      PreOrderPrint(node.right);
    }
  };
  var PosOrderPrint = function (node) {
    if (node !== null) {
      PosOrderPrint(node.left);
      PosOrderPrint(node.right);
      console.log(node.value);
    }
  };
  var inOrderPrint = function (node) {
    if (node !== null) {
      inOrderPrint(node.left);
      console.log(node.value);
      inOrderPrint(node.right);
    }
  }
  this.PreOrder = function (){
    PreOrderPrint(this.root);
  };
  this.PosOrder = function () {
    PosOrderPrint(this.root);
  };
  this.inOrder = function () {
    inOrderPrint(this.root);
  };
 
}