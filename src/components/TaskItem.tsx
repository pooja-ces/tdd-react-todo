// src/components/TaskItem.tsx
import React from 'react';
import "../styles/TaskItem.css";
import { Priority } from '../types/Priority';
import '../styles/TaskItem.css';
interface TaskItemProps {
    task: {
        id: number;
        text: string;
        category: string;
        priority: Priority; // Updated to use the Priority enum
        completed: boolean;
    };
    onEdit: () => void;
    onDelete: () => void;
    onToggleComplete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onToggleComplete }) => (
    <li className={`task-item priority-${task.priority.toLowerCase()}`}>
        <span className={task.completed ? 'completed' : ''}>
            {task.text} ({task.category}) - {task.priority}
        </span>
        <button onClick={onToggleComplete}>{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </li>
);

export default TaskItem;
