// Node
// Think of a tree
// Top of the tree is called the root
// Parent has children nodes
// Siblings share the same parent node
// Leaf has no children nodes

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Binary Search Tree
// A node can only have two branches for every node
// Also, binary search trees are ordered: each left subtree is less than the parent node, each right subtree is greater than the parent node.

class BST {
  constructor() {
    this.root = null;
  }
  
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // TO BE CONTINUED
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (
          node.left == null 
          && node.right == null
          ) {
          return null;
        }
        if (node.left == null) {}
      }
    }

    this.root = removeNode(this.root, data);
  }

}
