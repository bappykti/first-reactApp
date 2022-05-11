import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'
const todoTitel = "Call family";
const todoDesc = "Make a copy";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const headingStyle = {
  color:"red",
  fontSize:"3rem",
  textAlign: "center",
  padding: "15px"

}
ReactDOM.render(
  <div>
  <h1 className='headingStyle largeText'>"Hello world of React"</h1>
  <h3>{todoTitel}</h3>
  <h3>{todoDesc}</h3>
  <h3>{dateName + " " + monthName + " " + yearName}</h3>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  <p>19/05/2022</p>



  </div>,
  // <h1>My First react App</h1>, // render allow only one elements at a time, for displaying many elements ata time we use div, within div we integrate many elements.
  
  document.getElementById('root')
);