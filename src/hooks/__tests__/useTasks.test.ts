// src/hooks/__tests__/useTasks.test.ts
import { TaskProvider } from '../../context/TaskContext';
import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from '../useTasks';

describe('useTasks Hook', () => {
    test('adds a task through hook', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => <TaskProvider>{children}</TaskProvider>;
        const { result } = renderHook(() => useTasks(), { wrapper });

        act(() => {
            result.current.addTask({ id: 1, text: 'Test Task', category: 'Test', priority: 'High', completed: false });
        });

        expect(result.current.tasks[0].text).toBe('Test Task');
    });
});
