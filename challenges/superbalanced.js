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
  if(tree.left === null && tree.right === null) return true;

  function balanced(tree){
    let num1 = 0;
    let num2 = 0;

    if(tree.left !== null) {
      num1 += balanced(tree.left) + 1;
    } 

    if(tree.right !== null) {
      num2 += balanced(tree.right) + 1;
    } 

    return Math.max(num1, num2);
  }

  let leftHeight = 0;
  let rightHeight = 0;

  leftHeight = balanced(tree.left);
  rightHeight = balanced(tree.right);
  
  if(Math.abs(leftHeight - rightHeight) <= 1) {
    return true
  } else {
    return false;
  }
}

// let root = new BinaryTree(1);
// let left1 = new BinaryTree(2);
// let left2 = new BinaryTree(3);
// let left3 = new BinaryTree(4);
// let left4 = new BinaryTree(5);
// root.left = left1;
// left1.left = left2;
// left1.right = left3;
// left2.left = left4;

// let right1 = new BinaryTree(6);
// let right2 = new BinaryTree(7);
// let right3 = new BinaryTree(8);
// let right4 = new BinaryTree(9);
// let right5 = new BinaryTree(10);
// let right6 = new BinaryTree(11);
// root.right = right1;
// right1.left = right2;
// right1.right = right3;
// right3.right = right4;
// right4.left = right5;
// right5.left = right6;

// \console.log(superbalanced(root));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
