import React, { useState } from 'react'

const ToDoList = () => {
    const[todoItems, setTodoitems] = useState(["No items to do"])
     const handleInput = (e) =>{
        const value = e.target.value;
        setTodoitems(value)
        setTodoitems([...value])
     }
     const handleSubmit = (e) => {
        e.preventDefault();
        // You can add more logic here if needed
      };
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter items" onChange={handleInput}></input>
        <button type="submit">Add</button>
      </form>
      {todoItems}
    </div>
  )
}

export default ToDoList
