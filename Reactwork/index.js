console.log("Hello");
const parent = document.getElementById('root');
console.dir(parent);
const root = ReactDOM.createRoot(parent);
const h1=React.createElement("h1",{style:{color:"cyan"}},"ABES Engineering College");
        // element is created with the element,object,content while on DOM we have to give only 1 parameter
// root.render(h1);
// const l1=React.createElement("li",{},"Orange");
// const l2=React.createElement("li",{},"Apple");
// const u1=React.createElement("ul",{style:{backgroundColor:"cyan"}},l1,l2);

const element = <h1>Hello, world!</h1>;
const l1=<li>Orange</li>;
const l2=<li>Apple</li>;
const u1=<ul>{l1}{l2}</ul>;

const container=(
<div style={{backgroundColor:"cyan"}}>
    <div>{element}</div>
    <div>{u1}</div>
</div>
)

root.render(container);