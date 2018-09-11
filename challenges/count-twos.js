// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    //O(n (of 3?)) solution:
    //start at 1 until num.
    //count every digit along the way. If that digit has a two, store iterate the count of 2's.
    //to be sure to include all digits in a number with 2 or more digits, loop through the number.
    //return the count.
    let counter = 0;

    for (let i = 0; i <= num; i++) {
        // first convert nums to string 
        if (i.toString().length > 1) {
            let newArr = (i).toString(10).split("").map(Number);
            for (let j = 0; j < newArr.length; j++) {
                if (newArr[j] === 2) counter++;
            }
        } else if (i === 2) counter++;
    }
    return counter;
}
module.exports = countTwos;