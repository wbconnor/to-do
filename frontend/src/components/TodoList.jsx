import React from "react";
import useTodos from "../hooks/useTodos";

function TodoList() {
  const { todos, loading, deleteTodo, toggleTodoCompletion } = useTodos();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo.id)}
          />
          <strong style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.title}
          </strong>
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;