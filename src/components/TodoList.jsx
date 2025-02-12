import TodoItem from "./TodoItem";
import "../pages/App.css";

const TodoList = ({ todos, toggleComplete }) => {
  console.log("Rendering TodoList med todos:", todos);

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">You have not added any Todos yet</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleComplete={() => toggleComplete(index)}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
