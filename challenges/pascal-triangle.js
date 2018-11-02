/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows, result = [[1]]) {
  //base case
  if (numRows < 2) return result
  //refer to last row in the result array
  const lastRow = result[result.length - 1];
  //initialize currRow
  const currRow = [1]
  //loop through length of prev row, starting at 2nd position
  for (let i = 1; i < lastRow.length; i += 1) {
    currRow[i] = lastRow[i] + lastRow[i - 1];
  }
  currRow.push(1);

  result.push(currRow);
  return pascalTriangle(numRows - 1, result)
}

console.log(pascalTriangle(6));
module.exports = pascalTriangle;
