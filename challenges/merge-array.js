/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let finalArr = [];
    let finalI = 0;

    for(let i = 0; i < arr1.length; i++) {
        finalArr.push(arr1[i]);
        if(!!arr2[i]){
            finalArr.push(arr2[i]);
        } else {
          finalArr = finalArr.concat(arr1.slice(i + 1));
          finalI = finalI + 1;
          break;
        }
        finalI = i;
    }
    
    return finalArr.concat(arr2.slice(finalI));
}

module.exports = mergeArrays;
