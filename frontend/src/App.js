import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => setEditMode((prev) => !prev)}>
        ✏️ {editMode ? "Exit Edit Mode" : "Edit Mode"}
      </button>

      <h1>📋 To-Do List</h1>
      <TodoList editMode={editMode} />
    </div>
  );
}

export default App;