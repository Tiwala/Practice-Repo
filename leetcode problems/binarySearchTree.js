const Node = (val) => {
    return {
        val, left: null, right: null
    }
}

const a = Node(4)
const b = Node(2)
const c = Node(7)
const d = Node(1)
const e = Node(3)
// const f = Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
// c.right = f;


var insertIntoBST = function(root, val) {
    if (!root) return root;

    if (val > root.val) {
        if (!root.right) {
            root.right = val
        } else {
            insertIntoBST(root.right, val)
        }
    } else {
        if (!root.left) {
            root.left = val
        } else {
            insertIntoBST(root.left, val)
        }
    }
    return root;
};

console.log(insertIntoBST(a, 5))