const mergeTwoArraysAndRemoveDuplicates = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
};

const array1 = [1, 5, 6, 7];
const array2 = [2, 4, 5, 7, 9];
const resultArray = mergeTwoArraysAndRemoveDuplicates(array1, array2);
console.log('resultArray ', resultArray);