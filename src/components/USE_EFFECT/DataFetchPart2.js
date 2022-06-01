// fetching data using useEffect and fetch API (fake) Part 2
import React, {useState, useEffect} from 'react'

const DataFetchPart2 = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is unsuccessful")
            }else{
                return res.json();
            }
            
        })
        .then((data)=>{
            setTodos(data);
            // console.log(todos);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        });
        }, 3000)
    }, []);

    const loadingMessage = <h2 style={{textAlign :"center", color : "green"}}>Data is Loading</h2>;
  return (
    <div>
    <h1 style={{textAlign : "center"}}>Data Fetch using Fetch API Part 2 </h1>
    {error && <h4 style={{textAlign :"center", color : "red"}}>{error}</h4>}
    {isLoading && loadingMessage}
    {
        todos && todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>

        })
    }
</div>
   
  )
}

export default DataFetchPart2;