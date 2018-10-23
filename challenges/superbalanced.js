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
  if (this.left) { countLeft++; superbalanced(this.left) }
  else (this.right){ countRight++; superbalanced(this.right) };
  return;
}

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// function superbalanced(tree) {
//   return treeCode(tree) !== -2;
// }

// // tree code returns -2 if unbalanced, tree height if balanced
// function treeCode(tree) {
//   // if tree is null, return -1
//   if (!tree) return -1;

//   // obtain tree codes of left tree and right tree
//   const leftCode = treeCode(tree.left);
//   const rightCode = treeCode(tree.right);


//   // if left treecode is balanced, right treecode is balanced, and difference is not more than 1,
//   // return the greater treecode plus 1
//   // otherwise return -2 (for not balanced)
//   if (leftCode > -2 && rightCode > -2 && Math.abs(leftCode - rightCode) <= 1) {
//     return Math.max(leftCode, rightCode) + 1;
//   }
//   else {
//     return -2;
//   }
// }

// module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};