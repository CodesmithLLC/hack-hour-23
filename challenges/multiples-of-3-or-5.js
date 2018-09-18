'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  const baseNumbs = [3, 5];
  const multiples = [];

  baseNumbs.forEach(num => {
    let index = 1;
     while (num * index <= 1000) {
       multiples.push(num * index);
       index++
      }
  });

  return multiples.reduce((acc, cur) => acc += cur);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  const baseNumbs = [x, y];
  const multiples = [];

  baseNumbs.forEach(num => {
    let index = 1;
     while (num * index <= z) {
       multiples.push(num * index);
       index++
      }
  });

  return multiples.reduce((acc, cur) => acc += cur);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
