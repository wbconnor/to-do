import React, { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";

function TodoItem({ todo, editTodo, deleteTodo, toggleTodoCompletion, editMode }) {
  const [title, setTitle] = useState(todo.title);

  // Debounced update
  const debouncedEdit = useMemo(
    () => debounce((newTitle) => {
      editTodo(todo.id, { title: newTitle });
    }, 500),
    [todo.id, editTodo]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      debouncedEdit.cancel();
    };
  }, [debouncedEdit]);

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedEdit(newTitle);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.id)}
      />

      {editMode ? (
        <input
          type="text"
          value={title}
          onChange={handleChange}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        />
      ) : (
        <strong style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </strong>
      )}

      {editMode && (
        <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
      )}
    </li>
  );
}

export default TodoItem;