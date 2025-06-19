/* Remove Duplicates using Set */
const removeDuplicatesUsingSet = (array) => {
  return [...new Set(array)];
};

const inputArray = [1, 2, 4, 4, 6, 7, 7, 8];
const resultArray = removeDuplicatesUsingSet([...inputArray]);
console.log("inputArray, resultArray ", inputArray, resultArray);

/* ----------------- */

/* Remove Duplicates using filter & indexOf */
const removeDuplicatesUsingFilterAndIndexOf = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

const input = [1, 2, 4, 4, 6, 7, 7, 8];
const output = removeDuplicatesUsingFilterAndIndexOf([...input]);
console.log("inputArray, resultArray ", input, output);

/* ----------------- */

/* Remove Duplicates using forEach loop */
const removeDuplicatesUsingForEach = (array) => {
  const uniqueArr = [];
  const seen = {};

  array.forEach((item) => {
    console.log("seen ", seen);
    if (!seen[item]) {
      seen[item] = true;
      uniqueArr.push(item);
    }
  });

  return uniqueArr;
};

const duplicateArray = [1, 2, 2, 3, 4, 4, 5];
const nonDuplicateArray = removeDuplicatesUsingForEach([...duplicateArray]);
console.log(
  "duplicateArray, nonDuplicateArray ",
  duplicateArray,
  nonDuplicateArray
);

/* ----------------- */

/* Remove Duplicates using forEach loop */
const removeDuplicatesFromArrayOfObjects = (array) => {
  const uniqueArr = array.filter(
    (obj, index) => index === array.findIndex((o) => o.id === obj.id)
  );

  return uniqueArr;
};

const duplicateObjectArray = [
  { id: 1, name: "ganga" },
  { id: 2, name: "anjali" },
  { id: 1, name: "gandi" },
];
const outputObjectArray = removeDuplicatesFromArrayOfObjects([
  ...duplicateObjectArray,
]);
console.log(
  "duplicateObjectArray, outputObjectArray ",
  duplicateObjectArray,
  outputObjectArray
);

/* ----------------- */
