// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    const sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < array.length - 1; i++){ //array.length - 1 because im looping through pairs
            if(array[i] > array[i+1]){
                sorted = false;
                const temp = array[i]; //switching around the values
                array[i]   = array[i+1];
                array[i+1] = temp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
