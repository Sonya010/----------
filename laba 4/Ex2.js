const sum = (...args) => {
    let res = 0;
    for (const num of args) {
        res += num;
    }
    return res;
};
const a = sum(1, 2, 3);
console.log(a);