// src/components/TaskList.tsx
import React, { useState } from 'react';
import useTasks from '../hooks/useTasks';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import FilterControls from './FilterControls';
import "../styles/TaskList.css"
import { Priority } from '../types/Priority';

const TaskList: React.FC = () => {
    const { tasks, addTask, updateTask, deleteTask, toggleComplete } = useTasks();
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.text.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter === '' || task.category === categoryFilter;
        const matchesPriority = priorityFilter === '' || task.priority === priorityFilter;
        return matchesSearch && matchesCategory && matchesPriority;
    });

    const handleAddTask = (text: string, category: string, priority: Priority) => {
        addTask({ id: Date.now(), text, category, priority, completed: false });
    };

    return (
        <div className="container">
            <h2>Task Manager</h2>
            <TaskForm onSubmit={handleAddTask} />
            <FilterControls
                search={search}
                categoryFilter={categoryFilter}
                priorityFilter={priorityFilter}
                onSearchChange={setSearch}
                onCategoryChange={setCategoryFilter}
                onPriorityChange={setPriorityFilter}
            />
            <ul>
                {filteredTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onEdit={() => updateTask(task.id, { text: 'Updated Task' })}
                        onDelete={() => deleteTask(task.id)}
                        onToggleComplete={() => toggleComplete(task.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
