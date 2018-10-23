/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {

};

module.exports = solveKnapsack;



// function solveKnapsack(items, capacity) {
//   // 2D array of results given # of considered items and capacity available
//   const results = [];

//   // we can consider anywhere from 0 to items.length of the items
//   for (let i = 0; i <= items.length; i++) {
//     // push onto results array
//     results.push([]);
//     // capacity available will be anywhere
//     for (let c = 0; c <= capacity; c++) {
//       // if no items considered or no weight available, set result to 0
//       if (i === 0 || c === 0)
//         results[i][c] = 0;
//       // if we can't use the currently looked at item, don't use it!
//       else if (items[i - 1].weight > c)
//         results[i][c] = results[i - 1][c];
//       // otherwise, determine whether using or not using the item is better
//       else {
//         const dontUse = results[i - 1][c];
//         const use = results[i - 1][c - items[i - 1].weight] + items[i - 1].value;
//         results[i][c] = Math.max(dontUse, use);
//       }
//     }
//   }

//   // return the best result from considering all items at max capacity
//   return results[items.length][capacity];
// };