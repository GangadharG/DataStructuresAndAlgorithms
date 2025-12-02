/**
 * Problem: Valid Palindrome, Given a string, determine if it's a palindrome after removing non-alphanumeric characters and ignoring case.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 * 
 * Example:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: After removing non-alphanumeric and converting to lowercase: "amanaplanacanalpanama" reads the same forward and backward
 * 
 * What are alphanumeric characters?
 * - Letters: a-z, A-Z
 * - Numbers: 0-9
 * - Everything else (spaces, punctuation, special chars) should be removed
 */

function isPalindrome(s) {
  const cleanedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  
  return cleanedString === reversedString;
}

// Test cases
console.log("Test 1:");
console.log('Input: "A man, a plan, a canal: Panama"');
console.log("Expected: true");
const result1 = isPalindrome("A man, a plan, a canal: Panama");
console.log("Your output:", result1);
console.log("Match:", result1 === true);
console.log("---");

console.log("Test 2:");
console.log('Input: "race a car"');
console.log("Expected: false");
const result2 = isPalindrome("race a car");
console.log("Your output:", result2);
console.log("Match:", result2 === false);
console.log("---");

