const contract =
    (fn, ...types) =>
    (...args) => {
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const currentType = types[i];
            const name = currentType.name.toLowerCase();
            if (typeof arg !== name) {
                throw new TypeError(`Argument type ${name} expected`);
            }
        }
        const result = fn(...args);
        const resType = types[types.length - 1];
        const name = resType.name.toLowerCase();
        if (typeof result !== name) {
            throw new TypeError(`Result type ${name} expected`);
        }
        return result;
    };

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings("Hello ", "world!");
console.dir(res1);