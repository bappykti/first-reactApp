// event handler using class component
import React, { Component } from 'react'

 class EventHandler extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          changedValue : ""
       }
     }
    handleClick =() => {
        console.log("clicked");
    }
    handleOnChange = (e) => {
        
        this.setState({
            changedValue : e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
        // console.log(this.state.changedValue)
    }
  render() {
    return (
      <div>
          <input type = "text" onChange={this.handleOnChange}></input>
          <button onClick={this.handleClick}>Click Here</button>
          <p>{this.state.changedValue}</p>
      </div>
    )
  }
}

export default EventHandler;