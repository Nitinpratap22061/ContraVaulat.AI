import React, { useState } from 'react';
import { Check, Trash2, Edit2, Save, X, Calendar, AlertCircle } from 'lucide-react';

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo || '');

  const handleSave = () => {
    if (editText && editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.todo || '');
    setIsEditing(false);
  };

  

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition)}`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition mt-1 ${
            todo.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-300 hover:border-green-500'
          }`}
        >
          {todo.completed && <Check size={16} className="text-white" />}
        </button>
        
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full px-3 py-2 border border-blue-500 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"
              autoFocus
            />
          ) : (
            <>
              <p className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                {todo.todo || 'Untitled'}
              </p>
              
              {todo.dueDate && (
                <div className={`flex items-center gap-1 mt-2 text-sm ${isOverdue ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                  {isOverdue ? <AlertCircle size={16} /> : <Calendar size={16} />}
                  <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
                </div>
              )}
              
              {todo.priority && (
                <span className={`inline-block mt-2 px-2 py-1 rounded text-xs text-white ${
                  todo.priority === 'high' ? 'bg-red-500' :
                  todo.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`}>
                  {todo.priority.toUpperCase()}
                </span>
              )}
            </>
          )}
        </div>
        
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-green-900 rounded-lg transition"
              >
                <Save size={20} />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
              >
                <X size={20} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-lg transition"
              >
                <Edit2 size={20} />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition"
              >
                <Trash2 size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};