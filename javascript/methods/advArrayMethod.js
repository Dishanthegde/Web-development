let a = [1, 2, 3, 4];
a.map((value, index, a) => {
  console.log("value of the array : ", value);
  console.log("index of the array : ", index);
  console.log("original array : ", a);
});

let newA = a.map((value) => {
  return value * 2;
});

console.log("old array : ", a);
console.log("new array : ", newA);

//converting array to string using map
console.log(a.map((value) => value.toString()));

//using array
let dummy = [];

for (let i = 0; i < a.length; i++) {
  dummy.push(a[i].toString());
}
console.log(dummy);

let array = ["red", "green", "black", "white", "yellow"];

console.log(array.map((value) => value.padStart(5, "*")));

//filter method

let arr = [1, 2, 3, 4, 5, 6, 30, 8, 9, 10];
console.log(
  arr.map((value) => {
    if (value > 6) {
      console.log(value);
    }
  }),
);

console.log(arr.filter((item) => item > 6));

console.log(arr.filter((item) => (item % 2 == 0 ? item : "")));

console.log(arr.filter((item) => (item % 2 != 0 ? item : "")));

//get an array get even no. and double it

console.log(arr.filter((item) => item % 2 == 0).map((item) => item * 2));

let result = 0;
arr.map((items) => (result += items)) / console.log(result);

console.log(
  arr.reduce((prev, current, idx) => {
    console.log(prev);
    console.log(current);
    console.log("****", idx);
    return prev + current;
  }),
);

console.log(arr.reduce((prev, curr) => (prev < curr ? prev : curr)));

//finding the product of the array
let i = 1;
let arr2 = [1, 2, 3];
let result = arr2.reduce((prev, curr) => prev * curr);
console.log(result);
