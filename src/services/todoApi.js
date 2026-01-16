const API_BASE_URL = 'https://dummyjson.com';

export const todoApi = {
  fetchTodos: async (limit = 10) => {
    try {
      // ✅ Random skip value to get different todos each time
      const skip = Math.floor(Math.random() * 100);
      const response = await fetch(`${API_BASE_URL}/todos?limit=${limit}&skip=${skip}`);
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