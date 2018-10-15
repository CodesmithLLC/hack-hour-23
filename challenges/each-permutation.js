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

function eachPermutation(array, callback) {
  if (typeof callback !== 'function' || !Array.isArray(array)) return;

  function findPermutations(arr) {
    const perms = [];

    // recursive base case
    if (arr.length === 1) {
      perms.push(arr);
      return perms;
    }

    for (let i = 0; i < arr.length; i++) {
      const charsLeft = arr.slice(0, i).concat(arr.slice(i + 1));
      const innerPermutations = findPermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        const newArr = [arr[i]].concat(innerPermutations[j]);
        // run callback if we have a correctly sized array
        if (newArr.length === array.length) callback(newArr);
        perms.push(newArr);
      }
    }
    return perms;
  }

  findPermutations(array);
}

eachPermutation([1,2,3], (arr) => console.log(arr));

module.exports = eachPermutation;
