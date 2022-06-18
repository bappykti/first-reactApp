import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("id"));
    // const {userid} = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name : name, age : age});
    }
  return (
    <div>
        <h1>User</h1>
        {/* <h1>{userid}</h1> */}
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
        <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}/> 
        <button type='submit'>
            Find User
        </button>
        </form>

              
        {/* <h1>{searchParams.get("id")}</h1>
        <h1>{searchParams.get("age")}</h1>
        <h1>{searchParams.get("name")}</h1> */}
    </div>
  )
}

export default User;