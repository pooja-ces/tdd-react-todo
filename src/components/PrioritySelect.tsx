// src/components/PrioritySelect.tsx
import React from 'react';
import { Priority } from '../types/Priority';
import '../styles/PrioritySelect.css';

interface PrioritySelectProps {
    value: Priority;
    onChange: (value: Priority) => void;
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ value, onChange }) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as Priority)}
            className="priority-select"
        >
            <option value={Priority.Low}>Low Priority</option>
            <option value={Priority.Medium}>Medium Priority</option>
            <option value={Priority.High}>High Priority</option>
        </select>
    );
};

export default PrioritySelect;
