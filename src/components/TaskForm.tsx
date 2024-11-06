// src/components/TaskForm.tsx
import React, { useState } from 'react';
import "../styles/TaskForm.css";
import { Priority } from '../types/Priority'; // Import the Priority enum

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
            <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
                <option value={Priority.Low}>Low Priority</option>
                <option value={Priority.Medium}>Medium Priority</option>
                <option value={Priority.High}>High Priority</option>
            </select>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
