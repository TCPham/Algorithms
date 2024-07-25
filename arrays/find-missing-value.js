/* 
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

/* 
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
  // your code here
  let min = normalize(unorderedNums);
  let expectedSum = 0;
  let maxNum = unorderedNums[0];
  let actualSum = 0;
  let missingNum;

  //iterate array to get the current sum
  for (let i = 0; i < unorderedNums.length; i++) {
    actualSum += unorderedNums[i];
  }

  //iterate array to find max number
  for (let j = 1; j < unorderedNums.length; j++) {
    if (maxNum < unorderedNums[j]) {
      maxNum = unorderedNums[j];
    }
  }

  //formula to get expected sum
  expectedSum = (maxNum * (maxNum + 1)) / 2;

  //condition for whether we have a missing value
  if (expectedSum - actualSum === 0) {
    return null;
  } else {
    missingNum = expectedSum - actualSum + min;
  }

  //return
  return missingNum;
}

console.log(missingValue(nums1));
console.log(missingValue(nums2));
console.log(missingValue(nums3));
console.log(missingValue(nums4));

function normalize(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  if (min == 0) {
    return arr;
  }

  if (min < 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] -= min;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      arr[i] -= min;
    }
  }
  return min;
}
