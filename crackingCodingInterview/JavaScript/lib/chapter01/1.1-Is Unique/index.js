'use strict';

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersSet(str) {
  let chars = new Set();

  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersSort(str) {
  // sort string using quicksort
  str.sort();

  for (var i = 1; i < str.length; ++i) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Using indexOf() method returns the first index at which a given element
 *  can be found in the array, or -1 if it is not present.
 *
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersIndexOf(str) {

  for (var i = 0; i < str.length; ++i) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}

/**
 * Using a boolean array for each character ASCII character. If
 * fount more than once, then set it to false, and immediately
 * return false;
 *
 * Time: O(N) where N is the length of domain character.
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
function hasUniqueCharactersArray(str) {
  let chars = [];

  for (let i = 0; i < str.length; ++i) {
    if (chars.includes(str[i])) {
      return false;
    }
    chars.push(str[i]);
  }
  return true;
}

/**
 *  O(n^2) approach, no additional data structures used
 *   for each character, check remaining characters for duplicates
 */

function hasUniqueCharsAll(string) {

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true;
};
module.exports = {
  hasUniqueCharactersSet,
  hasUniqueCharactersSort,
  hasUniqueCharactersIndexOf,
  hasUniqueCharactersArray,
  hasUniqueCharsAll,
};
