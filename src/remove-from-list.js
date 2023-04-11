const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 * 
  Singly linked list l:
    l - link to the head (first) node
    |
    v
  ┌───┬───┐   ┌───┬───┐   ┌───┬───┐   ┌───┬───┐   ┌───┬───┐   ┌───┬───┐
  | 3 |  ─┼─> | 1 |  ─┼─> | 2 |  ─┼─> | 3 |  ─┼─> | 4 |  ─┼─> | 5 | X │     X = NULL
  └───┴───┘   └───┴───┘   └───┴───┘   └───┴───┘   └───┴───┘   └───┴───┘

  Singly linked list after removeKFromList(l, 3):
    l
    |
    v
  ┌───┬───┐   ┌───┬───┐   ┌───┬───┐   ┌───┬───┐
  | 1 |  ─┼─> | 2 |  ─┼─> | 4 |  ─┼─> | 5 | X │
  └───┴───┘   └───┴───┘   └───┴───┘   └───┴───┘

  Linked list element:
      data    link to the next node
        |       |
        v       v
    ┌───────┬──────┐
    | value | next |
    └───────┴──────┘
 */
function removeKFromList(l, k) {
  // Boundary case for stopping recursion:
  if (!l) { // if list is empty
    return null;
  }

  // If list is not empty
  // calculate subsequent list from which all nodes with values equal to k are removed:
  const subsequentList = removeKFromList(l.next, k); // recursive call

  if (l.value === k) { // if the current node value is equal to k
    return subsequentList; // remove (forget) the current node and return the subsequent list
  }

  // If the current node value is not equal to k:
  l.next = subsequentList;  // link to the next node point to the subsequent list
  return l; // return a list from which all nodes with values equal to k are removed
}

module.exports = {
  removeKFromList
};
