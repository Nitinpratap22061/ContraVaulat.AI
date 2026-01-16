
import React from 'react';

export const PrioritySelector = ({ value, onChange }) => {
  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-green-500' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
    { value: 'high', label: 'High', color: 'bg-red-500' }
  ];

  return (
    <div className="flex gap-2">
      {priorities.map((priority) => (
        <button
          key={priority.value}
          onClick={() => onChange(priority.value)}
          className={`px-3 py-1 rounded text-xs font-medium text-white transition ${
            value === priority.value ? priority.color : 'bg-gray-300'
          }`}
        >
          {priority.label}
        </button>
      ))}
    </div>
  );
};