// src/components/FilterControls.tsx
import React from 'react';
import PrioritySelect from './PrioritySelect';
import { Priority } from '../types/Priority';
import '../styles/FilterControls.css';

interface FilterControlsProps {
    search: string;
    categoryFilter: string;
    priorityFilter: Priority | '';
    onSearchChange: (text: string) => void;
    onCategoryChange: (category: string) => void;
    onPriorityChange: (priority: Priority | '') => void;
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
        {/* Use PrioritySelect as a controlled component for priority filtering */}
        <PrioritySelect
            value={priorityFilter as Priority}
            onChange={(priority) => onPriorityChange(priority)}
        />
    </div>
);

export default FilterControls;
