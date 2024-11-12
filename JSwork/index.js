// 

// function fun(){
//     console.log("Hello");
// }
// fun();

// function fun(a,b){
//     console.log("Hello");
//     return a+b;
// }
// let data=fun();
// console.log(data);

// function fun(a,b,c=10){ //here mismatch of number of parameters doesn't effect the code or function
//     console.log("Hello");
//     return a+b+c;
// }
// let data=fun(12,5);
// console.log(data);

//*************************** */

// function cCompiler(){
//     return " C compiler"

// }

// function javaCompiler(){
//     return "Java compiler"

// }
// function selectlanguage(clbk){ //when we use clbk as a parameter (function in another function)
//     return "You have selected:"+clbk();
// }
// const result = selectlanguage(javaCompiler);
// console.log(result);

// function selectlanguage(language) {

//     let data;

//     if(language=='c'){
//     function cCompiler() {
//         return " C compiler"

//     }
//     data=cCompiler();
//     }

//     if(language=='java'){
//     function javaCompiler() {
//         return "Java compiler"

//     }
//     data=javaCompiler();
//     }

//     return data;
// }
// const result = selectlanguage("java");
// console.log(result);

//*************** ****************//

// console.log(document)
// console.dir(document)

// const div=document.getElementsByClassName("parent");
// console.dir(div);
// div[0].innerHTML="<h2 style=color:red>Hello world</h2>";
// const h1=document.createElement('h1');
// h1.innerText="ABES ENGINEERING COLLEGE";
// console.log(h1);
// h1.style.background='cyan';

// div[0].appendChild(h1);
// const img=document.createElement('img');
// img.src="./image/logo.jpg";
// img.setAttribute("height","200")
// console.log(img);
// div[0].appendChild(img);

// function getData(){
//     console.log("getDataCalled")
// }

// const disp=document.getElementById("disp");
// console.dir(disp);
// function getData(){
//     console.log("getData Called");
//     disp.innerHTML="<h2>Hello, You have called getData</h2>";
// }
// btn.addEventListener("click",getData);


const promise1=new Promise((resolve,reject)=>{
let a=12;
if(a>10){
    resolve({name:"Naina",branch:"AIMLCSE"});
}
else{
    reject("rejected")
}
}
);

promise1.then((msg)=>console.log(msg))
.catch(error=>console.log(error));  //catch use in user defined function and fetch is used for predefined 
