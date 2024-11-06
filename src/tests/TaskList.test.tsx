// src/tests/TaskList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from '../components/TaskList';
import { faker } from '@faker-js/faker';

describe('Task Management App', () => {
    test('allows user to add a new task with category and priority', () => {
        render(<TaskList />);
    
        // Generate random values for the test
        const randomTaskDescription = faker.lorem.sentence();
        const randomCategory = faker.commerce.department();
        const randomPriority = 'High'; // Priority is limited to High, Medium, or Low
    
        // Locate form elements
        const taskInput = screen.getByPlaceholderText('Task description');
        const categoryInput = screen.getByPlaceholderText('Task Category');
        const prioritySelect = screen.getByDisplayValue('Low Priority');
        const addButton = screen.getByRole('button', { name: 'Save Task' });
    
        // Fill out and submit the form with random values
        fireEvent.change(taskInput, { target: { value: randomTaskDescription } });
        fireEvent.change(categoryInput, { target: { value: randomCategory } });
        fireEvent.change(prioritySelect, { target: { value: randomPriority } });
        fireEvent.click(addButton);
    
        // Verify the added task with exact matching
        expect(screen.getByText(randomTaskDescription)).toBeInTheDocument();
        expect(screen.getByText(randomCategory)).toBeInTheDocument();
        expect(screen.getByText('Priority: High')).toBeInTheDocument(); // Static priority check
    });

    test('filters tasks by search term', () => {
        render(<TaskList />);

        const taskInput = screen.getByPlaceholderText(/Task description/i);
        const addButton = screen.getByRole('button', { name: /Add Task/i });
        
        fireEvent.change(taskInput, { target: { value: 'First Task' } });
        fireEvent.click(addButton);

        fireEvent.change(taskInput, { target: { value: 'Second Task' } });
        fireEvent.click(addButton);

        const searchInput = screen.getByPlaceholderText(/Search tasks/i);
        fireEvent.change(searchInput, { target: { value: 'First' } });

        expect(screen.getByText(/First Task/i)).toBeInTheDocument();
        expect(screen.queryByText(/Second Task/i)).not.toBeInTheDocument();
    });

    test('filters tasks by category and priority', () => {
        render(<TaskList />);

        const taskInput = screen.getByPlaceholderText(/Task description/i);
        const addCategoryInput = screen.getByPlaceholderText(/Task Category/i); // Use new placeholder
        const prioritySelect = screen.getByDisplayValue('Low Priority');
        const addButton = screen.getByRole('button', { name: /Add Task/i });

        fireEvent.change(taskInput, { target: { value: 'Task 1' } });
        fireEvent.change(addCategoryInput, { target: { value: 'Work' } });
        fireEvent.change(prioritySelect, { target: { value: 'High' } });
        fireEvent.click(addButton);

        fireEvent.change(taskInput, { target: { value: 'Task 2' } });
        fireEvent.change(addCategoryInput, { target: { value: 'Home' } });
        fireEvent.change(prioritySelect, { target: { value: 'Medium' } });
        fireEvent.click(addButton);

        const filterCategoryInput = screen.getByPlaceholderText(/Filter by Category/i); // Use new placeholder
        fireEvent.change(filterCategoryInput, { target: { value: 'Work' } });
        
        expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
        expect(screen.queryByText(/Task 2/i)).not.toBeInTheDocument();

        fireEvent.change(filterCategoryInput, { target: { value: '' } });
        const priorityFilter = screen.getByDisplayValue('All Priorities');
        fireEvent.change(priorityFilter, { target: { value: 'Medium' } });
        
        expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
        expect(screen.queryByText(/Task 1/i)).not.toBeInTheDocument();
    });
});
