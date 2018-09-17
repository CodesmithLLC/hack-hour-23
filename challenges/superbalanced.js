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

function superbalanced(tree, count = 0) {
  let left;
  let right;
  if (tree.left) {
    left = superbalanced(tree.left, count++)
  } else if (tree.right) {
    right = superbalanced(tree.right, count++)
  } else {
    return count
  }
  console.log(left + right)
}

const bt = new BinaryTree(5)
const bt1 = new BinaryTree(3)
bt.left = bt1
const bt2 = new BinaryTree(8)
bt.right = bt2
const bt3 = new BinaryTree(2)
bt1.left = bt3
const bt4 = new BinaryTree(7)
bt2.left = bt4
const bt5 = new BinaryTree(4)
bt1.right = bt5
const bt6 = new BinaryTree(9)
bt2.right = bt6

console.log(bt)

console.log(superbalanced(bt))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
