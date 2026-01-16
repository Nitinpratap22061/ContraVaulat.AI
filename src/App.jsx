import React, { useState, useMemo } from 'react'; // useMemo add karo
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { SearchBar } from './components/SearchBar'; // ⭐ NEW IMPORT
import { FetchControls } from './components/FetchControls';
import { Statistics } from './components/Statistics';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { filterTodos } from './utils/todoHelpers'; // ⭐ NEW IMPORT

function App() {
  const {
    todos,
    loading,
    error,
    limit,
    updateLimit,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo
  } = useTodos(10);

  const [newTodo, setNewTodo] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // ⭐ NEW STATE

  const handleAddTodo = () => {
    if (addTodo(newTodo)) {
      setNewTodo('');
    }
  };

  // ⭐ NEW: Filter todos based on search
  const filteredTodos = useMemo(() => 
    filterTodos(todos, searchQuery), 
    [todos, searchQuery]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <Header />
          
          <TodoInput
            value={newTodo}
            onChange={setNewTodo}
            onAdd={handleAddTodo}
          />

          {/* ⭐ NEW: SearchBar Component */}
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            resultsCount={filteredTodos.length}
          />

          <FetchControls
            limit={limit}
            onLimitChange={updateLimit}
            onRefresh={fetchTodos}
          />

          {/* CHANGE: todos -> filteredTodos */}
          <Statistics todos={filteredTodos} />
        </div>

        {/* CHANGE: todos -> filteredTodos */}
        <TodoList
          todos={filteredTodos}
          loading={loading}
          error={error}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;