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
