//4
function range(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}
console.log(range(15, 30));

//5
function rangeOdd(start, end) {
    let res1 = [];
    for (let j = start; j <= end; j += 2) {
        res1.push(j);
    }
    return res1;
}
console.log(rangeOdd(15, 30));