// console.log("Hello Fetch");
// const response = fetch("https://dummyjson.com/recipes");
// response.then(data=>{
//     console.log(data);
//     data.json().then((res)=>{
//         console.log(res.recipes[0].name);
//     })
// })
// .catch(error=>console.log(error))
// .finally(()=>console.log("Hello,finally closed all the resources"))


// console.log("Hello Fetch");

// function fetchData(){
//     const response = fetch("https://dummyjson.com/recipes");
// response.then(data=>{
//     console.log(data);
//     data.json().then((res)=>{
//         console.log(res.recipes[0].name);
//     })
// })
// .catch(error=>console.log(error))
// .finally(()=>console.log("Hello,finally closed all the resources"))
// }


// console.log("Hello Fetch");

// function fetchData(){
//     const response = fetch("https://dummyjson.com/recipes");
// response.then(data=>{
//     console.log(data);
//     data.json().then((res)=>{
//         console.log(res.recipes[0].name);
//         document.getElementById("dis").innerHTML= res.recipes[0].name; // show the output on the browser
//     })
// })
// .catch(error=>console.log(error))
// .finally(()=>console.log("Hello,finally closed all the resources"))
// }

/******concatenate all the fields of 0 index */
console.log("Hello Fetch");

function fetchData(){
    const response = fetch("https://dummyjson.com/recipes");
response.then(data=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res.recipes[0]);

        // let output=`${res.recipes[0].ingredients}`;
        let output=`${res.recipes[0].id+res.recipes[0].name+res.recipes[0].ingredients}`
        document.getElementById("dis").innerHTML= output;
        
    })
})
.catch(error=>console.log(error))
.finally(()=>console.log("Hello,finally closed all the resources"))
}

