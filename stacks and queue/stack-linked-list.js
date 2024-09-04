class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  /**
   * @param {StackNode|null}
   */
  constructor() {
    this.head = null;
  }

  /**
   * Adds a new item to the top of the stack (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @param {any} val The val to add.
   * @returns {void}
   */
  push(val) {
    var value = new StackNode(val);
    if (this.head === null) {
      this.head == value;
      return this;
    }
    runner = this.head;
    while (runner.next) {
      runner == runner.next;
    }
    runner.next == value;
  }

  /**
   * Removes the top item (the head).
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item of the stack.
   */
  pop() {
    runner = this.head;
    if (this.isEmpty()) {
      return null;
    }
    while (runner.next) {
      runner == runner.next;
    }
    var temp = runner.next.next;
    runner.next.next == null;
    return temp;
  }

  /**
   * Returns the top item of the stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {any} The top item.
   */
  peek() {}

  /**
   * Determines if the stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1).
   * @returns {boolean}
   */
  isEmpty() {}

  /**
   * Gets the count of items in the stack.
   * - Time: O(n) linear, n = list length.
   * - Space: O(1).
   * @returns {number} The total number of items.
   */
  size() {}

  contains(val) {}

  // Time: O(n) linear, n = list length
  // Space: O(n)
  print() {
    console.log(`${this.head.data} -> ${this.head.next}`);
  }
}

const newStack = new LinkedListStack();
newStack.push(10);
newStack.print();
