import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortMode, setSortMode] = useState("created");

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => setEditMode((prev) => !prev)}>
        ✏️ {editMode ? "Exit Edit Mode" : "Edit Mode"}
      </button>

      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        value={sortMode}
        onChange={(e) => setSortMode(e.target.value)}
      >
        <option value="created">Date Created</option>
        <option value="incomplete">Incomplete First</option>
        <option value="completed">Completed First</option>
        <option value="alpha">A → Z</option>
      </select>

      <h1>📋 To-Do List</h1>
      <TodoList 
        editMode={editMode}
        searchText={searchText}
        sortMode={sortMode}
      />
    </div>
  );
}

export default App;