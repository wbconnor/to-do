import React, { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortMode, setSortMode] = useState("created");

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button onClick={() => setEditMode((prev) => !prev)}
          className={`px-3 py-1 border rounded-md flex items-center gap-2 ${
            editMode ? "bg-yellow-100 border-yellow-400" : "bg-gray-100 border-gray-300"
          } hover:bg-yellow-200 transition`}
        >
          ✏️ {editMode ? "Exit Edit Mode" : "Edit Mode"}
        </button>

        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="created">Date Created</option>
          <option value="incomplete">Incomplete First</option>
          <option value="completed">Completed First</option>
          <option value="alpha">A → Z</option>
        </select>
      </div>

      <h1  className="text-3xl font-bold text-blue-800 mb-4">
        📋 To-Do List
      </h1>
      <TodoList 
        editMode={editMode}
        searchText={searchText}
        sortMode={sortMode}
      />
    </div>
  );
}

export default App;