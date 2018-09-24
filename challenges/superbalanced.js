/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  return treecode(tree) !== -2

}

function treecode(tree) {

  if (!tree) return -1;

  const leftCode = treecode(tree.left)
  const rightCode = treecode(tree.right)

  if (leftCode > -2 && rightCode > -2 && Math.abs(leftCode-rightCode) <= -1) {
    return Math.max(leftCode, rightCode) + 1;
  }
  else {
    return -2;
  }

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
