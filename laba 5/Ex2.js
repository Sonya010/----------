const array = () => {
    const data = [];
    const getByInd = (i) => {
        return data[i];
    };
    getByInd.push = (value) => {
        return data.push(value);
    };
    getByInd.pop = () => {
        return data.pop();
    };
    return getByInd;
};

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());