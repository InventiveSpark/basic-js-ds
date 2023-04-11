const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }

  Queue follows the principle of FIFO (First In First Out):
    front                   back
      |                       |
      v                       v
    ┌───┬───┐   ┌───┬───┐   ┌───┬───┐
    | 1 |  ─┼─> | 2 |  ─┼─> | 3 | X │             X = NULL
    └───┴───┘   └───┴───┘   └───┴───┘
      |                           ^
      v                           |
    dequeue (remove)            enqueue (add)

  Linked list element:
      data    link to the next node
        |       |
        v       v
    ┌───────┬──────┐
    | value | next |
    └───────┴──────┘
 */
class Queue {
  constructor() { // create an empty queue
    this.front = null; // link to the first node or NULL value if queue is empty
    this.back = null;  // link to the last node or NULL value if queue is empty
  }

  getUnderlyingList() { // return underlying linked list
    return this.front;
  }

  enqueue(value) { // enter queue, add an element at the end
    const newNode = new ListNode(value); // create a new node
    if (!this.front) { // if queue is empty
      this.front = newNode;
    }
    else { // if queue is not empty
      this.back.next = newNode;
    }
    this.back = newNode;
  }

  dequeue() { // leave queue, remove the front element and return it
    if (!this.front) { // if queue is empty
      return null;
    }
    // if queue is not empty:
    if (this.front === this.back) { // if queue consists of one node
      this.back = null;
    }
    const value = this.front.value;
    this.front = this.front.next;
    return value;
  }
}

module.exports = {
  Queue
};
