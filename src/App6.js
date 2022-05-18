// conditional rendering

import React, { Component } from 'react';
import HomePage from "./CONDITIONAL _RENDERING/HomePage";
import LoginPage from "./CONDITIONAL _RENDERING/LoginPage";

class App6 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    // conditional rendering using ternary operator
    render() {
            const {isLoggedIn} = this.state
        //  let element;  
        //  element = isLoggedIn ? <HomePage /> : <LoginPage />
                return (
                //  <div>{element}</div>
                // we can use ternary operator within JXS
                 <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>
                )
        }
    // conditional rendering using variable named element
    // render() {
    //     const {isLoggedIn} = this.state
    //     let element;  
    //         if(isLoggedIn){
    //             element = <HomePage />
    //         }
    //         else {
    //             element = <LoginPage />
    //         }
    //         return (
    //             <div>{element}</div>
    //         )
    // }
// conditional rendering using if else method
//   render() {
//       const {isLoggedIn} = this.state

//     if(isLoggedIn){
//         return <HomePage />
//     }
//     else {
//         return <LoginPage />
//     }
//   }
}

export default App6;