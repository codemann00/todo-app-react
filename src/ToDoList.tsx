import React, { useState } from "react";
import Button from '@mui/material/Button';

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Drive to the supermarket", completed: false },
    { id: 2, text: "Cook Dinner", completed: true }
  ]);

  const [input, setInput] = useState<string>("");

  const handleClick = () => {
    const newTodo:item ={id:Date.now(), text: input, completed: false};
    setTodos([...todos, newTodo])
  }

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <div className="main-container">
      <h1>To-do List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add item "  onChange={(e)=> setInput(e.currentTarget.value)}/>
      <Button variant="contained" onClick={handleClick}>Add</Button>
    </div>
  );
};
