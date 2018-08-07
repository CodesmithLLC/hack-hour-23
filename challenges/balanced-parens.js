/*
	 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
	const inputArr = input.split('');
	const result = false;
	let isUnmatched = false;
	const charObj = {
		pOpen: false,
		bOpen: false,
		cOpen: false,
		lp: 0,
		rp: 0,
		lb: 0,
		rb: 0,
		lc: 0,
		rc: 0
	};

	inputArr.forEach(char => {
		switch (char) {
			case '(':
				charObj.lp++;
				charObj.lp > charObj.rp ? (charObj.pOpen = true) : (charObj.pOpen = false);
				break;
			case ')':
				charObj.rp++;
				if (charObj.rp > charObj.lp || charObj.bOpen || charObj.cOpen) isUnmatched = true;
				charObj.lp > charObj.rp ? (charObj.pOpen = true) : (charObj.pOpen = false);
				break;
			case '[':
				charObj.lb++;
				charObj.lb > charObj.rb ? (charObj.bOpen = true) : (charObj.bOpen = false);
				break;
			case ']':
				charObj.rb++;
				if (charObj.rb > charObj.lb || charObj.pOpen || charObj.cOpen) isUnmatched = true;
				charObj.lb > charObj.rb ? (charObj.bOpen = true) : (charObj.bOpen = false);
				break;
			case 'lc':
				charObj.lc++;
				charObj.lc > charObj.rc ? (charObj.cOpen = true) : (charObj.cOpen = false);
				break;
			case 'rc':
				++charObj.rc;
				if (charObj.rc > charObj.lc || charObj.pOpen || charObj.bOpen) isUnmatched = true;
				charObj.lc > charObj.rc ? (charObj.cOpen = true) : (charObj.cOpen = false);
				break;
		}
	});
	console.log('isUnmatched', isUnmatched);
	if (charObj.lp !== charObj.rp || charObj.lb !== charObj.rb || charObj.lc !== charObj.rc || isUnmatched) return result;
	return true;
}

console.log(balancedParens(''));
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;
