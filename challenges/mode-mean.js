/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    //iterate over the array
    //average - get sum of array/array.length
    let avg;
    let occurance = 0;
    let sum = 0;
    let mode = [];
    const storage = {};
    

    for(let x = 0; x < array.length; x++){
        if(storage[array[x]] === undefined){
            storage[array[x]] = 0;
        }else {
            storage[array[x]] ++;
        }
        sum += array[x];
    }


    for(let number in storage){
        if(storage[number] > occurance){
            occurance = storage[number];
            mode = number;
        }
    }

    avg = sum/array.length;

    return avg === mode;
}

module.exports = modemean;
