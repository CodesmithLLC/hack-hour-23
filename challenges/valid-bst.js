/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if (!tree) return false;
  if (!tree.left && !tree.right) return true;

  const failed = false;
  const testCase = -Infinity;
  function traverseTree(node) {
    if (failed) return; // stop travering tree

    if (node.left !== null) traverseTree(node.left);

    // if the value is less then we do not have a bst
    if (node.val < testCase) {
      failed = true;
      return;
    }

    // if the value is more than we are on track
    if (node.val > testCase) {
      testCase = node.val;
    }

    if (node.right !== null) traverseTree(node.right);
  }

  traverseTree(tree);
  return !failed;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
