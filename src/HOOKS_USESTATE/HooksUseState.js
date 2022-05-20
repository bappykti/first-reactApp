// using hook use state 
import React, { Component } from 'react';

// built a normal number increment project using class component

class HooksUseState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handelIncrement = () => {
        this.setState ({
           count : this.state.count + 1
        })
    } 
  render() {
      const {count} = this.state;
    return (
      <div>
          <h1>Count : {count}</h1>
          <button onClick={this.handelIncrement}>Increment</button>
      </div>
    )
  }
}


export default HooksUseState;