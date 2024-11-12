//7
function fn() {
    const obj1 = { name: "name1" };
    let obj2 = { name: "name2" };

    obj1.name = "NewName1";
    obj2.name = "NewName2";
    //змінює в обох випадках, бо змінюється лише властивість об'єкта

    //obj1 = { name: "NewName01" };
    obj2 = { name: "NewName02" };
    //для першого випадку видає помилку, бо константу змінити не можна

    return { obj1, obj2 };
}
console.log(fn());

//8
function createUser(name, city) {
    return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));