console.log("startd hereee....");

let is_login =false;
let login = setTimeout(()=>{
    console.log("data fetching is happening... but u waited for 5 second right???"); 
    alert("fetching.... fetching... fetching.....")  
}, 5000);

is_login ? clearTimeout(login) : ""


setInterval(()=>{
    console.log("fetch.... fetch");
    
}, 2000)
console.log("ended brother before fetching the data");
let n = 3;
let i = 0;

let timer = setInterval(()=>{
    console.log("hi");
    i++;
    if(i==n){
        clearInterval(timer);
    }
},2000)

