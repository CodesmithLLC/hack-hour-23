'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const MAX = 1000;
  let sum = 0;
  for (let i = 3, j = 5; i < MAX; i += 3, j += 5) {
    if (j < MAX) sum += j;
    if (i % 5 !== 0) sum += i;
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const lesser = x <= y ? x : y;
  const greater = x > y ? x : y;

  for (let i = lesser, j = greater; i < z; i += lesser, j += greater) {
    if (j < z) sum += j;
    if (i % greater !== 0) sum += i;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
