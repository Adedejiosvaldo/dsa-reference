//Class To Create New Node => To be used in push,shift,insert
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//LinkedList Constructor
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

let linkedList = new LinkedList(2);
console.log(linkedList);
