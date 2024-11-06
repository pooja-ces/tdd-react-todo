// src/tests/testUtils.ts
import { fireEvent } from '@testing-library/react';
import { Priority } from '../types/Priority';

export const addTask = (
    taskInput: HTMLElement,
    categoryInput: HTMLElement,
    prioritySelect: HTMLElement,
    addButton: HTMLElement,
    taskName: string,
    category: string,
    priority: Priority
) => {
    fireEvent.change(taskInput, { target: { value: taskName } });
    fireEvent.change(categoryInput, { target: { value: category } });
    fireEvent.change(prioritySelect, { target: { value: priority } });
    fireEvent.click(addButton);
};
