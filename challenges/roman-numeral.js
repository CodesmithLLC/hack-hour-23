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

function romanNumeral(n, romanNum = "") {

    //console.log("romanNum", romanNum);
    // base case
    if (n <= 0) {
        return romanNum;
    }
    // Switch statement
    // Is divisible by 1000?
    switch (true) {
        case (n >= 1000):
            //console.log("divisible by 1000");
            n = n - 1000;
            romanNum += "M";
            break;
        case (n >= 900):
            //console.log("divisible by 900");
            n = n - 900;
            romanNum += "CM";
            break;
        case (n >= 500):
            //console.log("divisible by 500");
            n = n - 500;
            romanNum += "D";
            break;
        case (n >= 400):
            //console.log("divisible by 400");
            n = n - 400;
            romanNum += "CD";
            break;
        case (n >= 100):
            //console.log("divisible by 100");
            n = n - 100;
            romanNum += "C";
            break;
        case (n >= 90):
            //console.log("divisible by 90");
            n = n - 90;
            romanNum += "XC";
            break;
        case (n >= 50):
            //console.log("divisible by 50");
            n = n - 50;
            romanNum += "L";
            break;
        case (n >= 40):
            //console.log("divisible by 40");
            n = n - 40;
            romanNum += "XL";
            break;
        case (n >= 10):
            //console.log("divisible by 10");
            n = n - 10;
            romanNum += "X";
            break;
        case (n >= 9):
            //console.log("divisible by 9");
            n = n - 9;
            romanNum += "IX";
            break;
        case (n >= 5):
            //console.log("divisible by 5");
            n = n - 5;
            romanNum += "V";
            break;
        case (n >= 4):
            //console.log("divisible by 4");
            n = n - 4;
            romanNum += "IV";
            break;
        case (n >= 1):
            //console.log("divisible by 1");
            n = n - 1;
            romanNum += "I";
            break;
        default:
            console.log("error");
    }

    return romanNumeral(n, romanNum);

}

module.exports = romanNumeral;

