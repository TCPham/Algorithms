/* 
  Balance Index

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  A balance point is ON an index, not between indices.
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  // your code here
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum > rightSum) {
      return -1;
    }
    rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

const result1 = balanceIndex(nums1);
console.log(`${result1} should equal ${expected1}`);

const result2 = balanceIndex(nums2);
console.log(`${result2} should equal ${expected2}`);
