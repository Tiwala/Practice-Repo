// Binary Tree
// at most 2 children per node, can be 1, can be 0. Linked Lists are binary trees
// Exactly 1 root
// Exactly 1 path between root and any node

// Node for binary tree; takes a value and has left and right with a value of null
const Node = (val) => {
    return {
        val, left: null, right: null
    }
}

const a = Node('a')
const b = Node('b')
const c = Node('c')
const d = Node('d')
const e = Node('e')
const f = Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

        // a
        // /\
       // b   c
     // /   \   \
 //    d     e    f
// console.log(a);
// {
//         val: 1,
//         children: [
//             {val: 3, children:[]},
//             {val: 2, children:[]},
//             {val: 4, children:[]},
//         ]
// }



// Depth-first traversal
// You go to the deepest possible branch, then traverse laterally
// In this case, you go in the order of a, b, d, e, c, f
// You create a stack for this
// oops, a stack can just be an array

// Iterative approach
// O(n)
// root is for the first node
const depthFirstTree = (root) => {
    // Edge case for if root is empty
    if (!root) return [];
    // We initially put the root in the stack and then pop it out to get the value iteratively
    let stack = [ root ];
    let result = [];
    // The stack constantly has something as long as the tree has nodes because we push things at the same time we pop it in
    while(stack.length >= 1) {
        const node = stack.pop();
        // We only input the values into the results array
        result.push(node.val)
        // Reason why we push node.right first is because since we're using a stack, the left side always gets popped out first
        // This allows the depth first traversal
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }

    return result;
}

console.log(depthFirstTree(a))

// Recursive method
// O(n)
const depthFirstTreeRecursive = (root) => {
    if (!root) return [];
    const lefts = depthFirstTreeRecursive(root.left);
    const rights = depthFirstTreeRecursive(root.right);

    return [root.val, ...lefts, ...rights]
}


// Breadth-first traversal
// Iterative

const breadthFirst = (root) => {
    if (!root) return [];
    const queue = [root];
    let result = [];

    while (queue.length >= 1) {
        const node = queue.shift();
        result.push(node.val)

        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }

    return result;
}

// console.log(breadthFirst(a));

var invertTree = function(root) {
    if (!root) return root
    
    let temp = root.left;
    root.left = root.right; 
    root.right = temp;
    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    
    return root;
};

// console.log(invertTree(a))

// console.log(depthFirstTree(a))


// const arr = ['a'];

// const blah = arr.pop();


// console.log(blah)