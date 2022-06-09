// prop drilling
import React, { useState } from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({id : 101, name : "Kazi Tanvirul ISlam" })
    const [text, setText] = useState("Hello! I am good enough are you too ?")
  return (
    <UserContext.Provider value={{user, text}}>
        <Component2 />
    </UserContext.Provider>
  )
}

export default Component1;