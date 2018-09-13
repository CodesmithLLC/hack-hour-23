/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is superbalanced if:
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
let countLeft = 0;
let countRight = 0;
function superbalanced(tree) {
  if(this.left){countLeft ++; superbalanced(this.left)}
  else (this.right){countRight++; superbalanced(this.right)};
  return;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
