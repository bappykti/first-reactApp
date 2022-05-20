// using hook use state 

// built a normal number increment project using functional component

import React, { useState } from 'react';

function HooksUseState1() {
    const [count, setCount] = useState(0)
    const handelIncrement = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handelIncrement}>Increment</button>
    </div>
  )
}
export default HooksUseState1;