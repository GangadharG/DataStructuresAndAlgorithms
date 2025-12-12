/**
 * Problem: Contains Duplicate
 * Given an integer array, determine if any value appears at least twice.
 * Return true if any value appears at least twice, and false if every element is distinct.
 */

function containsDuplicate(nums) {
  // Option 1: Use Set (simplest)
  const uniqueSet = new Set(nums);
  return uniqueSet.size !== nums.length;
}

/* 
// Option 2: Use Object to track seen elements
// Option 3: Sort and check adjacent elements
// Option 4: Nested loop (not recommended)
*/

// Test cases
console.log("=== CONTAINS DUPLICATE TESTS ===");
console.log("Test 1:");
console.log("Input: nums = [1, 2, 3, 1]");
console.log("Expected: true");
const result1 = containsDuplicate([1, 2, 3, 1]);
console.log("Your output:", result1);
console.log("Match:", result1 === true);
console.log("---");

console.log("Test 2:");
console.log("Input: nums = [1, 2, 3, 4]");
console.log("Expected: false");
const result2 = containsDuplicate([1, 2, 3, 4]);
console.log("Your output:", result2);
console.log("Match:", result2 === false);
console.log("---");

