import React from "react";
import useTodos from "../hooks/useTodos";

function TodoList({ editMode }) {
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
  
            {editMode ? (
              <input defaultValue={todo.title} />
            ) : (
              <strong style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </strong>
            )}
  
            {editMode && (
              <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
            )}
          </li>
        ))}
      </ul>
    );
  }

export default TodoList;