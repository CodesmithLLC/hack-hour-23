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
// solution algorithm:
//  recursively traverse tree with trackers
//  for max leaf depth and min leaf depth
//  if max-min > 1 tree is not superbalanced
//  if tree is completely traversed and max-min <=1 return balanced
//  use DFS (depth first search) bc more likely to hit leaves quickly and short circuit
// 
function superbalanced(tree) {
  if (!tree.left && !tree.right) return true;

  if( tree.left ) 
}

let bst = new BinaryTree(6);
bst.left = new BinaryTree(4); //return true

let bst2 = new BinaryTree(7);
bst2.right = new BinaryTree(6);
bst2.left = new BinaryTree(5);
bst2.left.left = new BinaryTree(3);
bst2.left.left.left = new BinaryTree(1); //returns false

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
