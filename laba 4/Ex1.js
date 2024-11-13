const sum = (...args) => {
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    return res;
};
const a = sum(1, 2, 3);
console.log(a);