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
    <li className="flex items-center gap-2 py-2 border-b border-gray-100">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.id)}
        className="h-4 w-4"
      />

      {editMode ? (
        <input
          type="text"
          value={title}
          onChange={handleChange}
          className="flex-grow border border-gray-300 rounded px-2 py-1"
        />
      ) : (
        <span
          className={`flex-grow ${todo.completed ? "line-through text-gray-400" : ""}`}
        >
          {todo.title}
        </span>
      )}

      {editMode && (
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      )}
    </li>
  );
}

export default TodoItem;