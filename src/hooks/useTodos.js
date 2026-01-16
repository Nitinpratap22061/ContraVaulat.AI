import { useState, useEffect } from 'react';
import { todoApi } from '../services/todoApi';
import { createNewTodo } from '../utils/todoHelpers';

export const useTodos = (initialLimit = 10) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(initialLimit);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedTodos = await todoApi.fetchTodos(limit);
      setTodos(fetchedTodos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = (todoData) => {
    if (todoData.text.trim()) {
      const newTodo = {
        id: Date.now(),
        todo: todoData.text,
        completed: false,
        userId: 1,
        priority: todoData.priority || 'medium',
        dueDate: todoData.dueDate || null
      };
      setTodos([newTodo, ...todos]);
      return true;
    }
    return false;
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, todo: newText } : todo
    ));
  };

  const updateLimit = (newLimit) => {
    setLimit(newLimit);
  };

  // Filtered todos based on filter and search
  const getFilteredTodos = () => {
    let filtered = todos;

    // Apply filter
    if (filter === 'active') {
      filtered = filtered.filter(t => !t.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(t => t.completed);
    }

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(t =>
        t.todo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  useEffect(() => {
    fetchTodos();
  }, [limit]);

  return {
    todos: getFilteredTodos(),
    allTodos: todos,
    loading,
    error,
    limit,
    filter,
    searchQuery,
    isDarkMode,
    updateLimit,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    setSearchQuery,
    toggleDarkMode
  };
};