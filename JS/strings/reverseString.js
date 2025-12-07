/**
 * Problem: Reverse a String
 * Given a string, return the reversed version.
 * Example:
 * Input: "hello"
 * Output: "olleh"
 */

function reverseString(str) {
  // Using split, reverse, join
  return str.split('').reverse().join('');
}

// Test cases
console.log("=== REVERSE STRING TESTS ===");
console.log("Test 1:");
console.log('Input: "hello"');
console.log('Expected: "olleh"');
const result1 = reverseString("hello");
console.log("Your output:", result1);
console.log("Match:", result1 === "olleh");
console.log("---");

console.log("Test 2:");
console.log('Input: "JavaScript"');
console.log('Expected: "tpircSavaJ"');
const result2 = reverseString("JavaScript");
console.log("Your output:", result2);
console.log("Match:", result2 === "tpircSavaJ");
console.log("---");