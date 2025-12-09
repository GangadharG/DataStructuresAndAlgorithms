/**
 * Problem: Find Minimum in Array
 * Given an array of numbers, find the minimum (smallest) value.
 * Example(Minimum):
 * Input: [3, 7, 2, 9, 1, 5]
 * Output: 1
 */

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Test cases
console.log("\n=== FIND MINIMUM TESTS ===");
console.log("Test 1:");
console.log("Input: [3, 7, 2, 9, 1, 5]");
console.log("Expected: 1");
const minResult1 = findMin([3, 7, 2, 9, 1, 5]);
console.log("Your output:", minResult1);
console.log("Match:", minResult1 === 1);
console.log("---");

console.log("Test 2:");
console.log("Input: [-5, -2, -9, -1]");
console.log("Expected: -9");
const minResult2 = findMin([-5, -2, -9, -1]);
console.log("Your output:", minResult2);
console.log("Match:", minResult2 === -9);
console.log("---");