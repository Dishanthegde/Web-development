// function print(name){
//     console.log("hello " + name + " !!!!!")
// }
// print();
// print("dth")

function add(a,b){
    console.log("hi ...");
    return a+b;
    console.log("hii brother");
}

let res = add(10,30);
console.log(res);

var greet = function(){
    console.log("welcome to dubai");
}

greet();

var greet2 = _ => "ting ting ting ting";
console.log(greet2());

var add3 = (a,b,c) => {
    return a+b+c
}

console.log(add3(1,2,3));

//even or odd using arrow function
let n = 12
let eveorodd = (n) => n%2==0 ? "even" : "odd";

console.log(eveorodd(n));

//greatest of 3 
let a = 1232;
let b = 1231252;
let c = 1;
let greatest = (a,b,c) => a>=b && a>=c ? "a greatest" : (b>=c ? "b greatest" : "c greatest");
console.log(greatest(a,b,c));

//factorial of give no
let f = 5;
let ans = 1;
let fact = (f) =>  f <= 1 ? 1 : f * fact(f-1); 
console.log(fact(f));
