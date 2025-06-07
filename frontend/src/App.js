import React, { useEffect, useState } from "react";
import api from "./api";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    api.get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Failed to fetch todos", err));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>📝 To-Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;