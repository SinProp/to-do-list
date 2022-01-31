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
    <div style={{ textAlign: "center"}}>
      <form onSubmit={(event) => {
      handleNewTodoSubmit(event);
    }}>
        <input onChange={(event) =>{
          setNewTodo(event.target.value);
        }} 
          type="text"
          value={newTodo}
          />
          <div>
            <button>Add</button>
          </div>
      </form>

<hr />

      {todos.map((todo, i) =>{
          return (
          <div key={i}>
            <span>{todo.text}</span>
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
