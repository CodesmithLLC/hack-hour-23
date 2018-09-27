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
  let currentValue = -Infinity;
  let previousValue = -Infinity;
  let truth = true; //tracks 

  //Searches the binary tree using an inorder search
  //an inorder search will list items in increasing order
  const searchTree = tree => {
    if(tree instanceof BinaryTree === false) truth = false; 
    if (tree.left && truth) searchTree(tree.left) 
    previousValue = currentValue;
    currentValue = tree.value;
    if (currentValue < previousValue) truth = false; 
    if (tree.right && truth) searchTree(tree.right)
  }
  searchTree(tree)
  return truth
}

const tree = new BinaryTree(10);
tree.left = new BinaryTree(7)
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(8)
tree.right = new BinaryTree(15)
tree.right.right = new BinaryTree(18)
tree.right.left = new BinaryTree(13)
tree.right.left.left = new BinaryTree(12)
tree.right.right.right = new BinaryTree(20)

const falseTree = new BinaryTree(10);
falseTree.left = new BinaryTree(7)
falseTree.left.left = new BinaryTree(4)
falseTree.left.right = new BinaryTree(8)
falseTree.right = new BinaryTree(15)
falseTree.right.right = new BinaryTree(18)
falseTree.right.left = new BinaryTree(2)
falseTree.right.left.left = new BinaryTree(12)
falseTree.right.right.right = new BinaryTree(9)

console.log(validBST(tree))
console.log(validBST(falseTree))



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
