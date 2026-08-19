let userData = {
    age:23,
    name:"dth",
    ooru:"sirsi",
    gender: "hudga",
    "last name" : null,
    "@" : "gmail.com",
    2004 : "birth year",
    address : {
        HouseNo : "#174",
        Street: "Havyaka nagara 2nd street",
        Post : "vidyaranyapura"
    },
    greet: function(){
        console.log("welcome to bnglr");
    }
}

// console.log(userData);
// console.log(userData.age);
// console.log(userData.gender);

// console.log(userData["last name"])
// console.log(userData["@"]);

// console.log(userData[2004])

// console.log(userData.address.Street);
// console.log(userData["address"]["HouseNo"]);

// userData.greet();
// userData["greet"]();

console.log(Object.keys(userData));
console.log(Object.keys(userData.address));
console.log(Object.values(userData))
console.log(Object.values(userData.address));


Object.isExtensible




//given a marks of student find a student who has scored 60 or more than that then add 5 bonus marks for each seelcted student
//create a array of prices, 1. select a price greater than 500 and then give each selected product 100rs discount
                        //  2.find total billing after that


// let marks = [45, 60, 72, 55, 80, 39, 65];
// let goodS = marks.filter((item)=>item>60).map((mark)=>mark+5);

// console.log(goodS);

// let prices = [200, 600, 800, 450, 1000, 300, 750];
// let res = prices.filter((item)=>item>500).map((disc)=>disc-100);

// console.log(res);

// let totalbill = res.reduce((prev, curr)=>prev+curr);

// console.log(totalbill);