// Kadane's Algorithm (Maximum SubArray Sum)

function kadane(arr) {

    if (arr.length === 0) return;

    let maxEndHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++ ) {
        maxEndHere = Math.max(arr[i], maxEndHere + arr[i]);
        maxSoFar = Math.max(maxEndHere, maxSoFar);
    }

    return maxSoFar;
}

const inputArray = [1, 3, 5, 8, -7];
const maximumSubArraySum = kadane(inputArray);
console.log('inputArray maximumSubArraySum ', inputArray, maximumSubArraySum);

const inputArray2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maximumSubArraySum2 = kadane(inputArray2);
console.log('inputArray maximumSubArraySum ', inputArray2, maximumSubArraySum2);