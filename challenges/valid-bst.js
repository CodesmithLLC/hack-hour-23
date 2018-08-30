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
  // guard cases, make sure input is an object. 
  if (typeof tree !== 'object' || !tree.value ) return false;

  if (tree.left.value < tree.value) {
    const newTree = tree.left;
    if (newTree.left === null) {
        return;
    } else {
        return validBST(newTree);
    }
  } 

  console.log(tree)

  if (tree.right.value > tree.value) {
    const newTree = tree.right;
    if (newTree.right === null) {
      return;
    } else {
      return validBST(newTree);
    }
  } 

  return true;
}

// const bst = new BinaryTree(8);
// bst.left = new BinaryTree(3);
// bst.left.left = new BinaryTree(1);
// bst.left.right = new BinaryTree(6);

// bst.right = new BinaryTree(10);
// bst.right.right = new BinaryTree(14);
// bst.right.right.left = new BinaryTree(13);

// console.log(validBST(bst))


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
