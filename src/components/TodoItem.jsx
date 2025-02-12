import "../pages/App.css";

const TodoItem = ({ todo, toggleComplete }) => {
  if (!todo) return null;

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <button className="complete-btn" onClick={toggleComplete}>
        {todo.completed ? "✓" : "○"}
      </button>
    </li>
  );
};

export default TodoItem;
