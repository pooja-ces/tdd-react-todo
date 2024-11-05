// src/tests/TaskList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';

test('it allows the user to create a new task', () => {
    render(<TaskList />);

    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});

test('it allows the user to update an existing task', () => {
    render(<TaskList />);

    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(inputElement, { target: { value: 'Old Task' } });
    fireEvent.click(addButton);

    const editButton = screen.getByRole('button', { name: /Edit/i });
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue(/Old Task/i);
    fireEvent.change(editInput, { target: { value: 'Updated Task' } });

    const saveButton = screen.getByRole('button', { name: /Save/i });
    fireEvent.click(saveButton);

    expect(screen.getByText(/Updated Task/i)).toBeInTheDocument();
});

test('it allows the user to delete a task', () => {
    render(<TaskList />);

    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(inputElement, { target: { value: 'Task to be deleted' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByRole('button', { name: /Delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Task to be deleted/i)).not.toBeInTheDocument();
});
