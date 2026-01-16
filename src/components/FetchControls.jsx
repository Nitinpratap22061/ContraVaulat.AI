import React from 'react';
import { RefreshCw } from 'lucide-react';

export const FetchControls = ({ limit, onLimitChange, onRefresh, filter, onFilterChange }) => {
  return (
    <div className="mb-6">
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fetch Limit: {limit} todos
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={limit}
            onChange={(e) => onLimitChange(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition self-end flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-lg transition ${
            filter === 'all' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`px-4 py-2 rounded-lg transition ${
            filter === 'active' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-4 py-2 rounded-lg transition ${
            filter === 'completed' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};