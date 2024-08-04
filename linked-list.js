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
  size() {
    if (this.#head === undefined) {
      return 0;
    }
    let current = this.#head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  head() {
    return this.#head;
  }
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
  at(index) {
    if (this.#head === undefined) {
      return undefined;
    }
    const size = this.size();
    if (index < 0 && size + index >= 0) {
      return this.at(size + index);
    }
    if (index < 0 || index >= size) {
      return undefined;
    }
    let current = this.#head;
    let count = 0;
    while (index !== count) {
      current = current.nextNode;
      count++;
    }
    return current;
  }
  pop() {
    if (this.#head === undefined) {
      return undefined;
    }
    const tail = this.tail();
    this.at(-2).nextNode = null;
    return tail;
  }
  contains(value) {
    if (this.#head === undefined) {
      return false;
    }
    let current = this.#head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    if (this.#head === undefined) {
      return null;
    }
    let current = this.#head;
    let count = 0;
    while (current !== null) {
      if (current.value === value) {
        return count;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }
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
