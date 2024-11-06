// src/components/__tests__/FilterControls.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterControls from '../FilterControls';

describe('FilterControls Component', () => {
    const mockHandlers = {
        onSearchChange: jest.fn(),
        onCategoryChange: jest.fn(),
        onPriorityChange: jest.fn(),
    };

    test('handles search and filter changes', () => {
        render(
            <FilterControls
                search=""
                categoryFilter=""
                priorityFilter=""
                {...mockHandlers}
            />
        );

        fireEvent.change(screen.getByPlaceholderText(/Search tasks/i), { target: { value: 'search' } });
        fireEvent.change(screen.getByPlaceholderText(/Filter by category/i), { target: { value: 'Work' } });
        fireEvent.change(screen.getByDisplayValue('All Priorities'), { target: { value: 'High' } });

        expect(mockHandlers.onSearchChange).toHaveBeenCalledWith('search');
        expect(mockHandlers.onCategoryChange).toHaveBeenCalledWith('Work');
        expect(mockHandlers.onPriorityChange).toHaveBeenCalledWith('High');
    });
});
