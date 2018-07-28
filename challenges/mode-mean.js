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

    // Mode is number that appears most often
    function getMode(arr) {

        // Organize array elements into key value pairs
        // Key is each unique number
        // Value is how many times number appears

        const bucket = {};
        for (let el of arr) {
            if (bucket[el]) {
                bucket[el] +=1;
            } else {
                bucket[el] = 1;
            }
        }

        // Determine key value pair with highest value
        let maxFreq = 0;
        let maxKey;

        for (let key in bucket) {
            if (bucket[key] > maxFreq) {
                maxKey = key;
                maxFreq = bucket[key];
            } else if (bucket[key] === maxFreq) {
                maxKey = Math.max(key, maxKey);
            }
        }
        return parseInt(maxKey);
    }

    // Mean is average. Use Math.floor
    function getMean(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        let mean = Math.floor(total / arr.length);
        return mean;
    }

    const mode = getMode(array);
    const mean = getMean(array);

    return mode === mean;
}



module.exports = modemean;
