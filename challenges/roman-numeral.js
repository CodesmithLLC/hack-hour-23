/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    string = '';
    let numerals = [
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ];

    function nearestLower(n){ //not really nearest lower, nearest lower or same
        for(let i = numerals.length-1; i>=0; i--){
            if(numerals[i][0] < n){return numerals[i]}
        }
    }

    function nearestHigher(n){
        for(let i = 0; i<numerals.length; i++){
            if(numerals[i][0] > n) return numerals[i];
        }
    }

    //First, check if the number has its own character
    //If it does, return that character

    for(let i of numerals){
        if(i[0] === n) return i[1];
    }

    //otherwise, look for the first numeral higher and lower than n

    let higher = nearestHigher(n);
    let lower = nearestLower(n);
    //If the difference between n and its nearest higher numeral is one of the numerals
    //Then use the subtractive system

    for(let i in numerals){
        console.log(numerals[i]);
        if(higher[0] - numerals[i][0] === n){
            //do subtractive system
            console.log(i)
            string += numerals[i][1];
            string += higher[1];
            return string;
        }
    }

    //Otherwise, do it additively:

    ///recursively whittle down the size of n by its nearest lower numeral until n is zero
    ///Adding each nearest lower numeral to a running total, then return that.

    

    function additive(n){
        let nearestLower;
        if(n === 0){return 0}

        for(let i = n; i>0; i++){

        }
    }

}
