'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

// natural numbers that are multiples of 3 or 5. 
// add the sum of all natural nums

function sumMultiples3Or5Below1000() { 
  // collect values in an array
  const holdValues = [];
  // iterate up to 1000
  for (let i = 1; i < 1000; i += 1) {
    // push values into array
    if (i % 3 === 0 || i % 5 === 0) holdValues.push(i);
  }
  // use reduce and return the sum
  return holdValues.reduce((a, b) => a + b);
}

const calculateMultiplesOf3Or5 = (num) => {
  const holdValues = [];
  // iterate up to 1000
  for (let i = num; i < 1000; i += 1) {
    // push values into array
    if (i % 3 === 0 || i % 5 === 0) holdValues.push(i);
  }
  // use reduce and return the sum
  return holdValues.reduce((a, b) => a + b);
};

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  // guard cases
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return 0;
  if (typeof x !== 'number' && typeof y !== 'number' && typeof z !== 'number') return 0;

  // utilize helper function
  const valueOfX = calculateMultiplesOf3Or5(x);
  const valueOfY = calculateMultiplesOf3Or5(y);
  const valueOfZ = calculateMultiplesOf3Or5(z);

  return valueOfX + valueOfY + valueOfZ;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
