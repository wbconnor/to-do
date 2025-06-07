import { useState, useEffect } from "react";
import api from "../api";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos", err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (data) => {
    try {
      const res = await api.post("/todos", data);
      setTodos((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error creating todo", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  const editTodo = async (id, data) => {
    try {
      const res = await api.put(`/todos/${id}`, data);
  
      // Update the local state with the updated todo
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? res.data : t))
      );
    } catch (err) {
      console.error("Error updating todo", err);
    }
  };

  const toggleTodoCompletion = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const updated = { ...todo, completed: !todo.completed };
      await api.put(`/todos/${id}`, updated);
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? updated : t))
      );
    } catch (err) {
      console.error("Error updating todo", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    deleteTodo,
    editTodo,
    toggleTodoCompletion,
    refetch: fetchTodos,
    addTodo
  };
}

export default useTodos;
