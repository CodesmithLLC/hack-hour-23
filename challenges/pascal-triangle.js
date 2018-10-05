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
function memo(){
  let cache = {};
  return function func(numRows){
    let triangle = [];
    function inner(numRows) {
      //base case item is in cache or is just 1
      if(numRows === 1) return [1];
      else {
        let higherLevel = inner(numRows - 1);
        triangle.push(higherLevel);
        let result = new Array(higherLevel + 1);
        for(let i = 0; i < higherLevel.length + 1; i++){

          let addend1 = higherLevel[i - 1] || 0;
          let addend2 = higherLevel[i] || 0
          result[i] = addend1 + addend2
        }
        return result;
      }
    }
    if(cache.hasOwnProperty(numRows)){ return cache[numRows]}
    else { 
      inner(numRows);
      cache[numRows] = triangle
    }
    return triangle
  }

}

let pascalTriangle = memo();

module.exports = pascalTriangle;
