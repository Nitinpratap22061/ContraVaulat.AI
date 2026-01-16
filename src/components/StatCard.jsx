import React from 'react';

export const StatCard = ({ value, label, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg text-center`}>
      <div className={`text-2xl font-bold ${textColor}`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};