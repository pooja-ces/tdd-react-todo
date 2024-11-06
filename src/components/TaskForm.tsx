// src/components/TaskForm.tsx
import React, { useState } from 'react';
import PrioritySelect from './PrioritySelect';
import { Priority } from '../types/Priority';
import '../styles/TaskForm.css';

interface TaskFormProps {
    onSubmit: (text: string, category: string, priority: Priority) => void;
    initialValues?: { text: string; category: string; priority: Priority };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialValues }) => {
    const [text, setText] = useState(initialValues?.text || '');
    const [category, setCategory] = useState(initialValues?.category || '');
    const [priority, setPriority] = useState<Priority>(initialValues?.priority || Priority.Low);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(text, category, priority);
        setText('');
        setCategory('');
        setPriority(Priority.Low);
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task description"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {/* Use PrioritySelect component */}
            <PrioritySelect value={priority} onChange={setPriority} />
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
