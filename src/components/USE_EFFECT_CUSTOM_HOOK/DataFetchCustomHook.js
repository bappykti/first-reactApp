// fetching data using custom Hook for different API 

import React, {useState, useEffect} from 'react';
import CustomHook from './CustomHook';

const DataFetchCustomHook = () => {
   const {data, isLoading, error} = CustomHook("https://jsonplaceholder.typicode.com/todos")


    const loadingMessage = <h2 style={{textAlign :"center", color : "green"}}>Data is Loading</h2>;
  return (
    <div>
        <h1 style={{textAlign : "center"}}>Fetching data using custom Hook for different API </h1>
        {error && <h4 style={{textAlign :"center", color : "red"}}>{error}</h4>}
    {isLoading && loadingMessage}
    {
        data && data.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>

        })
    }
    </div>
  )
}
export default DataFetchCustomHook;
