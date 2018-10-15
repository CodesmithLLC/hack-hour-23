/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation(arr, callback) {
  function inner(arr, callback, run = true){
    let perms = [];
    if(arr.length === 0) {
      return [[]];
    }
    arr.forEach((elm, i) => {
      inner(arr.slice(0, i).concat(arr.slice(i+1)), callback, false).forEach(permElm => {
        let curr = [elm].concat(permElm);
        console.log(curr);
        perms.push(curr);
        if(run) {
          callback(curr);
        }
      });
    });

    return perms;
  }

  return inner(arr, callback);
}



module.exports = eachPermutation;
