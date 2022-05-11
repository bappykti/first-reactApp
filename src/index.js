import React from "react";
import ReactDOM from "react-dom";
// import './index.css'
const todoTitle = "Call family";
const todoDesc = "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing";
const date = new Date();
const dateNumber = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

// const headingStyle = {
//   color:"red",
//   fontSize:"3rem",
//   textAlign: "center",
//   padding: "15px"
// }
ReactDOM.render(
  <div>
    <h1 className="headingStyle largeText">"Hello world of React"</h1>
    <div className="card">
      <h4 className="cardTitle">{todoTitle}</h4>
      <p className="cardDesc">{todoDesc}</p>
      <p className='cardFooter'>{dateNumber + " " + monthName + " " + yearName}</p> 
    </div>
  </div>,
  // <h1>My First react App</h1>, // render allow only one elements at a time, for displaying many elements ata time we use div, within div we integrate many elements.

  document.getElementById("root")
);
