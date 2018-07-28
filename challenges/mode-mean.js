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

    //loop through to find the total, and count the number of times each number has been
    //passed to determine the mode; 
    let total = 0;
    let numberCount = {}
    for (let i = 0; i < array.length; i += 1){
        total += array[i]
        //if will trigger if we've already counted that number
        if (numberCount[array[i]]) numberCount[array[i]] = numberCount[array[i]] + 1 
        //else will trigger if we haven't counted that number
        else numberCount[array[i]] = 1;
    }
    let mean = total / array.length
    let mode = array[0]; //start mode at the first variable of the array so the for loop isn't undefined
    for (let property in numberCount){
        //loops through numberCount to find largest count. 
        //Resigns mode if it finds a bigger or equal mode. 
        //The for in loop passes in properties that are strings. Need to convert to number
        if (numberCount[property] >= numberCount[mode]) mode = Number(property)
    }
    return mean === mode 
}

console.log(modemean([1,2,3,4,4,4,4,4,5,6,7]));

module.exports = modemean;
