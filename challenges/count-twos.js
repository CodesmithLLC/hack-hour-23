// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s. 

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
//     let stash = [];
//     let count = 0;
//     for (let i = 0; i < num; i++) {
//         stash.push(i.toString().split(''))
// }
//     merged = [].concat.apply([], stash)
//     for (let i = 0; i < merged.length; i++) {
//         if (merged[i] === '2') {
//             count++
//         }
//     }
//     return count

    // Solution 1
    let count = 0;
    let string = String(num);

    for (let i = 0; i < num; i++) {
        let substr = String(i)
        for (let j = 0; j < substr.length; j++) {
            if (substr[j] === '2') count++
        }
    }
    return count;

    // Solution 2
    const digits = num.toString().split('').reverse();

    return digits.reduce((count,strDigit,idx,arr)=> {
        const digit = Number(strDigit);

        
    })

}

module.exports = countTwos;
