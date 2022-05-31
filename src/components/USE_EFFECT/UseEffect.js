// useEffect Hook
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect must have anonymous function 
  // calls for first time and depend on state count
  useEffect(()=> {
      console.log("useEffect");
  },[count]);
  const handleOnClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
        {console.log('rendering')};
      <h1>Count : {count}</h1>
      <button
        style={{ margin: "5px", padding: "5px", borderRadius: "5px" }}
        onClick={handleOnClick}
      >
        +
      </button>
      <button
        style={{ margin: "5px", padding: "5px", borderRadius: "5px" }}
        onClick={()=> {setIsLoading(!isLoading)}}
      >
        Is Loading
      </button>
    </div>
  );
};

export default UseEffect;
