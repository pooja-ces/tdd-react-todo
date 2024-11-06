// src/components/TaskForm.tsx
import React, { useRef } from 'react';
import PrioritySelect from './PrioritySelect';
import { Priority } from '../types/Priority';
import '../styles/TaskForm.css';

interface TaskFormProps {
    onSubmit: (text: string, category: string, priority: Priority) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const categoryInputRef = useRef<HTMLInputElement>(null);
    const prioritySelectRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = textInputRef.current?.value || '';
        const category = categoryInputRef.current?.value || '';
        const priority = (prioritySelectRef.current?.value || 'Low') as Priority;

        onSubmit(text, category, priority);

        // Optionally reset the form values
        if (textInputRef.current) textInputRef.current.value = '';
        if (categoryInputRef.current) categoryInputRef.current.value = '';
        if (prioritySelectRef.current) prioritySelectRef.current.value = Priority.Low;
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task description"
                ref={textInputRef}
            />
            <input
                type="text"
                placeholder="Task Category"
                ref={categoryInputRef}
            />
            {/* Use PrioritySelect as an uncontrolled component with ref */}
            <PrioritySelect ref={prioritySelectRef} defaultValue={Priority.Low} />
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
