import React from 'react';

export default function TechBadge({ name, size = 'sm', className = '' }) {
  const sizeClasses = {
    xs: 'text-[11px]',
    sm: 'text-xs',
    md: 'text-sm',
  };

  return (
    <span className={`${sizeClasses[size] || sizeClasses.sm} text-muted ${className}`}>
      {name}
    </span>
  );
}
