/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 * [[0,0], [0,1], [0,2]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let rangeTable = {};
    let output = [];
    let currentStart;
    let startCount = 0;
    array.forEach(elm => {
        if(rangeTable[elm[0]][0] === 'e') {
            rangeTable[elm[0]] = rangeTable[elm[0]].slice(1, rangeTable[elm[0]].length);
        } else if(rangeTable[elm[0]]) {
            rangeTable[elm[0]] += 's';
        } else {
            rangeTable[elm[0]] = 's';
        }

        if(rangeTable[elm[1]][0] === 's') {
            rangeTable[elm[1]] = rangeTable[elm[1]].slice(1, rangeTable[elm[1]].length);
        } else if(rangeTable[elm[1]]) {
            rangeTable[elm[1]] += 'e';
        } else {
            rangeTable[elm[1]] = 'e';
        }
    });
    for(let i = 0; i <= 12; i++) {
        if(currentStart === undefined) {
            if(rangeTable[i][0] === 's') {
                currentStart = i;
            }
        }
        
        if (rangeTable[i][0] === 's') {
            startCount += rangeTable[i].length;
        } else if(rangeTable[i][0] === 'e') {
            startCount -= rangeTable[i].length;
        }

        if(startCount === 0 && currentStart !== undefined) {
            output.push([currentStart, i]);
            currentStart = undefined;
        }
    }
}

module.exports = mergeRanges;
