import React from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList({ editMode }) {
  const {
    todos,
    loading,
    deleteTodo,
    toggleTodoCompletion,
    editTodo
  } = useTodos();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editMode={editMode}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;