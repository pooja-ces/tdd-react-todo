// src/components/__tests__/TaskForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../TaskForm';

describe('TaskForm Component', () => {
    test('submits form with task data', () => {
        const handleSubmit = jest.fn();
        render(<TaskForm onSubmit={handleSubmit} />);

        fireEvent.change(screen.getByPlaceholderText(/Task description/i), { target: { value: 'New Task' } });
        fireEvent.change(screen.getByPlaceholderText(/Category/i), { target: { value: 'Work' } });
        fireEvent.change(screen.getByDisplayValue('Low Priority'), { target: { value: 'High' } });
        fireEvent.click(screen.getByText('Save Task'));

        expect(handleSubmit).toHaveBeenCalledWith('New Task', 'Work', 'High');
    });
});
