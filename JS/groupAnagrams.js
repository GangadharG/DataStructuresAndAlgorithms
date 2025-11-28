/**
 * Problem: Given an array of strings, group the anagrams together.
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 * 
 * An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.
 * Key Points:
 * Same letters — uses the exact same characters
 * Different order — letters are rearranged
 * Same length — same number of characters
 */

function groupAnagrams(strs) {
  const groupedAnagrams = {};
  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (groupedAnagrams[sortedStr]) {
      groupedAnagrams[sortedStr].push(str);
    } else {
      groupedAnagrams[sortedStr] = [str];
    }
  }

  return Object.values(groupedAnagrams);;
}

// Test cases
console.log("Test 1:");
console.log("Input:", ["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("Expected:", [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
console.log("Your output:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("---");

console.log("Test 2:");
console.log("Input:", [""]);
console.log("Expected:", [[""]]);
console.log("Your output:", groupAnagrams([""]));
console.log("---");

console.log("Test 3:");
console.log("Input:", ["a"]);
console.log("Expected:", [["a"]]);
console.log("Your output:", groupAnagrams(["a"]));
console.log("---");

console.log("Test 4:");
console.log("Input:", ["listen", "silent", "enlist", "hello", "world"]);
console.log("Expected:", [["listen", "silent", "enlist"], ["hello"], ["world"]]);
console.log("Your output:", groupAnagrams(["listen", "silent", "enlist", "hello", "world"]));