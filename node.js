// const arr = ["dishant", 22];
// console.log("hi " + arr[0] + ", you are " + arr[1] + " years old.");

// const student = {
//     name: "dishant",
//     age: 22
// }

// student.class = "bachelor of Engineering";
// console.log(student);
// delete student.class;
// console.log(student);

// const person = {
//     greet(){
//         console.log("Hello");
//     }
// };

// const student = Object.create(person);
// student.name = "dishant";
// student.age = 20;
// student.greet();
// console.log(student);

let a = "abcde";
let b = Number(a);
console.log(b);
let c = "234";
let d = Number(c);
console.log(d);
console.log(typeof d, typeof b, typeof a);

function age(age){
    console.log("Your age is " + age);
}

age(c);

let n = ()=>{
    console.log("arrow function");
}

n();