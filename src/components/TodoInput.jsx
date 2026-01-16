import React from 'react';
import { Plus } from 'lucide-react';

export const TodoInput = ({ value, onChange, onAdd }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAdd();
    }
  };

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="New todo"
        />
      </div>
      <button
        onClick={onAdd}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
        aria-label="Add todo"
      >
        <Plus size={20} />
        Add
      </button>
    </div>
  );
};