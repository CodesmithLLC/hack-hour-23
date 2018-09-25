/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
   //BitWise Operation using XOR 
   //take a look at how underthe bitwise working when you have a time 
   // and also hackour solution
        var result = 0;
        for (var i = 0; i < array.length; i++) {
          
          result ^= array[i]
          
        }
      
      return result;
      
      
}

uniqueNumber([1,2,1,3,3,2,4])
module.exports = uniqueNumber;
