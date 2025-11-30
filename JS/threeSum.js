/**
 * 3Sum : Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Important: i, j, k are INDICES (positions), not values!
 * - You CAN use the same VALUE from different indices (e.g., two -1's at index 0 and 4)
 * - You CANNOT use the same INDEX twice (e.g., can't use nums[0] twice)
 * - Notice that the solution set must not contain duplicate triplets.
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Constraints:
 * - 3 <= nums.length <= 3000
 * - -10^5 <= nums[i] <= 10^5
*/

function threeSum(nums) {
  const triplets = [];
  const sortedNums = nums.sort((a, b) => a - b);
  const seen = new Set();
  for (let i = 0; i < sortedNums.length; i++) {
    for (let j = i + 1; j < sortedNums.length; j++) {
      for (let k = j + 1; k < sortedNums.length; k++) {
        if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
          const triplet = [sortedNums[i], sortedNums[j], sortedNums[k]];
          const key = triplet.join(','); 
          if (!seen.has(key)) {
            seen.add(key);
            triplets.push(triplet);
          }
        }
      }
    }
  }
  
  return triplets;
}

// Test cases
console.log("Test 1:");
console.log("Input: nums = [-1,0,1,2,-1,-4]");
console.log("Expected: [[-1,-1,2],[-1,0,1]]");
const result1 = threeSum([-1,0,1,2,-1,-4]);
console.log("Your output:", result1);
console.log("Match:", JSON.stringify(result1.sort()) === JSON.stringify([[-1,-1,2],[-1,0,1]].sort()));
console.log("---");

console.log("Test 2:");
console.log("Input: nums = [0,1,1]");
console.log("Expected: []");
const result2 = threeSum([0,1,1]);
console.log("Your output:", result2);
console.log("Match:", JSON.stringify(result2) === JSON.stringify([]));
console.log("---");

console.log("Test 3:");
console.log("Input: nums = [0,0,0]");
console.log("Expected: [[0,0,0]]");
const result3 = threeSum([0,0,0]);
console.log("Your output:", result3);
console.log("Match:", JSON.stringify(result3) === JSON.stringify([[0,0,0]]));
console.log("---");