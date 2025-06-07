import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList({ editMode, searchText, sortMode }) {
  const {
    todos,
    loading,
    deleteTodo,
    toggleTodoCompletion,
    editTodo,
    addTodo,
  } = useTodos();
  
  const [newTitle, setNewTitle] = useState("");
  
  const filteredAndSortedTodos = todos
  .filter((t) =>
    t.title.toLowerCase().includes(searchText.toLowerCase()) ||
  (t.description && t.description.toLowerCase().includes(searchText.toLowerCase()))
)
.sort((a, b) => {
  switch (sortMode) {
    case "incomplete":
    return a.completed - b.completed;
    case "completed":
    return b.completed - a.completed;
    case "alpha":
    return a.title.localeCompare(b.title);
    case "created":
    default:
    return new Date(a.created_at) - new Date(b.created_at);
  }
});

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
  {filteredAndSortedTodos.map((todo) => (
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