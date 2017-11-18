import React from "react";
import ReactDOM from "react-dom";

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact = React.createElement("div", { className: "me" }, [
  React.createElement("h1", {}, "An Awesome Person"),
  React.createElement("p", {}, "Who is learning React"),
  React.createElement("ul", { className: "my-interests" }, [
    React.createElement("li", {}, "JavaScript"),
    React.createElement("li", {}, "React"),
    React.createElement("li", {}, "Movies"),
    React.createElement("li", {}, "Ice cream")
  ])
]);
// const li1 = React.createElement("li", {}, "Javascript");
// const li2 = React.createElement("li", {}, "React");
// const li3 = React.createElement("li", {}, "Movies");
// const li4 = React.createElement("li", {}, "Ice Cream");
//
// const ul = React.createElement("ul", { className: "my-interests" }, [
//   li1,
//   li2,
//   li3,
//   li4
// ]);
// const p = React.createElement("p", {}, "Who is learning React");
// const h1 = React.createElement("h1", {}, "An Awesome Person");
// const meInReact = React.createElement("div", { classname: "me" }, [h1, p, ul]);

// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="my-interests">
//     <li>Javascript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice Cream</li>
//   </ul>
// </div>;

ReactDOM.render(meInReact, document.getElementById("global"));

export default meInReact;
