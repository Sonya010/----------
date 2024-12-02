const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== "function") {
            throw new Error("All args should be functions");
        }
        return (x) => fns.reduce((v, f) => f(v), x);
    }
};
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

try {
    const a = pipe(inc, twice, cube);
    const f = a(5);
    console.log(f);
} catch (e) {
    console.error(e);
}

try {
    const b = pipe(inc, inc);
    const f1 = b(7);
    console.log(f1);
} catch (e) {
    console.error(e);
}

try {
    const f2 = pipe(inc, 7, cube);
} catch (e) {
    console.error(e);
}