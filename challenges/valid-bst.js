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
  //recursively call validBST to see if left is less than and right is greater than

  //base case left or right equals null


  if (tree.left !== null) {
    let temp = tree.left;

    if (temp.value > tree.value) return false;

    return validBST(tree.left);
  }

  if (tree.right !== null) {
    let temp2 = tree.right;

    if (temp2.value < tree.value) return false;

    return validBST(tree.right);
  }
  return true;


}

// let node1 = new BinaryTree(6);
// let node2 = new BinaryTree(7);
// let node3 = new BinaryTree(9);
// let node4 = new BinaryTree(8);
// let node5 = new BinaryTree(1);

// node1.right = node2;
// node2.right = node3;
// node3.left = node4;
// node2.left = node5;


// console.log(validBST(node1));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
