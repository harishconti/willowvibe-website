import React from 'react';

interface TechStackBadgeProps {
  name: string;
  colorClass?: string; // e.g. "bg-teal-800 text-white" or "bg-gray-100 text-gray-800"
}

const TechStackBadge: React.FC<TechStackBadgeProps> = ({
  name,
  colorClass = "bg-teal-800 text-white"
}) => {
  return (
    <span className={`px-3 py-1 rounded text-sm font-medium inline-block ${colorClass}`}>
      {name}
    </span>
  );
};

export default TechStackBadge;
