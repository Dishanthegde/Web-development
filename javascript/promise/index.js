let fetchdata = fetch("https://fakestoreapi.com/products").then((resp)=>{
    return resp.json();
}).then((data)=>{
    console.log(data);
}).catch(()=>{
    console.log("invalid");
})

//https://fakestoreapi.com/users