/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	function allEven(str){
        let subStrings = {};
        for(let i of str){ !!subStrings[i] ? subStrings[i] += 1 : subStrings[i] = 1; }
        
        for(let i of Object.keys(subStrings)){
            if(subStrings[i] % 2 === 1){ return false }
        }
        return true;
    }

    for(let i in str){
        if(allEven(str.slice(0, i) + str.slice(i+1, str.length))){
            return true;
        }
        return false;
    }


}

module.exports = permPalin;