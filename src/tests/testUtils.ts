import { Priority } from "../types/Priority";
import { fireEvent } from "@testing-library/react";

export const addTaskHelper = (
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
export const formatPriority = (priority: Priority): string => {
  return `Priority: ${priority}`;
};

// Counts the number of completed tasks in a task array
export const countCompletedTasks = (
  tasks: { completed: boolean }[]
): number => {
  return tasks.filter((task) => task.completed).length;
};
