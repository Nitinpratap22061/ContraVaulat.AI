import React, { useState } from 'react';
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { SearchBar } from './components/SearchBar';
import { FetchControls } from './components/FetchControls';
import { Statistics } from './components/Statistics';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    allTodos,
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
  } = useTodos(10);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (addTodo(newTodo)) {
      setNewTodo('');
    }
  };

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

          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            resultsCount={todos.length}
            totalCount={allTodos.length}
          />

          <FetchControls
            limit={limit}
            onLimitChange={updateLimit}
            onRefresh={fetchTodos}
            filter={filter}
            onFilterChange={setFilter}
          />

          <Statistics todos={todos} />
        </div>

        <TodoList
          todos={todos}
          loading={loading}
          error={error}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;