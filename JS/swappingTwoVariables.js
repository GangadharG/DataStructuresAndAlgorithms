/* Swap 2 variables using temp variable */
const swap = () => {
    let a = 5;
    let b = 6;

    let temp;
    temp = a;
    a = b;
    b = temp;

    console.log('a and b ', a, b);
}

swap();