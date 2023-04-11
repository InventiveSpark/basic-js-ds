const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
  Stack follows the principle of LIFO (Last In First Out):
    1st el.  pop (remove) / peek (doesn't
      |       ^                    remove)
      v       |
    ┌───┬───┬───┬───┐
    | 1 | 2 | 3 |   |
    └───┴───┴───┴───┘
                  ^
                  |
                push (add)
 */
class Stack {
  constructor() {
    this.stack = new Array(); // Create an empty array, []
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
