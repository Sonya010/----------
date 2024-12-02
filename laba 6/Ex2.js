const compose = (...fns) => {
    const handlers = [];

    const composed = (x) => {
        let res = x;

        try {
            for (const fn of fns.reverse()) {
                res = fn(res);
            }
            return res;
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return null;
        }
    };

    composed.on = (name, handler) => {
        if (name === "error") handlers.push(handler);
    };
    return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

try {
    const a = compose(inc, twice, cube);
    const f = a(5);
    console.log(f);
} catch (e) {
    console.error(e);
}

try {
    const b = compose(inc, inc);
    const f1 = b(7);
    console.log(f1);
} catch (e) {
    console.error(e);
}

try {
    const с = compose(inc, twice, 6);
    const f2 = с(8);
    console.log(f2);
} catch (e) {
    console.error(e);
}