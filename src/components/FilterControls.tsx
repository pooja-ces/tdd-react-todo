// src/components/FilterControls.tsx
import React from 'react';
import "../styles/FilterControls.css"

interface FilterControlsProps {
    search: string;
    categoryFilter: string;
    priorityFilter: string;
    onSearchChange: (text: string) => void;
    onCategoryChange: (category: string) => void;
    onPriorityChange: (priority: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
    search,
    categoryFilter,
    priorityFilter,
    onSearchChange,
    onCategoryChange,
    onPriorityChange,
}) => (
    <div className="filter-controls">
        <input
            type="text"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
        />
        <input
            type="text"
            placeholder="Filter by category"
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
        />
        <select value={priorityFilter} onChange={(e) => onPriorityChange(e.target.value)}>
            <option value="">All Priorities</option>
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
        </select>
    </div>
);

export default FilterControls;
