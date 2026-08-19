let one = {
    name : "abc",
    age : 123,
    height : "6 foot",
    weight : "obesity"
}

let two = {
    name : "def",
    age : 2,
    isDead: false
}

let newObj = Object.assign({}, one, two)
// console.log(newObj);

// Object.preventExtensions(one)
// one.condition = "severe";
// console.log(one);


// let res = Object.isExtensible(one);
// console.log(res);


let third = {
    name : "cef",
    age : 212,
    isDead: false
}

// Object.seal(third);
// Object.freeze(third)
// third.height = "3 feet";
// delete third.isDead;
// third.name = "dth"
// console.log(third);
// console.log(Object.isFrozen(third));
// console.log(Object.isSealed(third));
// console.log(Object.isExtensible(third));

// let res = Object.entries(third);
// console.log(res);
// console.log(res[1].fill("abd"));
// console.log(Object.fromEntries(res));

let data = Object.defineProperty(third, "name2",{
    value: "xyz",
    writable: false,
    enumerable: true,
    configurable: false
});

// console.log(third);

// delete data.name2
// console.log(Object.keys(third));
// delete data.name2
// console.log(third.name);
// console.log(data.name2);

console.log(Object.hasOwn(data, "name"));
console.log(Object.is("xyz", data.name2));

