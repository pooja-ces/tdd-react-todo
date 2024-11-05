// src/components/TaskForm.tsx
import React, { useState } from 'react';
import "../styles/TaskForm.css"
interface TaskFormProps {
    onSubmit: (text: string, category: string, priority: 'High' | 'Medium' | 'Low') => void;
    initialValues?: { text: string; category: string; priority: 'High' | 'Medium' | 'Low' };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialValues }) => {
    const [text, setText] = useState(initialValues?.text || '');
    const [category, setCategory] = useState(initialValues?.category || '');
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>(initialValues?.priority || 'Low');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(text, category, priority);
        setText('');
        setCategory('');
        setPriority('Low');
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
            <select value={priority} onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}>
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
            </select>
            <button type="submit">Save Task</button>
        </form>
    );
};

export default TaskForm;
