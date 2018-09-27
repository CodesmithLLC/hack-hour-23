// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    let index = 1;
    
    while (index < array.length) {
        let sortIndex = index - 1;
        
        while (sortIndex >= 0) {
            if (array[index] < array[sortIndex]) {
                sortIndex--;
            } else {
                const splicedNum = array.slice(index, index + 1)[0];
                console.log(splicedNum)
                //array.splice(sortIndex, 0, splicedNum);
                sortIndex = -1;
            }
        }
        if (sortIndex < 0) {
            array.splice(0, 0, array.slice(index, index + 1)[0]);
        }
        console.log(array)
        index++;
    }
    return array;
}

const arr = [6,5,3,1,8,7,2,4];
console.log(insertionSort(arr))

module.exports = insertionSort;