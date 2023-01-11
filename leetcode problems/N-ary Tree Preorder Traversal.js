// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Essentially a depth-first traversal
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

var preorder = function(root) {
    let result = [];
    
    const traverse = (node) => {
        if (!node) return;
        result.push(node.val);
        
        node.children.forEach((child) => traverse(child))
    }
    
    traverse(root);
    
    return result;
};