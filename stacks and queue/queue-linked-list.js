/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLinkedList {
  /**
   * @param {QueueNode|null}
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds a new given item to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
  enqueue(item) {
    const newNode = new QueueNode(item);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.tail;
      this.tail = newNode;
    }

    return this.size();
  }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  dequeue() {}

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
  front() {}

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
  size() {
    if (this.isEmpty()) {
      return 0;
    }

    let runner = this.head;
    let count = 0;
    while (runner) {
      count++;
      runner = runner.next;
    }

    return count;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`This stack is empty.`);
    }

    let output = "head -> ";
    let runner = this.head;
    while (runner) {
      output += `${runner.data} -> `;
      runner = runner.next;
    }

    output += "null";
    console.log(output);
  }
}

/* Rebuild the above class using a linked list instead of an array. */

const myQueue = new QueueLinkedList();

myQueue.enqueue(5);
myQueue.enqueue(20);
myQueue.enqueue(7);
myQueue.enqueue(11);
myQueue.enqueue(13);
console.log(myQueue.enqueue(47));

myQueue.print();
