let obj = {
    "name" : "dth",
    "id" : 1234,
    "address" : {
        "phone no" : "1234566788",
        "street no" : "4th street",
        "area" : "vidyarnaypura"
    },
    "locations" : ["bangalore rural", "bangalore urban", "pune"],
    "isInterested" : true,
    add(a,b){
        return a+b;
    }
}
console.log(typeof obj);
console.log(obj.add(obj.id,4));

let json = JSON.stringify(obj);
console.log(json);
console.log(json+"   hey man!!!!!!!!");

let convObj = JSON.parse(json);
console.log(convObj);


console.log("started");
let data = fetch("https://google.com");
console.log(data);
console.log("ended");





