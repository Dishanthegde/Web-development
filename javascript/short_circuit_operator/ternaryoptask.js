// 1. Positive, Negative, or Zero

// Write a program that takes a number and prints:

// "Positive" if greater than 0
// "Negative" if less than 0
// "Zero" if equal to 0
// Use a nested ternary operator.

let a = 20;

console.log(a > 0 ? "positive" : (a < 0 ? "negative" : "zero"))

// 2. Even or Odd + Sign

// Given a number, print:
// "Positive Even"
// "Positive Odd"
// "Negative Even"
// "Negative Odd"
// "Zero"
// Use only ternary operators.


//3rd question
let b = -3;
console.log(b>0 && b%2==0 ? "positive even" : (b>0 && b%2 != 0 ? "positive odd" : b<0 && b%2==0 ? "negative even" : b<0 && b%2 != 0 ? "negative odd" : "zero"));

let x=81232342342343;
let y=12234;
let z = 12321312;

let greatest = (x >= y && x >= z ? x : (y >= z ? y : z));
console.log(greatest);

//4th question : largest of 5 numbers

let v = 2323423123;
let w = 23124151412414;

console.log(x>=y && x>=z && x>=v && x>= w ? "x greatest" : y>=z && y>=v && y>=w ? "y greatest" : z>=w && z>=v ? "z greatest" : w>=v ? "w greatest" : "v greatest");


// 5. Voting Eligibility

// Given a person's age, determine:

// Age below 0 → "Invalid Age"
// Age 0–17 → "Not Eligible"
// Age 18–59 → "Eligible"
// Age 60 or above → "Senior Citizen - Eligible"

// Use a ternary operator.

let age = 59; 
console.log(age>0 && age<18? "not eligible" :age >=18 && age<=59 ? "eligible" : age>=60 ? "senior citizen" : "invalid age" );

// 6. Login Validation

// You have:

// let username = "admin";
// let password = "1234";

// Print:

// "Login Successful"

// if both username and password are correct.

// Otherwise print:

// "Invalid Credentials"

let username = "admin";
let password = "1234";
console.log(username == "admin" && password == "1234" ? "login successfull" : "invalid credentials");

// 7. Temperature Classification

// Given a temperature, print:

// Below 0 → "Freezing"
// 0–15 → "Cold"
// 16–30 → "Normal"
// 31–40 → "Hot"
// Above 40 → "Extreme Heat"

// Use nested ternary operators.

let temperature = 35;

let result = temperature < 0 ? "Freezing" : temperature <= 15 ? "Cold" : temperature <= 30 ? "Normal" : temperature <= 40? "Hot" : "Extreme Heat";

console.log(result);

// 8. Discount Calculator

// A shopping website gives discounts based on purchase amount:

// ₹5000 or more → 20% discount
// ₹3000–₹4999 → 15%
// ₹1000–₹2999 → 10%
// Below ₹1000 → No discount

let amount = 4500;

let discount = amount >= 5000 ? 20 : amount >= 3000 ? 15 : amount >= 1000 ? 10 : 0;

let finalAmount = amount - (amount * discount / 100);

console.log("Final Amount:", finalAmount);

// 9. Find Middle Number

// Given three different numbers:

// let a = 25;
// let b = 10;
// let c = 18;

// Find the middle value (neither the largest nor the smallest) using nested ternary operators.

let p = 19;
let q = 20;
let r = 18;

let middle = (p > q) ? (q > r ? q : (p > r ? r : p)) : (p > r ? p : (q > r ? r : q));

console.log(middle);

// 10. Employee Bonus

// An employee gets a bonus based on salary and performance:

// Performance "Excellent" → 20% bonus
// Performance "Good" → 10% bonus
// Performance "Average" → 5% bonus
// Anything else → No bonus

// But if salary is below ₹20,000, the maximum bonus is 5%, regardless of performance.

let salary = 30000;
let performance = "Excellent";

let bonusPercentage = salary < 20000 ? 5 : performance === "Excellent" ? 20 : performance === "Good" ? 10 : performance === "Average" ? 5 : 0;

let bonus = salary * bonusPercentage / 100;

console.log("Bonus:", bonus);