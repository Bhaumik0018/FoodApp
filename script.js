import React from "react";
import ReactDOM from "react-dom/client";
// const react = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "hello world from REACT"
// ); // this React.createElement will create the object of react
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(react); //this converts react element to html format containing h1 tag and attributes in it.

/**
 *
 * <div class="parent">
 *      <div class="child">
 *          <h1>Hello this is from H1<h1>
 *          <h2>Hello this is from H2<h2>
 *      </div>
 * <div>
 */

// const parent = React.createElement(
//   "div",
//   { class: "parent" },
//   React.createElement(
//     "div",
//     { class: "child" },
//     [
//       React.createElement("h1", {}, "this is from h1"),
//       React.createElement("h2", {}, "this is from h2"),
//     ] // if we want pass multiple tags then we can use array
//   )
// );
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    REACT JSSSSSS
  </h1>
);

//React Functional Component
const HeadingComponent = () => {
  return <h1 className="functionComponent1">Hello functionComponent1</h1>;
};

const HeadingComponent2 = () => (
  <div>
    {/* hear we can also keep empty insted of 'div' that is <>......</> or React.Fragment */}
    <HeadingComponent />
    {HeadingComponent()}
    <h1 className="functionComponent2">Hello functionComponent2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parentClass);
root.render(<HeadingComponent2 />); // this replaces parent from html file to react and then renders it html
// use dom object to render the react object
