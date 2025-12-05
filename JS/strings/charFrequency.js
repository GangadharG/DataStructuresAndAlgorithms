/**
 * Problem: Count the frequency of each character in a string.
 * Given a string, count how many times each character appears.
 * Requirements:
 * - Ignore spaces
 * - Case-insensitive ("Apple" → treat A and a as same)
 * - Return an object/map with character counts
 * 
 * Example:
 * Input: "banana"
 * Output: { b: 1, a: 3, n: 2 }
 */

function charFrequency(str) {
  const result = {};
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];
    if (char === ' ') {
      continue;
    }
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

// Test cases
console.log("Test 1:");
console.log('Input: "banana"');
console.log("Expected: { b: 1, a: 3, n: 2 }");
const result1 = charFrequency("banana");
console.log("Your output:", result1);
console.log("Match:", JSON.stringify(result1) === JSON.stringify({ b: 1, a: 3, n: 2 }));
console.log("---");

console.log("Test 2:");
console.log('Input: "Hello World"');
console.log("Expected: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }");
const result2 = charFrequency("Hello World");
console.log("Your output:", result2);
console.log("Match:", JSON.stringify(result2) === JSON.stringify({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }));
console.log("---");