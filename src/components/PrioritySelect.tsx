// src/components/PrioritySelect.tsx
import React from 'react';
import { Priority } from '../types/Priority';
import '../styles/PrioritySelect.css';

interface PrioritySelectProps {
    value?: Priority; // Optional for controlled component usage
    defaultValue?: Priority; // Optional for uncontrolled component usage
    onChange?: (value: Priority) => void;
}

// Forward the ref to make it accessible in parent components
const PrioritySelect = React.forwardRef<HTMLSelectElement, PrioritySelectProps>(
    ({ value, defaultValue = Priority.Low, onChange }, ref) => {
        return (
            <select
                ref={ref}
                value={value} // Controlled if value is provided
                defaultValue={!value ? defaultValue : undefined} // Uncontrolled if value is not provided
                onChange={(e) => onChange && onChange(e.target.value as Priority)}
                className="priority-select"
            >
                <option value={Priority.Low}>Low Priority</option>
                <option value={Priority.Medium}>Medium Priority</option>
                <option value={Priority.High}>High Priority</option>
            </select>
        );
    }
);

PrioritySelect.displayName = 'PrioritySelect';

export default PrioritySelect;
