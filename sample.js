import { createNode } from "./node.js";
import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

list.prepend("shark");
console.log(list.toString());
// ( shark ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log(list.size()); // 7

console.log(list.head().toString()); // { value: shark, nextNode: Node (dog) }

console.log(list.tail().toString()); // { value: turtle, nextNode: null }

console.log(list.at(3).toString()); // { value: parrot, nextNode: Node (hamster) }

/* Negative index works just like built-in array */
console.log(list.at(-2).toString()); // { value: snake, nextNode: Node (turtle) }

/* Index out of range */
console.log(list.at(100)); // undefined

list.pop();
console.log(list.toString());
// ( shark ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

console.log(list.contains("cat")); // true
console.log(list.contains("bear")); // false

console.log(list.find("cat")); // 2
console.log(list.find("bear")); // null

list.insertAt("pig", 2);
/* Negative indexing works */
list.insertAt("turtle", -1);
/* Index out of range works like prepend or append */
list.insertAt("snail", 100);
list.insertAt("squirrel", -100);
console.log(list.toString());
// ( squirrel ) -> ( shark ) -> ( dog ) -> ( pig ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( turtle ) -> ( snake ) -> ( snail ) -> null

list.removeAt(2);
/* Negative indexing works */
list.removeAt(-1);
/* Index out of range has no effect */
list.removeAt(100);
list.removeAt(-100);
console.log(list.toString());
// ( squirrel ) -> ( shark ) -> ( pig ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( turtle ) -> ( snake ) -> null
