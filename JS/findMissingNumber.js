// Find the missing number from an array containing n distinct numbers taken from the range 0 to n

const findMissingNumber = (inputArray) => {

    const n = inputArray?.length;
    const expectedSum = (n * (n+1))/ 2;
    const actualSum = inputArray.reduce((acc, num) => acc + num, 0);
    const missingNumber = expectedSum - actualSum;

    return missingNumber;
}

const inputArray = [0, 1, 2, 4, 5, 6, 7, 8, 9];
const missingNumber = findMissingNumber(inputArray);
console.log('inputArray missingNumber ', inputArray, missingNumber);

