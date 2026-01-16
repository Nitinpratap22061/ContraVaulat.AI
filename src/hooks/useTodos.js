
import { useState, useEffect, useRef } from 'react';
import { todoApi } from '../services/todoApi';

export const useTodos = (initialLimit = 10) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(initialLimit);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const fetchTimeoutRef = useRef(null);

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

  const addTodo = (todoText) => {
    if (!todoText || typeof todoText !== 'string') {
      return false;
    }
    
    const trimmedText = todoText.trim();
    if (!trimmedText) {
      return false;
    }
    
    const newTodo = {
      id: Date.now(),
      todo: trimmedText,
      completed: false,
      userId: 1
    };
    
    setTodos([newTodo, ...todos]);
    return true;
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
    if (newText.trim()) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, todo: newText.trim() } : todo
      ));
      return true;
    }
    return false;
  };

  const updateLimit = (newLimit) => {
    setLimit(newLimit);
  };

  // Filtered todos based on filter and search
  const getFilteredTodos = () => {
    let filtered = todos;

    if (filter === 'active') {
      filtered = filtered.filter(t => !t.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter(t => t.completed);
    }

    if (searchQuery) {
      filtered = filtered.filter(t =>
        t.todo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  // ✅ Debounced fetch - Wait 500ms after slider stops moving
  useEffect(() => {
    if (fetchTimeoutRef.current) {
      clearTimeout(fetchTimeoutRef.current);
    }

    fetchTimeoutRef.current = setTimeout(() => {
      fetchTodos();
    }, 500);

    return () => {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, [limit]);

  return {
    todos: getFilteredTodos(),
    allTodos: todos,
    loading,
    error,
    limit,
    filter,
    searchQuery,
    updateLimit,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    setSearchQuery
  };
};