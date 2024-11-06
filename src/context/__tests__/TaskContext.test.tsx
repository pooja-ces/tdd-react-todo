import { render, screen } from '@testing-library/react';
import { TaskProvider, useTaskContext } from '../TaskContext';
import { Priority } from '../../types/Priority';

const TestComponent = () => {
    const { tasks, addTask, deleteTask } = useTaskContext();
    return (
        <div>
            <button onClick={() => addTask({ id: 1, text: 'Test Task', category: 'Test', priority:Priority.Low, completed: false })}>Add Task</button>
            <button onClick={() => deleteTask(1)}>Delete Task</button>
            {tasks.map((task) => (
                <div key={task.id}>{task.text}</div>
            ))}
        </div>
    );
};

describe('TaskContext', () => {
    test('adds and deletes tasks', () => {
        render(
            <TaskProvider>
                <TestComponent />
            </TaskProvider>
        );

        screen.getByText('Add Task').click();
        expect(screen.getByText('Test Task')).toBeInTheDocument();

        screen.getByText('Delete Task').click();
        expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
    });
});
