export const createNewTodo = (todoText) => {
  return {
    id: Date.now(),
    todo: todoText,
    completed: false,
    userId: 1
  };
};

export const calculateStats = (todos) => {
  return {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    pending: todos.filter(t => !t.completed).length
  };
};

export const validateTodoText = (text) => {
  return text && text.trim().length > 0;
};

// Existing functions ke neeche ye add karo:

export const filterTodos = (todos, searchQuery) => {
  if (!searchQuery.trim()) return todos;
  
  const query = searchQuery.toLowerCase();
  return todos.filter(todo => 
    todo.todo.toLowerCase().includes(query)
  );
};