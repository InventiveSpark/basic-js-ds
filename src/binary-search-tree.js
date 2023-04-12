const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() { // Create an empty tree.
    this.rootNode = null; // new tree has no nodes
  }

  root() { // Return root node of the tree.
    return this.rootNode;
  }

  add(data) { // Add node with data into the tree.
    function addNode(node, data) { // add to node subtree
      // Boundary case for stopping recursion:
      if (!node) { // if the node does not exist
        return new Node(data); // сreate a new node with the specific data
      }
      // Depending on the value of the data, the left or right subtree is modified:
      if (data < node.data) { // add a node in the left subtree
        node.left = addNode(node.left, data); // (recursive call)
      }
      else if (data > node.data) { // add a node in the right subtree
        node.right = addNode(node.right, data); // (recursive call)
      }
      // if node with the data exists (data === node.data) do nothing!
      return node;
    }
    // Add node with the specific data to a Binary Search Tree:
    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) { // Determine the existence of a certain node.
    // Returns true if node with the specific data exists in the tree and false otherwise:
    return (this.find(data) !== null);
  }

  find(data) { // Search a specific node.
    // Returns node with the data if node with the data exists in the tree and null otherwise.
    // The search algorithm recursively checks all nodes until it finds a suitable one:
    function findNode(node, data) { // find in the node subtree
      // Boundary case for stopping recursion:
      if (!node) { // if the node does not exist
        return null;
      }
      // Depending on the value of the data, the search is performed in the left or right subtree:
      if (data < node.data) { // search in the left subtree
        return findNode(node.left, data); // (recursive call)
      }
      if (data > node.data) { // search in the right subtree
        return findNode(node.right, data); // (recursive call)
      }
      // if node with the data exists (data === node.data):
      return node;
    }
    // Searching for a node with the specific data in a Binary Search Tree:
    return findNode(this.rootNode, data);
  }

  remove(data) { // Remove a node with the data from the tree if node with the data exists.
    function removeNode(node, data) { // delete in node subtree
      // Boundary case for stopping recursion:
      if (!node) { // if the node does not exist
        return null;
      }
      // Depending on the value of the data, the left or right subtree is modified:
      if (data < node.data) { // remove a node in the left subtree
        node.left = removeNode(node.left, data); // (recursive call)
      }
      else if (data > node.data) { // remove a node in the right subtree
        node.right = removeNode(node.right, data); // (recursive call)
      }
      else { // if node with the data exists (data === node.data), remove it
        // Check the type of node to be removed:
        if (node.left && node.right) { // if it has two children, it is a node
          // Leaf from the left subtree with the maximum data value:
          let maxLeftLeaf = node.left;
          // Search the rightmost leaf in the left subtree containing the maximum data value:
          while (maxLeftLeaf.right) {
            maxLeftLeaf = maxLeftLeaf.right;
          }
          // Replace the value in the node being removed with the maximum value of its left subtree:
          node.data = maxLeftLeaf.data;
          // Delete the rightmost leaf in the left subtree:
          node.left = removeNode(node.left, maxLeftLeaf.data); // (recursive call)
        }
        else if (node.right) { // if is has a right child, it is a node
          // replace the node being removed with its right child
          node = node.right;
        }
        else if (node.left) { // if is has a left child, it is a node
          // replace the node being removed with its left child
          node = node.left;
        }
        else { // if is has no children, it is a leaf
          // replace the leaf being removed with null
          node = null;
        }
      }
      return node;
    }
    // Remove a node with the specific data from the Binary Search Tree:
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() { // Returns minimal value stored in the tree (or null if tree has no nodes).
    if (!this.rootNode) { // if the tree is empty
      return null;
    }
    let currentNode = this.rootNode;
    // Search the leftmost leaf:
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() { // Returns maximal value stored in the tree (or null if tree has no nodes).
    if (!this.rootNode) { // if the tree is empty
      return null;
    }
    let currentNode = this.rootNode;
    // Search the rightmost leaf:
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};