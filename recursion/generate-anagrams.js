// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams

  Given a string, return array where each element is a string representing a
  different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {
  // your code here
  //
  if (str.length === 1) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    let num = str[i];
    str[i] = str[i + 1];
    str[i + 1] = num;
    console.log(str);

    generateAnagrams(str);
  }
}

console.log(generateAnagrams(str1));
