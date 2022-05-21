// building form using controlled components
import React, { useState } from "react";
import style from "./form.module.css";


function FORM() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        console.log("Form is Submitted");
        let userInfo = {
            name : name,
            email: email,
            password : password
        }
        console.log(userInfo);
        e.preventDefault();
    }
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" value={name} id="name" onChange={handleNameChange}  required />
        </div>
        <div className={style.formGroup} >
          <label htmlFor="email">Email : </label>
          <input type="email" name="email" value={email} id="email" onChange={handleEmailChange}  required />
        </div>
        <div className={style.formGroup} >
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" value={password} id="password" onChange={handlePasswordChange}  required />
        </div>
         <div className={style.formGroup} >
             <button type="submit">Register</button>
         </div>
      </form>
    </div>
  );
}
export default FORM;
