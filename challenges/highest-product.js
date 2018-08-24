/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    array,map
    let first = Math.max(...array);
    const deleteFirst = array.splice(array.indexOf(first),1)
    let sec = Math.max(...array);
    const deleteSec = array.splice(array.indexOf(sec),1)
    let third = Math.max(...array);
    const deleteThird = array.splice(array.indexOf(third),1)
    return [first,sec,third]
}
highestProduct([1,2,5,6])
module.exports = highestProduct;
