import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import "./App.css";

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const allTodosCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />

      {allTodosCompleted && (
        <>
          <div className="completion-message">
            🎉 Congratulations! You have Completed all Todos! 🎉
          </div>

          <div className="confetti-container">
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className="confetti"></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
