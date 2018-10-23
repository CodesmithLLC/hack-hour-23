/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    
    // const obj = array.reduce((acc,next)=>{
    //     acc[next]= (acc[next] || 0 ) + 1
    //     return acc
    // },{})

    // for (let key in obj) {
    //     if(obj[key] === 2){
    //         return Number(key);
    //     }
    // }
   //console.log("key")
    array = array.sort((a, b) => a - b);

    for(let i = 0; i < array.length; i++) {
            if(array[i] === array[i+1]) {
                    return array[i]
            }
    }
}

module.exports = repeatNumbers;

// function repeatNumbers(array) {
//   // create a store to keep track of occurrences of each number
//   const obj = {};
//   //  loop through array, storing elements as you go through
//   for (let i = 0; i < array.length; i++) {
//     // if number already exists as a property, return that repeated number
//     if (obj.hasOwnProperty(array[i])) return array[i];
//     // otherwise, add it as a property
//     obj[array[i]] = true;
//   }
// }

// function repeatNumbers(array) {
//   const n = array.length - 1;
//   const expectedSum = (n * (n + 1)) / 2; // 6
//   const actualSum = array.reduce((a, b) => a + b); // 8
//   return actualSum - expectedSum;
// }