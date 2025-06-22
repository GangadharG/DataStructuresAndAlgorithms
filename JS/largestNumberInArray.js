/* Largest number in the integer Array */
const largestNumber = (array) => {
    return array?.length > 0 ? Math.max(...array) : null;
};

const inputArray = [14, 93, 135, 39, 5];
const largestNumberInArray = largestNumber([...inputArray]);
console.log('inputArray largeNumber ', inputArray, largestNumberInArray);
/* ---------- */


/* Find Object with greater age */
const findEmployeeWithHigherAge = (employees) => {
    // To get the max age
    // const maxAge = Math.max(...employees.map(employee => employee.age));

    const highAgeEmployee = employees.reduce((max, emp) => {
        return emp.score > emp.score ? emp : max;
    });

    return highAgeEmployee;
};

const employees = [
    { name: 'Alice', age: 42 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 26 },
    { name: 'David', age: 29 }
];
const employee = findEmployeeWithHigherAge(employees);
console.log('employees higherAgeEmployee ', employees, employee);
/* ---------- */
