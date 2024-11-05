// src/tests/TaskList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';

describe('Task Management App', () => {
    test('allows user to add a new task with category and priority', () => {
        render(<TaskList />);

        const taskInput = screen.getByPlaceholderText(/Task description/i);
        const categoryInput = screen.getByPlaceholderText(/Category/i);
        const prioritySelect = screen.getByDisplayValue('Low Priority');
        const addButton = screen.getByRole('button', { name: /Add Task/i });

        fireEvent.change(taskInput, { target: { value: 'New Task' } });
        fireEvent.change(categoryInput, { target: { value: 'Work' } });
        fireEvent.change(prioritySelect, { target: { value: 'High' } });
        fireEvent.click(addButton);

        expect(screen.getByText(/New Task/i)).toBeInTheDocument();
        expect(screen.getByText(/Work/i)).toBeInTheDocument();
        expect(screen.getByText(/High/i)).toBeInTheDocument();
    });

    test('filters tasks by search term', () => {
        render(<TaskList />);

        // Add multiple tasks
        const taskInput = screen.getByPlaceholderText(/Task description/i);
        const addButton = screen.getByRole('button', { name: /Add Task/i });
        
        fireEvent.change(taskInput, { target: { value: 'First Task' } });
        fireEvent.click(addButton);

        fireEvent.change(taskInput, { target: { value: 'Second Task' } });
        fireEvent.click(addButton);

        // Search for a specific task
        const searchInput = screen.getByPlaceholderText(/Search tasks/i);
        fireEvent.change(searchInput, { target: { value: 'First' } });

        expect(screen.getByText(/First Task/i)).toBeInTheDocument();
        expect(screen.queryByText(/Second Task/i)).not.toBeInTheDocument();
    });

    test('filters tasks by category and priority', () => {
        render(<TaskList />);

        // Add multiple tasks with different categories and priorities
        const taskInput = screen.getByPlaceholderText(/Task description/i);
        const categoryInput = screen.getByPlaceholderText(/Category/i);
        const prioritySelect = screen.getByDisplayValue('Low Priority');
        const addButton = screen.getByRole('button', { name: /Add Task/i });

        fireEvent.change(taskInput, { target: { value: 'Task 1' } });
        fireEvent.change(categoryInput, { target: { value: 'Work' } });
        fireEvent.change(prioritySelect, { target: { value: 'High' } });
        fireEvent.click(addButton);

        fireEvent.change(taskInput, { target: { value: 'Task 2' } });
        fireEvent.change(categoryInput, { target: { value: 'Home' } });
        fireEvent.change(prioritySelect, { target: { value: 'Medium' } });
        fireEvent.click(addButton);

        // Filter by category "Work"
        const categoryFilter = screen.getByPlaceholderText(/Filter by category/i);
        fireEvent.change(categoryFilter, { target: { value: 'Work' } });
        
        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.queryByText(/Task 2/i)).not.toBeInTheDocument();

        // Reset category filter and filter by priority "Medium"
        fireEvent.change(categoryFilter, { target: { value: '' } });
        const priorityFilter = screen.getByDisplayValue('All Priorities');
        fireEvent.change(priorityFilter, { target: { value: 'Medium' } });
        
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
        expect(screen.queryByText(/Task 1/i)).not.toBeInTheDocument();
    });
});
