function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
    let array = [];
    for (let i = 0; i <= 9; i++) {
        a = square(i);
        b = cube(i);
        array.push(average(a, b));
    }
    return array;
}
console.log(calculate());