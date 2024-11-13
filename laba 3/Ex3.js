const ipToNum = (ip = "127.0.0.1") => {
    const red = (acc, index) => (acc << 8) + index;
    return ip
        .split(".")
        .map((index) => Number(index))
        .reduce(red, 0);
};
console.log(ipToNum());
