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

function pascalTriangle(numRows) {
  if (numRows < 1 || isNaN(numRows)) return [];
  else if (numRows === 1) return [[1]];

  const triangle = [[1], [1,1]];

  if (numRows === 2) return triangle;

  for (let i = 2; i < numRows; i++) {
    const newRow = [1];
    const lengthOfLastArray = triangle[triangle.length - 1].length;
    const lastTriangle = triangle[triangle.length - 1];

    for (let j = 0; j < lengthOfLastArray - 1; j++) {
      newRow.push(lastTriangle[j] + lastTriangle[j + 1]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

console.log(pascalTriangle(5));

module.exports = pascalTriangle;
