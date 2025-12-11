/**
 * Problem: Remove Duplicates from Sorted Array
 * Given a sorted array, remove duplicates IN-PLACE such that each element 
 * appears only once. Return the new length.
 * IMPORTANT: Modify the original array, don't create a new one!
 * Example:
 * Input: nums = [1, 1, 2]
 * Output: 2, nums = [1, 2, _]
 * Explanation: Your function should return length = 2, 
 *              with the first two elements being 1 and 2. The elements beyond the returned length don't matter.
 */

function removeDuplicates(nums) {
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  
  return slow + 1;
}

// Test cases
console.log("=== REMOVE DUPLICATES FROM SORTED ARRAY TESTS ===");
console.log("Test 1:");
console.log("Input: nums = [1, 1, 2]");
console.log("Expected: length = 2, nums = [1, 2]");
const nums1 = [1, 1, 2];
const len1 = removeDuplicates(nums1);
console.log("Your output: length =", len1, ", nums =", nums1.slice(0, len1));
console.log("Match:", len1 === 2 && JSON.stringify(nums1.slice(0, len1)) === JSON.stringify([1, 2]));
console.log("---");

console.log("Test 2:");
console.log("Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]");
console.log("Expected: length = 5, nums = [0, 1, 2, 3, 4]");
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const len2 = removeDuplicates(nums2);
console.log("Your output: length =", len2, ", nums =", nums2.slice(0, len2));
console.log("Match:", len2 === 5 && JSON.stringify(nums2.slice(0, len2)) === JSON.stringify([0, 1, 2, 3, 4]));
console.log("---");

console.log("Test 3:");
console.log("Input: nums = [1, 2, 3]");
console.log("Expected: length = 3, nums = [1, 2, 3]");
const nums3 = [1, 2, 3];
const len3 = removeDuplicates(nums3);
console.log("Your output: length =", len3, ", nums =", nums3.slice(0, len3));
console.log("Match:", len3 === 3 && JSON.stringify(nums3.slice(0, len3)) === JSON.stringify([1, 2, 3]));
console.log("---");
