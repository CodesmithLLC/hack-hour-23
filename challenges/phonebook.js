/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

/**
 * Find a phone number matching a name in the Jazbook
 * @param {Object} jazbook - Array of first names and phone numbers
 * @param {string} name - Name to look up in Jazbook
 */
//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  const number = jazbook.reduce((acc, cur) => {
    if (cur[0] === name) return cur[1];
    else return acc;
  }, false);
  return number;
}

/**
 * Returns an object version of a jazbook array
 * @param {Object} jazbook - Array of first names and phone numbers
 */
// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  const jazbookObj = {};

  /**
   * 
   * @param {string} name - Finds phone number of name in jazbook 
   */
  jazbookObj.prototype.findEntry = (name) => {
    if (jazbookObj[name]) return jazbookObj[name];
    else return false;
  }

  /**
   * 
   * @param {string} name - Name of new entry in jazbook 
   * @param {string} number - Phone number of new entry in jazbook
   */
  jazbookObj.prototype.addEntry = (name, number) => {
    jazbookObj[name] = number;
  }

  /**
   * 
   * @param {string} name - Delete jazbook entry that matches this name 
   */
  jazbookObj.prototype.removeEntry = (name) => {
    if (jazbookObj[name]) delete jazbookObj[name];
  }

  jazbook.forEach((arr) => {
    jazbookObj[arr[0]] = arr[1];
  });
  return jazbookObj;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
