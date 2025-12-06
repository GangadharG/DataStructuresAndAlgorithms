/**
 * Problem: Rotate Array
 * Given an array and a number k, rotate the array to the right by k steps.
 * Rotating to the right means moving elements from the end to the beginning.
 * 
 * Example:
 * Input: [1, 2, 3, 4, 5, 6, 7], k = 3
 * Output: [5, 6, 7, 1, 2, 3, 4]
 * Explanation: 
 *   - Take the last 3 elements: [5, 6, 7]
 *   - Move them to the front
 *   - The remaining elements [1, 2, 3, 4] come after
 * 
 * Important Notes:
 * - k can be larger than the array length
 *   Example: [1, 2, 3], k = 5
 *   - Rotating 5 times is same as rotating 2 times (5 % 3 = 2)
 *   - So we should use: k = k % nums.length
 */

function rotateArray(nums, k) {
  const newK = k % nums.length;
  const lastKElements = nums.slice(-newK);
  const remainingElements = nums.slice(0, -newK);
  const result = [...lastKElements, ...remainingElements];
  nums.length = 0;
  nums.push(...result);
}

// Test cases
console.log("Test 1:");
console.log("Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3");
console.log("Expected: [5, 6, 7, 1, 2, 3, 4]");
const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotateArray(nums1, 3);
console.log("Your output:", nums1);
console.log("Match:", JSON.stringify(nums1) === JSON.stringify([5, 6, 7, 1, 2, 3, 4]));
console.log("---");

console.log("Test 2:");
console.log("Input: nums = [-1, -100, 3, 99], k = 2");
console.log("Expected: [3, 99, -1, -100]");
const nums2 = [-1, -100, 3, 99];
rotateArray(nums2, 2);
console.log("Your output:", nums2);
console.log("Match:", JSON.stringify(nums2) === JSON.stringify([3, 99, -1, -100]));
console.log("---");

