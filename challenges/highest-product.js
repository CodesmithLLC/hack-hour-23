/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let result = 0;
    let arr = array;
    if(arr.length < 3){ return undefined };

    function findHighest(array){
        let indexOfHighest = 0;
        for(let i in array){
            if(array[i] > array[indexOfHighest]){
                indexOfHighest = i;
            }
        }
        return indexOfHighest;
    }

    let f1 = findHighest(arr);
    result = arr[f1];
    arr.splice(f1, 1)
    let f2 = findHighest(arr);
    result *= arr[f2];
    arr.splice(f2, 1);
    let f3 = findHighest(arr);
    result *= arr[f3];

    return result;

}

/*
function highestProductOfN(array, n) {
    let result = 0;
    let arr = array;
    if(arr.length < n){ return undefined };

    function findHighest(array){
        let indexOfHighest = 0;
        for(let i in array){
            if(array[i] > array[indexOfHighest]){
                indexOfHighest = i;
            }
        }
        return indexOfHighest;
    }

    for (let i = 0; i<n; i++) {
      let factor = findHighest(arr);
      console.log(arr[factor]);
      if(result == 0){result = arr[factor]}
      else {result *= arr[factor]}
      arr.splice(factor, 1);
    }

    return result;

}
*/




highestProduct([1, 2, 3])


module.exports = highestProduct;
