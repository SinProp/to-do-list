import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    };

    setTodos([...todos, todoItem])
    setNewTodo("");
  };

  const handleTodoDelete = (deleteIndex) => {
    const filteredTodos = todos.filter((_todo, i) =>{
      return i !== deleteIndex;
    });

    setTodos(filteredTodos);
  }

const handleToggleComplete = (index) => {
  const updatedTodos = todos.map((todo, i) =>{
    if (index === i) {
      todo.complete = !todo.complete;
    }
    return todo;
  });

  setTodos(updatedTodos);
}

  return (
    
    <div style={{ marginTop: "20px", textAlign: "center"}}>
      <h1>To-Do List</h1>
      <form onSubmit={(event) => {
      handleNewTodoSubmit(event);
    }}>
        <input onChange={(event) =>{
          setNewTodo(event.target.value);
        }} 
          type="text"
          value={newTodo}
          />
          <div style={{ marginTop: "20px"}}>
            <button>Add</button>
          </div>
      </form>

<hr />

      {todos.map((todo, i) =>{
        const todoClasses = ["bold"]

        if (todo.complete) {
          todoClasses.push("strike-through");
        }
          return (
          <div key={i}>
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <input onChange={(event) => {
              handleToggleComplete(i);

            }} checked={todo.complete} type="checkbox" />
            <button onClick={(event)=>{
              handleTodoDelete(i);
            }
            }style={{marginLeft: "15px"}}>Delete</button>
          </div>
    );
})}
</div>
  );
};

export default App;
