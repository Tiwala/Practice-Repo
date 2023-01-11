const Node = (val) => {
    return {
        val,
        next: null,
    }
}

const head =  Node(1);
const nextNode = Node(2);
const nextNode2 = Node(3)
head.next = nextNode;
nextNode.next = nextNode2;

// how it looks
// head = {val: 1, next: {val: 2, next: {val: 3, next: null}}}

const linkedList = (head) => {
    let curr = head;
    while(curr) {
        console.log(curr.val)
        curr = curr.next;
    }
    return curr;
}

// what we're trying to do
// {val: 3, next: {val: 2, next: {val: 1, next: null}}}


const reverseList = (head) => {
    // pointer for previous
    let previous = null;
    let curr = head
    while(curr) {
        let next = curr.next;
        curr.next = previous
        previous = curr;
        curr = next;
    }
    return previous;
}

console.log(linkedList(head));
console.log(reverseList(head));

