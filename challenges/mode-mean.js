/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const mean = Math.floor(array.reduce((acc,next)=>{
       return acc+next;
    },0)/array.length)
    const mode =array.reduce((acc,next)=>{
        acc[next] = (acc[next] || 0)+ 1;
        return acc
    },{})
    let temp=0;
    let temp1=0
    for(let key in mode){
        if(mode[key] > temp){
            temp1 = temp;
            temp = key;
        }
    }
    let big ;
    if(mode[temp] > mode[temp1]){
        big  =  mode[temp]
    } else {
       big = mode[temp1]
    }
    return big === temp
}
// modemean([1,5,5,5,2,2,7])
module.exports = modemean;
