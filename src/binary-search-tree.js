const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree { 
  constructor() { 
    this._root = null; 
  } 
 
  root() { 
    if (!this._root) { 
      return null 
    } 
    return this._root; 
  } 
 
  add(data) { 
    this._root = addWithin(this._root, data); 
 
    function addWithin(node, value) { 
      if (!node) { 
        return new Node(value); 
      } 
 
      if (node.data === value) { 
        return node; 
      } 
 
      if (node.data < value) { 
        node.right = addWithin(node.right, value); 
      } else { 
        node.left = addWithin(node.left, value); 
      } 
      return node; 
    } 
  } 
 
 
 
  has(data) { 
    return searchWithin(this._root, data); 
 
    function searchWithin(node, value) { 
      if (!node) return false; 
 
      if (node.data === value) { 
        return true; 
      } 
 
      return node.data < value 
        ? searchWithin(node.right, value) 
        : searchWithin(node.left, value); 
    } 
  } 
 
  find(data) { 
    return this._find(this._root, data); 
  } 
 
  _find(root, data) { 
    if (root === null) { 
      return null; 
    } 
    else if (data < root.data) { 
      return this._find(root.left, data); 
    } 
    else if (data > root.data) { 
      return this._find(root.right, data); 
    } 
    else { 
      return root; 
    } 
  } 
 
  remove(removedValue) { 
    this._root = removeElement(this._root, removedValue); 
 
    function removeElement(node, value) { 
      if (!node) return null; 
 
      if (value > node.data) { 
        node.right = removeElement(node.right, value); 
        return node; 
      } else if (value < node.data) { 
        node.left = removeElement(node.left, value); 
        return node; 
      } else { 
        if (!node.left && !node.right) { 
          return null; 
        } 
 
        if (!node.left) { 
          node = node.right; 
          return node; 
        } 
 
        if (!node.right) { 
          node = node.left; 
          return node; 
        } 
 
        let maxFromLeft = node.right; 
 
        while (maxFromLeft.left !== null) { 
          maxFromLeft = maxFromLeft.left; 
        } 
 
        node.data = maxFromLeft.data; 
 
        node.right = removeElement(node.right, maxFromLeft.data); 
      } 
      return node; 
    } 
  } 
 
  min() { 
    return this.findMinNode(this._root) 
  } 
 
  findMinNode(node) { 
    if (node.left === null) { 
      return node.data; 
    } else { 
      return this.findMinNode(node.left); 
    } 
  } 
 
  max() { 
    return this.findMaxNode(this._root) 
  } 
 
  findMaxNode(node) { 
    if (!node.right) { 
      return node.data; 
    } else { 
      return this.findMaxNode(node.right); 
    } 
  } 
} 

module.exports = {
  BinarySearchTree
};