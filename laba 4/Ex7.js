const life = (persons) => {
    const res = {};
    for (const person in persons) {
        const dates = persons[person];
        res[person] = dates.died - dates.born;
    }
    return res;
};
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
console.log(life(persons));