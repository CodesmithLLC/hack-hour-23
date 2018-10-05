/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
    //find out how many circles deep you are
    const startPos = [start_x, start_y];
    const endPos   = [end_x, end_y];

    const dist = (pos1, pos2) => {
        const a = pos1[0] - pos2[0];
        const b = pos1[1] - pos2[1];
        return Math.sqrt(a*a + b*b);
    }

    const Circle = (x, y, r) => {
        this.x = x;
        this.y = y;
        this.r = r; //WHY IS THIS COLOR DIFFERENT >:[
        this.unprocessesUppers;
        this.upper;
        this.lowers;
    }

    const circles = [];

    
    for(let i = 0; i < x.length; i++){
        circles.push(new Circle(x[i], y[i], r[i]))
    }
    
    //find circles around the start, keep moving up until there are no more circles to look at
    

    for(let i of circles){
        for(let j of circles){
            //does one of these circles include the other one?
            //check if i surrounds j;
            const space = dist([i.x, i.y], [j.x, j.y]);
            if(space < i.r){ // one of them includes the other
                if(i.r < j.r){
                    //j includes i
                    i.unprocessesUppers.push(j);
                } else {
                    //i includes j
                    j.unprocessesUppers.push(i);
                }
            } 
        }
    }



    


}

module.exports = circleCountry;
