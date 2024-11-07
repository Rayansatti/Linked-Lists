import {LinkedList} from "./index.js";
import {HashMap} from "./hash.js";
import { Tree } from "./bts.js";


const test = new HashMap();
const list = new LinkedList();

const array = [3, 1, 5, 2, 4];
const bst = new Tree(array);
console.log(bst.delete(bst.root, 2));

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log(test.entries())

test.set('lion', 'whatever')

console.log(test.remove('lion'))

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());