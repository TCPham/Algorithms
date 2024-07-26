/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
  // your code here

  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return nums;
  }

  let obj = {};
  for (let num of nums) {
    if (obj.hasOwnProperty(num)) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  let mode = [];
  let count = 2;
  for (let key in obj) {
    if (obj[key] > count) {
      mode = [];
      count = obj[key];
      mode.push(Number(key));
    }
    if (obj[key] === count) {
      mode.push(Number(key));
    }
  }
  return mode;
}

console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));
