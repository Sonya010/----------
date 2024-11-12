//9
const array = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Kate Aurelius", phone: "+380986648913" },
    { name: "Maria Aurelius", phone: "+380675674512" },
];

function findPhoneByName(name) {
    for (const contact of array) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return undefined;
}
console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Mark Aurelius"));
console.log(findPhoneByName("Kate Aurelius"));

console.log("");

//10
const PhBoook = new Map();
PhBoook.set("Marcus Aurelius", "+380445554433");
PhBoook.set("Kate Aurelius", "+380986648913");
PhBoook.set("Maria Aurelius", "+380675674512");

function findPhoneByName1(name) {
    return PhBoook.get(name);
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Mark Aurelius"));
console.log(findPhoneByName("Kate Aurelius"));
