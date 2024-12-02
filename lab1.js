// 1
//1.1
const inc = (n) => {
    console.dir(++n);
};

inc(25);

//1.2
const obj = { n: 5 };

const inc2 = (obj) => {
    console.dir(++obj.n);
};

inc2(obj);

//2
//2.1
const array = [
    true,
    "hello",
    5,
    12,
    -200,
    false,
    false,
    "word",
    25,
    true,
    "house",
];
const hash = { number: 0, string: 0, boolean: 0 };
for (const el of array) {
    hash[typeof el] += 1;
}

console.dir(hash);

//2.2
const hash1 = {};
for (const el of array) {
    if (hash1[typeof el]) {
        hash1[typeof el] += 1;
    } else {
        hash1[typeof el] = 1;
    }
}

console.dir(hash);
