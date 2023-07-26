const heading=React.createElement
("h1",
{id:"heading"},
"Hello World From React!");


const root=ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);


// how to add nested element in dom for eg:
/* 
<div>
    <div>
        <h1>This is an h1 tag</h1>
    </div>
</div>

*/

/*const parent=React.createElement
("div",
{id:"parent"},
    React.createElement
    ("div",
    {id:"child"},
        React.createElement("h1",{id:"heading"},"This is an h1 tag"
)))
root.render(parent);*/

//how to create siblings elements in dom
//h1 and h2 are siblings
/*
div>
    <div>
        <h1>This is an h1 tag</h1>
        <h2>This is an h2 tag</h2>
    </div>
</div> 
*/
const parent=React.createElement
("div",
{id:"parent"},
    React.createElement
    ("div",
    {id:"child"},
       [ React.createElement("h1",{className:"heading"},"This is an h1 tag"),
       React.createElement("h2",{className:"heading"},"This is an h2 tag")]
))

root.render(parent);