/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //sort array and reassign (or pull out needed numbers: )

  // positive and negative
    // 3, 5, 6, 10, 20 --> last three
    // -20, -10, -6, -5, -3 --> last three

  // mixed
    //one positive
      //-5, -4, -3, -2, -1, 0, 5 --> two negatives * one positive
    //one negative
      // -5, 0, 1, 2, 3, 4, 5 --> one negative * two positives
    //balanced
      // -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 --> compare if ((first two numbers * last number) <= product of last three numbers)

  array = array.sort();
  // make an array of below three cases
  const output = [];
    // product of:
    // last three
    output.push(array[array.length-1]*array[array.length-2]*array[array.length-3]);
    // two left ones * last
    output.push()
    // first * two ones
  // return max of the array

  
  

}


module.exports = highestProduct;
