const max = (array) => {
    let res = 0;
    for (const row of array) {
        for (const item of row) {
            if (item > res) {
                res = item;
            }
        }
    }
    return res;
};
const m = max([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.log(m);