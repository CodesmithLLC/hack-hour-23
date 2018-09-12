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
  let truth = true;

  // helper will find the height at each node. If any node is unbalanced, 
  // it will change truth to false and stop running. 
  const helper = tree => {
    if (truth === false) return 
    let leftHeight = 0;
    let rightHeight = 0; 
    if (tree.left) {
      leftHeight = 1 + helper(tree.left)
    }
    if (tree.right) {
      rightHeight = 1 + helper(tree.right)
    }
    if (Math.abs(leftHeight - rightHeight) > 1) truth = false; 
    return Math.max(leftHeight, rightHeight)
  }
  helper(tree)
  return truth; 
}


const tree = new BinaryTree(12)
tree.left = new BinaryTree(8)
tree.left.left = new BinaryTree(5)
tree.left.right = new BinaryTree(11)
tree.left.left.left = new BinaryTree(4)
tree.left.left.left.left = new BinaryTree(3)
tree.left.right.right = new BinaryTree(6)
tree.right = new BinaryTree(18)
tree.right.left = new BinaryTree(17)

console.log(superbalanced(tree))

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
