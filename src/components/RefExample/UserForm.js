import React, { Component, createRef } from 'react'

class UserForm extends Component {
    constructor(props) {
      super(props)
        this.userNameRef = createRef();
        this.userPassRef = createRef();
      this.state = {
         
      }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Submitted");
        console.log(this.userNameRef.current.value);
        console.log(this.userPassRef.current.value);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div className='form-field'>
              <label htmlFor= "userName">User Name : </label>
              <input type= "text" id='userName' ref={this.userNameRef}/>
          </div>
          <div className='form-field'>
              <label htmlFor= "password">Password : </label>
              <input type= "password" id='password' ref={this.userPassRef}/>
          </div>
          <button>Register</button>
      </form>
    )
  }
}
export default UserForm;