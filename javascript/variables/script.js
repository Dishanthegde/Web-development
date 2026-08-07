// variable accessing....
const price = "100000";
console.log(price);

price = "200000"; 
console.log(price);


const car = "lamborghini";

function print(){
    console.log(car);
}

print();

//let and var are used to declare variables in JavaScript. The main difference between them is their scope.
var bike = "ducati";
{
    console.log(bike);
}

//throws error because bike2 is block scoped and cannot be accessed outside the block
{
    let bike2 = "bmw";
}
console.log(bike2); 


function printBike(){
    let bike3 = "honda";
}

console.log(bike3);
printBike();

//hoisting
console.log(naam)
var naam = "cde";

// console.log(name); 

let name = "John";
console.log(name); 

