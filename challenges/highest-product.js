/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    return kthHighest(3, arr).reduce((acc, curr) => acc + curr);
}

function kthHighest(k, arr) {
    let initHeap = [];
    for(let i = 0; i < k; i++){
        initHeap.push(arr[i]);
    }
    let heap = new Heap(...initHeap);
    for(let i = k; i < arr.length; i++) {
        heap.add(arr[i]);
    }

    return heap.getHeap();
}


class Heap {
    constructor(...initVals){
        let sorted = initVals.sort()
        this.storage = sorted;
        this.size = initVals.length;
        this.smallest = this.storage[0];
    }

    add(val){
        if(val > this.smallest) {
            this.storage[0] = val;
            this.storage = this.storage.sort();
            this.smallest = this.storage[0];
        }
    }

    getHeap(){
        return this.storage;
    }
}


module.exports = highestProduct;
