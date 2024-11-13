const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(random(3, 8));
