import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleInputChange = (event) => {
    setTodo(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    props.onTodo(todo);
  }
  return (
    <div>
      <h1>This is new todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo : </label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
