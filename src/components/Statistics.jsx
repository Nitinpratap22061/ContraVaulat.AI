import React from 'react';
import { StatCard } from './StatCard';
import { calculateStats } from '../utils/todoHelpers';

export const Statistics = ({ todos }) => {
  const stats = calculateStats(todos);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <StatCard 
        value={stats.total} 
        label="Total" 
        bgColor="bg-blue-50" 
        textColor="text-blue-600" 
      />
      <StatCard 
        value={stats.completed} 
        label="Completed" 
        bgColor="bg-green-50" 
        textColor="text-green-600" 
      />
      <StatCard 
        value={stats.pending} 
        label="Pending" 
        bgColor="bg-orange-50" 
        textColor="text-orange-600" 
      />
    </div>
  );
};