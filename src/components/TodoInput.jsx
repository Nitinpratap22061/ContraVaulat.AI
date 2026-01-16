import React from 'react';
import { Plus } from 'lucide-react';

export const TodoInput = ({ value, onChange, onAdd }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && value && value.trim()) {
      onAdd();
    }
  };

  const handleClick = () => {
    if (value && value.trim()) {
      onAdd();
    }
  };

  const isDisabled = !value || !value.trim();

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add Your Own Todo.."
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          aria-label="New todo"
        />
      </div>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        className={`px-6 py-3 rounded-lg transition flex items-center gap-2 ${
          !isDisabled
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-label="Add todo"
      >
        <Plus size={20} />
        Add
      </button>
    </div>
  );
};
