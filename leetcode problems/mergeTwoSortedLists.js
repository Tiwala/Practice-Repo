var mergeTwoLists = function(list1, list2) {
    // These get created; it's just floating because they haven't been attached to anything
    // Initially connected to the left which is nothingness
    // Every single node has a value and a pointer; all you gotta do is point it somewhere, and update the value and then move to the next
    let head = new ListNode(null);
    // The previous value is declared as the left, nothingness
    let prev = head;

    // Linked Lists eventually reach a falsy value, so this while loop will run until that
    while(list1 && list2) {
        // Compares the values
        if(list1.val <= list2.val) {
            // prev.next is a POINTER; you have to point it somewhere before you can assign prev a value
            prev.next = list1;
            // Since you assigned prev.next to list1, you can now assign it to the list
            prev = list1;
            // Points list1 to its next value
            list1 = list1.next;
        } else {
            // Same goes for here
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    if(!list1) {
        prev.next = list2;
    }
    if(!list2) {
        prev.next = list1;
    }
    return head.next;
};