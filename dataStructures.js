// Linked Tree
const Node = (data) => {
    return {
        data: data,
        next: null
    };
};
  
const LinkedList = () => {
    let head = null;
    // let tail = null;

    const prepend = (data) => {
      const node = Node(data);
      node.next = head;
      head = node;
    };
    
    const append = (data) => {
        let tail = Node(data);
        let currNode = head;
        while (currNode) {
            currNode = currNode.next;
            if (currNode.next === null) {
                currNode.next = tail;
                break;
            }
        }
    }

    const removeFromHead = () => {
        // Implement this method.
        let newHead = head.next;
        head = newHead;
    };
  
    const print = () => {
      let currNode = head;
      while(currNode) {
        console.log(currNode.data);
        currNode = currNode.next;
      }
    };
  
    return { prepend, removeFromHead, print, append };
};
  
const linkedList = LinkedList();
linkedList.prepend(7);
linkedList.prepend(10);
linkedList.prepend(80);
linkedList.append(2);
linkedList.removeFromHead();
linkedList.print();