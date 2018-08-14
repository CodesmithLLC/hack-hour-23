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
	const tracker = {};
	const mean = Math.floor(
		array.reduce((acc, curr) => {
			curr in tracker ? tracker[curr]++ : (tracker[curr] = 1);
			return acc + curr;
		}, 0) / array.length
	);

	const keys = Object.keys(tracker);
	let mode = keys[0];
	if (keys.length > 1) {
		for (let i = 1; i < keys.length; i++) {
			const key = keys[i];
			if (tracker[key] > tracker[mode]) mode = key;
			if (tracker[key] === tracker[mode] && key > mode) mode = key;
		}
	}

	if (mean == mode) return true;
	return false;
}

module.exports = modemean;
