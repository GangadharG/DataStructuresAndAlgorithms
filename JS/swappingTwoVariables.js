/* Swap 2 variables using temp variable start */
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
/* Swap 2 variables using temp variable end */


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
/* Swap 2 variables using Math end */