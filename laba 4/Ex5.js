const sum = (...args) => {
    return args.reduce((acc, item) => acc + item, 0);
};
const a = sum(1, 2, 3);
console.log(a);