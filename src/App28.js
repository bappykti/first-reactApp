import React, { useState } from 'react';
import Message from './React_Memo/Message';


const App28 = () => {
    const [count, setCount] = useState(0);
    console.log("Rendering Hello world App");
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>{
            setCount((count) => count +1);
        }}>Increment</button>
        <Message numberOfMessages = {count} />
    </div>
    
  )
}

export default App28;