import { createNode } from "./node.js";

class LinkedList {
  #head;
  constructor() {}
  append(value) {
    if (this.#head === undefined) {
      this.#head = createNode();
      this.#head.value = value;
    } else {
      const newNode = createNode();
      newNode.value = value;
      this.tail().nextNode = newNode;
    }
  }
  prepend(value) {
    if (this.#head === undefined) {
      this.append(value);
    } else {
      const newNode = createNode();
      newNode.value = value;
      newNode.nextNode = this.#head;
      this.#head = newNode;
    }
  }
  size() {}
  head() {}
  tail() {
    if (this.#head === undefined) {
      return;
    } else {
      let current = this.#head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current;
    }
  }
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {
    if (this.#head === undefined) {
      return "";
    }
    let string = "";
    let current = this.#head;
    while (true) {
      if (current === null) {
        string += "null";
        break;
      } else {
        string += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
    }
    return string;
  }

  //   Extra credit
  insertAt(value, index) {}
  removeAt(index) {}
}

export { LinkedList };
