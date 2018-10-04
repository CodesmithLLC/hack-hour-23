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
  // if the tree is empty, return true
  // the difference between heights of left subtree and right subtree has to be <= 1
  const result = isBalanced(tree, 0);

  if(result <= 1) {
    return true;
  }else {
    return false;
  }

  // traverse through the left subtree and count the depth?
    // do the same for the right subtree
    // after you're doing traversing through both subtrees, calculate the difference?
}

function isBalanced(tree, depth) {
  if(tree === null) {
    return depth;
  }

  let count = depth + 1;

  let leftDepth = isBalanced(tree.left, count);
  let rightDepth = isBalanced(tree.right, count);

  const left = Math.max(leftDepth, rightDepth);
  const right = Math.min(leftDepth, rightDepth);

  return left - right;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
