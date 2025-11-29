/**
 * Problem: Find All Pairs That Sum to Target - Given an array of numbers and a target sum, find all unique pairs
 * of indices whose values add up to the target.
 *
 * Example:
 * Input: [2, 7, 11, 15, 3, 6], target = 9
 * Output: [[0, 1], [4, 5]]
 * Explanation:
 *   - arr[0] + arr[1] = 2 + 7 = 9
 *   - arr[4] + arr[5] = 3 + 6 = 9
 *
 * Important Notes:
 * - Return pairs of INDICES (not values)
 * - Each pair should be unique
 * - You can use the same element only once per pair
 * - Order doesn't matter: [0, 1] is same as [1, 0], but return one format consistently
 */

function findPairsSumToTarget(arr, target) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

// Test cases
console.log("Test 1:");
console.log("Input: arr = [2, 7, 11, 15, 3, 6], target = 9");
console.log("Expected: [[0, 1], [4, 5]]");
console.log("Your output:", findPairsSumToTarget([2, 7, 11, 15, 3, 6], 9));
console.log("---");

console.log("Test 2:");
console.log("Input: arr = [3, 3], target = 6");
console.log("Expected: [[0, 1]]");
console.log("Your output:", findPairsSumToTarget([3, 3], 6));
console.log("---");

console.log("Test 3:");
console.log("Input: arr = [1, 2, 3, 4, 5], target = 7");
console.log("Expected: [[2, 3], [1, 4], [0, 5]]");
console.log("Wait, that's wrong - arr[5] doesn't exist. Let me fix...");
console.log("Expected: [[2, 3], [1, 4]]");
console.log("Your output:", findPairsSumToTarget([1, 2, 3, 4, 5], 7));
console.log("---");

console.log("Test 4:");
console.log("Input: arr = [1, 2, 3], target = 10");
console.log("Expected: [] (no pairs found)");
console.log("Your output:", findPairsSumToTarget([1, 2, 3], 10));
console.log("---");
