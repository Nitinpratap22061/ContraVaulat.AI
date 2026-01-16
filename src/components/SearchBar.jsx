import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ value, onChange, resultsCount }) => (
  <div className="mb-6">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search todos..."
        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      )}
    </div>
    {value && (
      <p className="mt-2 text-sm text-gray-600">
        Found {resultsCount} result{resultsCount !== 1 ? 's' : ''}
      </p>
    )}
  </div>
);