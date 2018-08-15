/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // find the highest product from 3 of the integers
  // if array.length === 3 || === 2 then multiply all and return that result
  // if array.length === 1 then return that element
  // 
  if(!array || array.length < 3){
    return 0;
  }else{
    const newArr = Object.assign([], array);
    newArr.sort();
    
    if(newArr[0] < 0 && newArr[newArr.length - 1] < 0) return newArr[0] * newArr[1] * newArr[2];

    return newArr[newArr.length - 1] * newArr[newArr.length - 2] * newArr[newArr.length - 3];
  }
}

// console.log(highestProduct([4,2,1,3]));
// console.log(highestProduct([-5,-3,-2,-4]));

module.exports = highestProduct;
