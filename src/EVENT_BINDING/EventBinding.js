// event binding
//  event binding needs when we are using normal js functions, not needed in es6 functions
import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
      this.handelClick = this.handelClick.bind(this);
    }
    // ES6 function
    // handelClick = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    // normal js function we need to use bind 
    handelClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handelClick}>Increase</button>
      </div>
    ) 
  }
}
export default EventBinding;