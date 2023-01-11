// Linked Tree
// const Node = (data) => {
//     return {
//         data: data,
//         next: null
//     };
// };
  
// const LinkedList = () => {
//     let head = null;
//     // let tail = null;

//     const prepend = (data) => {
//       const node = Node(data);
//       node.next = head;
//       head = node;
//     };
    
//     const append = (data) => {
//         let node = Node(data);
//         let currNode = head;
//         if (head === null) {
//             head = node;
//         } else {
//             while (currNode) {
//                 currNode = currNode.next;
//                 if (currNode.next === null) {
//                     currNode.next = node;
//                     break;
//                 }
//             }
//         }
//     }

//     const removeFromHead = () => {
//         // Implement this method.
//         let newHead = head.next;
//         head = newHead;
//     };
  
//     const print = () => {
//       let currNode = head;
//       while(currNode) {
//         console.log(currNode.data);
//         currNode = currNode.next;
//       }
//     };
  
//     return { prepend, removeFromHead, print, append };
// };
  
// const linkedList = LinkedList();
// linkedList.prepend(7);
// linkedList.prepend(10);
// linkedList.prepend(80);
// linkedList.append(2);
// linkedList.removeFromHead();
// linkedList.print();


// let empty = "";
// let current = 'i'
// console.log(empty.concat(current));

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

// console.log(head)

console.log(head)