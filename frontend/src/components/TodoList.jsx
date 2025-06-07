import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList({ editMode }) {
  const {
    todos,
    loading,
    deleteTodo,
    toggleTodoCompletion,
    editTodo,
    addTodo
  } = useTodos();
  const [newTitle, setNewTitle] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {editMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (newTitle.trim()) {
              addTodo({ title: newTitle.trim(), description: "" });
              setNewTitle("");
            }
          }}
          style={{ marginBottom: "1rem" }}
        >
          <input
            type="text"
            placeholder="New todo title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button type="submit">➕ Add</button>
        </form>
      )}
  
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editMode={editMode}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleTodoCompletion={toggleTodoCompletion}
            addTodo={addTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;