/**
 * Problem: Merge Sorted Arrays
 * Given two sorted arrays, merge them into one sorted array.
 * Example:
 * Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// Test cases
console.log("=== MERGE SORTED ARRAYS TESTS ===");
console.log("Test 1:");
console.log("Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]");
console.log("Expected: [1, 2, 3, 4, 5, 6]");
const result1 = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
console.log("Your output:", result1);
console.log(
  "Match:",
  JSON.stringify(result1) === JSON.stringify([1, 2, 3, 4, 5, 6])
);
console.log("---");

console.log("Test 2:");
console.log("Input: arr1 = [1, 2, 3], arr2 = [4, 5, 6]");
console.log("Expected: [1, 2, 3, 4, 5, 6]");
const result2 = mergeSortedArrays([1, 2, 3], [4, 5, 6]);
console.log("Your output:", result2);
console.log(
  "Match:",
  JSON.stringify(result2) === JSON.stringify([1, 2, 3, 4, 5, 6])
);
console.log("---");
