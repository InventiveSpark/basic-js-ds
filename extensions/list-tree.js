/*
  Binary Search Tree node:
          data    link to the right child
            |       |
            v       v
  ┌──────┬──────┬───────┐
  | left | data | right |
  └──────┴──────┴───────┘
     ^
     | 
   link to the left child
*/
class Node {
  constructor(data) {
    this.data = data; // data stored in the Binary Search Tree node
    this.left = null; // link to the left child or NULL value if the left child does not exist
    this.right = null; // link to the right child or NULL value if the right child does not exist
  }
}

module.exports = {
  Node
};