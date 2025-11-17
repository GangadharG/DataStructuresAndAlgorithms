function secondLargestDistinctNumberInArray(arr) {
  if (arr.length < 2) return;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      // new largest found
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      // num is between secondLargest and largest
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

const inputArray = [10, 5, 20, 8, 20];
const secondLargestDistinctNumber = secondLargestDistinctNumberInArray(inputArray);
console.log(
  "inputArray secondLargestDistinctNumber ",
  inputArray,
  secondLargestDistinctNumber
);
