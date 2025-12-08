/**
 * Problem: Reverse an Array (In-place)
 * Given an array, reverse it in-place (modify the original array).
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 * Important: Modify the original array, don't return a new one!
 */

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
  }
  
  // Test cases for reverseArray
  console.log("\n=== REVERSE ARRAY TESTS ===");
  console.log("Test 1:");
  console.log("Input: [1, 2, 3, 4, 5]");
  console.log("Expected: [5, 4, 3, 2, 1]");
  const arr1 = [1, 2, 3, 4, 5];
  reverseArray(arr1);
  console.log("Your output:", arr1);
  console.log("Match:", JSON.stringify(arr1) === JSON.stringify([5, 4, 3, 2, 1]));
  console.log("---");
  
  console.log("Test 2:");
  console.log("Input: ['a', 'b', 'c', 'd']");
  console.log("Expected: ['d', 'c', 'b', 'a']");
  const arr2 = ['a', 'b', 'c', 'd'];
  reverseArray(arr2);
  console.log("Your output:", arr2);
  console.log("Match:", JSON.stringify(arr2) === JSON.stringify(['d', 'c', 'b', 'a']));
  console.log("---");
