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
  // guard cases
  if (!tree) return false;
  if (tree.left === null && tree.right === null) return true;
  if (tree.left === null || tree.right === null) return true;

  // traverse through one side of the BTS using recursion. 
    // for each recursive call, increment a count by one, indicating you went one layer deep. 
    // may look into using a helper function. 
  // do the same for the next BTS
  // compare the two counts, return a bool
  // return: Boolean
}

// helper function to traverse down the tree and return count
const helperFunction = (node, count = 0) => {
  // base case
  if (node.left === null && node.right === null) return count;

  if (node.left) {
    node = node.left;
    count += 1;
    return helperFunction(node, count);
  }

  if (node.right) {
    node = node.right;
    count += 1;
    return helperFunction(node, count); 
  }
}


// const example1 = new BinaryTree(10);
// example1.left = new BinaryTree(1);
// example1.right = new BinaryTree(9);
// example1.right.right = new BinaryTree(8);
// example1.right.left = new BinaryTree(7);

// const example2 = new BinaryTree(10);
// example2.left = new BinaryTree(3);
// example2.left.left = new BinaryTree(1);
// example2.right = new BinaryTree(7);
// example2.right.right = new BinaryTree(8);
// example2.right.right.left = new BinaryTree(4);
// example2.right.right.left.right = new BinaryTree(6);

// console.log('first BTS ', example1);
// console.log('Second BTS ', example2);


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
