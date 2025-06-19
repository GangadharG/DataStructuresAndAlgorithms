/* Swap 2 variables using temp variable */
const swapUsingTemp = () => {
    let a = 5;
    let b = 6;

    let temp;
    temp = a;
    a = b;
    b = temp;

    console.log('a and b ', a, b);
}

swapUsingTemp();

/* ----------------- */


/* Swap 2 variables using Math start */
const swapUsingMath = () => {
    let a = 5;
    let b = 9;
    console.log('The orginal a & b are ', a, b);

    a = a - b;
    b = a + b;
    a = b - a;
    console.log('After Swapping, a and b are ', a, b);
}

swapUsingMath();
// Works only with numbers, There can be issues with floating point numbers
/* ----------------- */


/* Swap 2 variables using Array Destruturing */
const swapUsingArrayDestructuring = () => {
    let a = 10;
    let b = 13;
    console.log('The orginal a & b are ', a, b);

    [b, a] = [a, b];
    console.log('After Swapping, a and b are ', a, b);
}

swapUsingArrayDestructuring();

/* ----------------- */

/* 
Is there any other ways? can I expolore?
Yes, We can swap using Bitwise XOR (This works only for integers)
*/