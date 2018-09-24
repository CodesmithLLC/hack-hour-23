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

    //collect all values
    let treeOrder = [];

    //recursively traverse tree in-order and save values to array
    function helpValid(tree){
    if (tree.value === null) {return}
    helpValid(tree.left);
    treeOrder.push(tree.value)
    helpValid(tree.right);
    }

    helpValid(tree)

    let isBST = true;
    //loop over list of values and check that the current value is always higher than the preceding value...
    for (let i = 1; i < treeOrder.length; i++){
        if ( i < i - 1 ){
            isBST = false;
        } else {
            isBST = true;
        }
    }
    return isBST;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
