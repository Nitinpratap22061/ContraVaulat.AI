import React from 'react';
import { RefreshCw } from 'lucide-react';

export const FetchControls = ({ limit, onLimitChange, onRefresh }) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fetch Limit: {limit} todos
        </label>
        <input
          type="range"
          min="5"
          max="50"
          step="5"
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="w-full"
          aria-label="Todo fetch limit"
        />
      </div>
      <button
        onClick={onRefresh}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition self-end flex items-center gap-2"
        aria-label="Refresh todos"
      >
        <RefreshCw size={18} />
        Refresh
      </button>
    </div>
  );
};