import React from 'react';

export const FilterTabs = ({ activeFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-lg capitalize font-medium transition ${
            activeFilter === filter
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};