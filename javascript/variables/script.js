// // variable accessing....
// const price = "100000";
// console.log(price);

// price = "200000"; 
// console.log(price);


// const car = "lamborghini";

// function print(){
//     console.log(car);
// }

// print();

// //let and var are used to declare variables in JavaScript. The main difference between them is their scope.
// var bike = "ducati";
// {
//     console.log(bike);
// }

// //throws error because bike2 is block scoped and cannot be accessed outside the block
// {
//     let bike2 = "bmw";
// }
// console.log(bike2); 


// function printBike(){
//     let bike3 = "honda";
// }

// console.log(bike3);
// printBike();

// //hoisting
// console.log(naam)
// var naam = "cde";

// // console.log(name); 

// let name = "John";
// console.log(name); 

let age = 50;

let output = age>17 ? "can drive car" : "can't drive car";
console.log(output)

let a=1232342342343;
let b=12234;
let c = 12321312;

let greatest = (a >= b && a >= c ? a : (b >= c ? b : c));
console.log(greatest);


let isLoggedIn = false;
if(isLoggedIn){
    console.log("logged in")
}else{
    console.log("try again");
    
}

if(age>=18 && age<50){
    console.log("welcome broooo....")
}else if(age>=50){
    console.log("sutti babu... money follows brother")
}else{
    console.log("koteshwaraaaya hare koooteshwaraaa")
}


let day = 3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3: 
        console.log("wednesday");
        break;
    default:
        console.log("invalid day");
}

// let table = 12;
for(let i=5; i<=11; i++){
    console.log("\t")
    for(let j = 1; j<=10; j++){

        console.log(i+" * " + j + " = " + i*j);
    }
}

let i = 1;

do{
    console.log("2 * " + i + " = " + 2*i );
    i++;
}while(i<=10)



for(let x = 1; x<=5; x++){
    if(x == 2) continue;
    console.log(x);
}


for(let x = 1; x<=5; x++){
    if(x == 2) break
    console.log(x);
}
