
import React from 'react';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition z-50"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="text-yellow-500" size={24} />
      ) : (
        <Moon className="text-gray-700" size={24} />
      )}
    </button>
  );
};