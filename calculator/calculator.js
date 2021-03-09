function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function sum(arr) {
    const suma = arr.reduce((t, i) => {
        return t + i
    }, 0)
    return suma
}

function multiply(arr) {
    const sumaM = arr.reduce((t, i) => {
        return t * i
    }, 1)
    return sumaM;
}

function power(a, b) {
    return a ** b;

}

function factorial(f) {
    if (f < 0)
        return -1;
    else if (f == 0)
        return 1;
    else {
        return (f * factorial(f - 1));
    }
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}