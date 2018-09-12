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
  if (tree === null) return true;
  let balanced = true;

  function recurse(tree) {
    if (balanced === false) return false;

    // both children present
    if (tree.left && tree.right) {
      // helps prevent continuously recursing through tree if we already know it's not balanced
      const left = superbalanced(tree.left);
      if (left === false) return false;
      const right = superbalanced(tree.right);
      if (right === false) return false;

      if (Math.abs(left - right) <= 1) return 1;
      else balanced = false;
    }

    // no children present
    else if (!tree.left && !tree.right) return 1;

    // one child present
    else {
      let count;
      if (tree.left) count = superbalanced(tree.left);
      else if (tree.right) count = superbalanced(tree.right);
      if (count <= 1) return count + 1;
      else {
        balanced = false;
        return false;
      }
    }

    return 1; // should never get hit. 
  }

  recurse(tree);
  return balanced;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
