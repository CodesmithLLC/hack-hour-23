// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  // parse the string into an int
  const x = Number(str.charAt(1));
  const y = Number(str.charAt(3));
  let numOfMoves = 0;
  // left up
  if (y - 3 >= 1 && x >= 1) numOfMoves++;
  // left down
  if (y - 3 >= 1 && x <= 8) numOfMoves++;
  // right up
  if (y + 3 <= 8 && x >= 1) numOfMoves++;
  // right down
  if (y + 3 <= 8 && x <= 8) numOfMoves++;
  // up left
  if (x + 3 <= 8 && y >= 1) numOfMoves++;
  // up right
  if (x + 3 <= 8 && y <= 8) numOfMoves++;
  // down left
  if (x - 3 >= 1 && y >= 1) numOfMoves++;
  // down right
  if (x - 3 >= 1 && y <= 8) numOfMoves++;

  return numOfMoves;
}


module.exports = knightjumps;
