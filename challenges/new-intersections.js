/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){

}

module.exports = newIntersections;


// function newIntersections(x, y) {
//   const xLines = {}, yLines = {};

//   // gather line segment data
//   for (let i = 0; i < x.length; i++) {
//     const X = x[i], Y = y[i];

//     // add to xLines
//     // is the xLine at Y a line segment?
//     if (Array.isArray(xLines[Y])) {
//       if (X < xLines[Y][0]) xLines[Y][0] = X;
//       else if (X > xLines[Y][1]) xLines[Y][1] = X;
//     }
//     // is the xLine at Y merely a single number?
//     else if (xLines.hasOwnProperty(Y)) {
//       const X_curr = xLines[Y];
//       xLines[Y] = [Math.min(X, X_curr), Math.max(X, X_curr)];
//     }
//     // otherwise, the xLine at Y is not defined yet
//     else
//       xLines[Y] = X;

//     // add to yLines
//     // is the yLine at X a line segment?
//     if (Array.isArray(yLines[X])) {
//       if (Y < yLines[X][0]) yLines[X][0] = Y;
//       else if (Y > yLines[X][1]) yLines[X][1] = Y;
//     }
//     // is the yLine at X merely a single number?
//     else if (yLines.hasOwnProperty(X)) {
//       const Y_curr = yLines[X];
//       yLines[X] = [Math.min(Y, Y_curr), Math.max(Y, Y_curr)];
//     }
//     // otherwise, the yLine at X is not defined yet
//     else
//       yLines[X] = Y;
//   }

//   // look over the created xLines and yLines, and determine intersections
//   let total = 0;
//   for (const yVal in xLines) {
//     // check if xLine is an array
//     if (!Array.isArray(xLines[yVal])) continue;
    
//     for (const xVal in yLines) {
//       // check if yLine is an array
//       if (!Array.isArray(yLines[xVal])) continue;
      
//       const xLine = xLines[yVal], yLine = yLines[xVal];
      
//       // is the x value of the yLine within the xLine, and the y value of the xLine within the yLine?
//       total += (xLine[0] < xVal) && (xVal < xLine[1]) && (yLine[0] < yVal) && (yVal < yLine[1]);
//     }
//   }

//   return total;
// }