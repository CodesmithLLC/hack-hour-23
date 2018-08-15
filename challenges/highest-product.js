/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // find the highest product from 3 of the integers
  // if array.length === 3 || === 2 then multiply all and return that result
  // if array.length === 1 then return that element
  // 
  if(array.length === 3){
    return (array[0] * array[1] * array[2]);
  }else if(array.length === 2){
    return (array[0] * array[1]);
  }else if(array.length === 1){
    return array[0];
  }else{
    const newArr = Object.assign([], array);
    newArr.sort();
    
    return newArr[newArr.length - 1] * newArr[newArr.length - 2] * newArr[newArr.length - 3];
  }
}

// console.log(highestProduct([4,2,1,3]));

module.exports = highestProduct;
