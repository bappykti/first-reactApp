// state
import React, { Component } from 'react'


export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handelIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    handelDecrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
  render() {
      const {count} = this.state
    return (
      <div>
          <h1>Count : {count}</h1>
          <button onClick={this.handelIncrement} disabled={count===10 ? true:false}>+</button>
          <button onClick={this.handelDecrement} disabled={count===0 ? true:false}>-</button>
      </div>
    )
  }
}
