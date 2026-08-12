// // function print(name){
// //     console.log("hello " + name + " !!!!!")
// // }
// // print();
// // print("dth")

// function add(a,b){
//     console.log("hi ...");
//     return a+b;
//     console.log("hii brother");
// }

// let res = add(10,30);
// console.log(res);

// var greet = function(){
//     console.log("welcome to dubai");
// }

// greet();

// var greet2 = _ => "ting ting ting ting";
// console.log(greet2());

// var add3 = (a,b,c) => {
//     return a+b+c
// }

// console.log(add3(1,2,3));

// //even or odd using arrow function
// let n = 12
// let eveorodd = (n) => n%2==0 ? "even" : "odd";

// console.log(eveorodd(n));

// //greatest of 3
// let a = 1232;
// let b = 1231252;
// let c = 1;
// let greatest = (a,b,c) => a>=b && a>=c ? "a greatest" : (b>=c ? "b greatest" : "c greatest");
// console.log(greatest(a,b,c));

// //factorial of give no
// let f = 5;
// let ans = 1;
// let fact = (f) =>  f <= 1 ? 1 : f * fact(f-1);
// console.log(fact(f));

// //1.gratest of 6 using arrow

// let great = (a,b,c,d,e,f) => a>=b && a>=c && a>=d && a>=e && a>=f ? a : (b>=c && b>=d && b>=e && b>=f ? b : (c>=d && c>=e && c>=f ? c : (d>=e && d>=f ? d : (e>=f ? e : f))))
// console.log(great(1,2,3,4,5,6))

// //2.square of no. usign arrow

// let square = (a) => a*a;
// console.log(square(20));

//-----------------------call back function--------------------------

function guest(name, greet) {
  greet();
  console.log(name);
}

function greet() {
  console.log("welcome to the partyyyyy!!!!!!");
}

guest("dth", greet);

//-------------------higher order function-------------------
function calculator(x, y, op) {
  op(x, y);
}

function add(x, y) {
  console.log(x + y);
}

function sub(x, y) {
  console.log(x - y);
}



calculator(4, 3, sub);
calculator(1, 4, mul);
calculator(8, 2, div);

calculator(1, 3, add);


function main(callback) {
  callback();
  console.log("this is main func");
}

main(function callback() {
  console.log("this is callback func");
});

//-------------withought callback-----------------------


function order(name, food) {
  console.log("feast is on your table here mr/mrs " + name);
  packMadbeeka() 
  food();
}

function tindi() {
  console.log("tindi is getting readyyyy");
  console.log("-----------");
  console.log("ready");
}

function oota() {
  console.log("oota is getting readyyyy");
  console.log("-----------");
  console.log("ready");
}

function packMadbeeka() {
  console.log("order is getting packed brother");
  console.log("-----------");
  console.log("ready to take away");
}

order("dth", oota);


//------------with callback----------------

function order(name, food, pack) {
  console.log("feast is on your table here mr/mrs " + name);
  food(pack);
}

function tindi(pack) {
  console.log("tindi is getting readyyyy");
  console.log("-----------");
  console.log("ready");
  pack();
}

function oota(pack) {
  console.log("oota is getting readyyyy");
  console.log("-----------");
  console.log("ready");
  pack()
}

function packMadbeeka() {
  console.log("order is getting packed brother");
  console.log("-----------");
  console.log("ready to take away");
}

order("dth", oota, packMadbeeka);
