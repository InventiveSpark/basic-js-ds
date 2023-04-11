/*
  Linked list element:
    data    link to the next node
      |       |
      v       v
  ┌───────┬──────┐
  | value | next |
  └───────┴──────┘
*/
class ListNode {
  constructor(x) {
    this.value = x; // data stored in the list element
    this.next = null; // link to the next node or NULL value if the next node does not exist
  }
}

module.exports = {
  ListNode
};
