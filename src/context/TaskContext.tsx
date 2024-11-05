// src/context/TaskContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
    id: number;
    text: string;
    category: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;
}

interface TaskContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: number, updatedTask: Partial<Task>) => void;
    deleteTask: (id: number) => void;
    toggleComplete: (id: number) => void;
}

// Add type for children as ReactNode
interface TaskProviderProps {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => setTasks([...tasks, task]);
    const updateTask = (id: number, updatedTask: Partial<Task>) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
    };
    const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id));
    const toggleComplete = (id: number) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};
