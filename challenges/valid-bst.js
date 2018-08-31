/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  let current = tree.value;
  while(current.left !== null || current.right !== null) {
    if (current.left.value < current && current.right.value > current) {
        current = (current.left || current.right);
    }
  }
}

let bst1 = new BinaryTree(6);
bst1.left = new BinaryTree(4);
bst1.right = new BinaryTree(9);
bst1.left.left = new BinaryTree(2);
bst1.left.right = new BinaryTree(5);
bst1.right.left = new BinaryTree(7);
bst1.right.right = new BinaryTree(10);

console.log(bst1);

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
