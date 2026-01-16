const API_BASE_URL = 'https://dummyjson.com';

export const todoApi = {
  // Fetch todos from API
  fetchTodos: async (limit = 10) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      return data.todos;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  }
};
