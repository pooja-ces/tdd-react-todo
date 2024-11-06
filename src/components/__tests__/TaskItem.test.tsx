// src/components/__tests__/TaskItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';

describe('TaskItem Component', () => {
    const mockTask = { id: 1, text: 'Test Task', category: 'Work', priority: 'High', completed: false };
    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const onToggleComplete = jest.fn();

    test('displays task data and handles actions', () => {
        render(<TaskItem task={mockTask} onEdit={onEdit} onDelete={onDelete} onToggleComplete={onToggleComplete} />);

        expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
        fireEvent.click(screen.getByText('Complete'));
        fireEvent.click(screen.getByText('Edit'));
        fireEvent.click(screen.getByText('Delete'));

        expect(onToggleComplete).toHaveBeenCalled();
        expect(onEdit).toHaveBeenCalled();
        expect(onDelete).toHaveBeenCalled();
    });
});
