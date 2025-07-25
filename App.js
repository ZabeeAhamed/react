const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Iam in h1 tag"),
        React.createElement("h2",{},"Iam in h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"Iam in h1 tag"),
        React.createElement("h2",{},"Iam in h2 tag"),
    ]),
]);

console.log(parent);

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(parent);