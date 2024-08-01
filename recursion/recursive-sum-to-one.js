/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 853;
const expected4 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
/**
 * The function `rSumToOneDigit` recursively calculates the sum of the digits of a number until a
 * single digit is obtained.
 * @param num - The `rSumToOneDigit` function takes a number as input and recursively calculates the
 * sum of its digits until a single-digit number is obtained. If you provide a number as input, the
 * function will repeatedly sum the digits of the number until a single-digit number is reached.
 * @returns The function `rSumToOneDigit` is recursively summing the digits of the input number until a
 * single digit is obtained. The final single digit sum is being returned.
 */
function rSumToOneDigit(num) {
  // your code here

  //base case
  if (String(num).length === 1) {
    return num;
  }

  //convert string to number
  const nums = String(num)
    .split("")
    .map((char) => Number(char));

  let sum = 0;
  for (num of nums) {
    sum += num;
  }

  return rSumToOneDigit(sum);
}

const result1 = rSumToOneDigit(num1);
console.log(`${result1} should equal ${expected1}`);
const result2 = rSumToOneDigit(num2);
console.log(`${result2} should equal ${expected2}`);
const result3 = rSumToOneDigit(num3);
console.log(`${result3} should equal ${expected3}`);
const result4 = rSumToOneDigit(num4);
console.log(`${result4} should equal ${expected4}`);

/**
 * This function takes in an integer as input and
 * sums that number’s digits repeatedly until the
 * sum is only one digit.
 * @param {number} num
 * @returns {number}
 */
function sumToOne(num) {
  if (String(num).length === 1) {
    return num;
  }

  const nums = String(num)
    .split("")
    .map((char) => Number(char));

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sumToOne(sum);
}
