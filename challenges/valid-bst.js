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
  let currNode = tree;

  if (currNode === null) {
    return false;
  }
  let nextNode = tree.right;

  while (nextNode !== null) {
    if (currNode.value > nextNode.value) return false

    currNode = nextNode;
    nextNode = nextNode.right;
  }
  return true;
}

// let node1 = new BinaryTree(2);
// let node2 = new BinaryTree(4);
// let node3 = new BinaryTree(40);
// let node4 = new BinaryTree(8);

// node1.right = node2;
// node2.right = node3;
// node3.right = node4;

// console.log(validBST(node1));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
