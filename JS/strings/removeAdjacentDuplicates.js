/**
 * Problem: Remove All Adjacent Duplicates In String
 * You are given a string s consisting of lowercase English letters. 
 * A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made.
 * 
 * Example: 
 * Input: s = "abbaca" Output: "ca"
 * Explanation: "abbaca" → remove "bb" → "aaca" → remove "aa" → "ca"
 * 
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of lowercase English letters only
 */

function removeDuplicates(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  
  return stack.join('');
}

// Test cases
console.log("Test 1:");
console.log('Input: s = "abbaca"');
console.log('Expected: "ca"');
const result1 = removeDuplicates("abbaca");
console.log("Your output:", result1);
console.log("Match:", result1 === "ca");
console.log("---");

console.log("Test 2:");
console.log('Input: s = "azxxzy"');
console.log('Expected: "ay"');
const result2 = removeDuplicates("azxxzy");
console.log("Your output:", result2);
console.log("Match:", result2 === "ay");
console.log("---");

