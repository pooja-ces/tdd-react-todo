// src/hooks/useTasks.ts
import { useTaskContext } from '../context/TaskContext';

const useTasks = () => {
    const { tasks, addTask, updateTask, deleteTask, toggleComplete } = useTaskContext();

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleComplete,
    };
};

export default useTasks;
