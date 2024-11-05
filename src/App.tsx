// src/App.tsx
import React from 'react';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import './styles/TaskList.css';

const App: React.FC = () => {
    return (
        <TaskProvider>
            <TaskList />
        </TaskProvider>
    );
};

export default App;
