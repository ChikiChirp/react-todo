import React, { useState } from "react";
import "../pages/App.css";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add your Todos here..."
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
