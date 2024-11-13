const sum = (...args) => {
    let res = 0;
    let i = 0;
    do {
        res += args[i];
        i++;
    } while (i < args.length);
    return res;
};
const a = sum(1, 2, 3);
console.log(a);