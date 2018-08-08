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
    let myString = '';
    //use recursion?
        //base case is 1
    //have a table that checks for the number less <= 
        //4,5,9,10,40,50,90,100, 400, 500, 900, 1000
        //add the character corresponding to those above and subtract
        //from the number n, and pass romanNumeral(n)

    if(n >= 1000){
        return 'M' + romanNumeral(n - 1000);
    }else if(n >= 900){
        return 'CM' + romanNumeral(n - 900);
    }else if(n >= 500){
        return 'D' + romanNumeral(n - 500);
    }else if(n >= 400){
        return 'CD' + romanNumeral(n - 400);
    }else if(n >= 100){
        return 'C' + romanNumeral(n - 100);
    }else if(n >= 90){
        return 'XC' + romanNumeral(n - 90);
    }else if(n >= 50){
        return 'L' + romanNumeral(n - 50);
    }else if(n >= 40){
        return 'XL' + romanNumeral(n - 40);
    }else if(n >= 10){
        return 'X' + romanNumeral(n -  10);
    }else if(n >= 9){
        return 'IX' + romanNumeral(n - 9);
    }else if(n >= 5){
        return 'V' + romanNumeral(n - 5);
    }else if(n >= 4){
        return 'IV' + romanNumeral(n - 4);
    }else if(n >= 1){
        return 'I' + romanNumeral(n - 1);
    }else{
        return myString;
    }
}

module.exports = romanNumeral;
