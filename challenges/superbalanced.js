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

function superbalanced(tree, counter = 0, left = [], right = [0], rightHalf = false) {
  if (tree === null) return;
  superbalanced(tree.left, counter + 1, left, right, rightHalf);
  if (rightHalf === false) {
    left.push(counter);
  } else {
    right.push(counter);
  }
  if (counter === 0 && tree.right !== null) rightHalf = true;
  superbalanced(tree.right, counter + 1, left, right, rightHalf);
  console.log(`Left is ${left}, Right is ${right}`);
  return (Math.abs(Math.max(...left) - Math.max(...right)) <= 1);
}

const tree = new BinaryTree(8);
tree.left = new BinaryTree(3);
tree.left.left = new BinaryTree(1);
tree.left.right = new BinaryTree(6);
tree.left.right.left = new BinaryTree(4);
tree.left.right.right = new BinaryTree(7);
tree.right = new BinaryTree(10);
tree.right.right = new BinaryTree(14);
tree.right.right.left = new BinaryTree(13);

console.log(superbalanced(tree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
