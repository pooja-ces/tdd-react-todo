// src/components/TaskList.tsx
import React, { useState } from 'react';
import './TaskList.css';

interface Task {
    id: number;
    text: string;
    category: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Low');
    const [filter, setFilter] = useState({ text: '', category: '', priority: '' });

    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObject = { id: Date.now(), text: newTask, category, priority, completed: false };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
            setCategory('');
            setPriority('Low');
        }
    };

    const toggleComplete = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const filteredTasks = tasks.filter(task => {
        const matchesText = filter.text === '' || task.text.toLowerCase().includes(filter.text.toLowerCase());
        const matchesCategory = filter.category === '' || task.category === filter.category;
        const matchesPriority = filter.priority === '' || task.priority === filter.priority;
        return matchesText && matchesCategory && matchesPriority;
    });

    return (
        <div className="container">
            <h2>Task Manager</h2>

            {/* Input Fields for Adding a Task */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Task description"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
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
                <button className="add" onClick={addTask}>Add Task</button>
            </div>

            {/* Filter Controls */}
            <div className="filter-group">
                <input
                    type="text"
                    placeholder="Search tasks"
                    value={filter.text}
                    onChange={(e) => setFilter({ ...filter, text: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Filter by category"
                    value={filter.category}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                />
                <select value={filter.priority} onChange={(e) => setFilter({ ...filter, priority: e.target.value })}>
                    <option value="">All Priorities</option>
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
            </div>

            {/* Task List Display */}
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id} className={`priority-${task.priority.toLowerCase()}`}>
                        <span className={task.completed ? 'completed' : ''}>{task.text} ({task.category}) - {task.priority}</span>
                        <button onClick={() => toggleComplete(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
