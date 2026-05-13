import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World");

const ele = React.createElement("div", { className: "container1", xyz: "abc" }, React.createElement("div", { className: "container2" }, 
        React.createElement("div", { className: "container3" }, [React.createElement("h1", { className: "heading1", key:"heading1" }, "Heading 1"), React.createElement("h2", { className: "heading2", key:"heading2" }, "Heading 2")]),
))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);