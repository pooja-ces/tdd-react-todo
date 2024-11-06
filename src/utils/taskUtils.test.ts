// src/utils/taskUtils.test.ts
import { formatPriority, countCompletedTasks } from '../tests/testUtils';
import { Priority } from '../types/Priority';

describe('taskUtils', () => {
    test('formatPriority correctly formats priority string', () => {
        const result = formatPriority(Priority.High);
        expect(result).toBe('Priority: High');

        const resultLow = formatPriority(Priority.Low);
        expect(resultLow).toBe('Priority: Low');
    });

    test('countCompletedTasks returns correct count of completed tasks', () => {
        const tasks = [
            { completed: true },
            { completed: false },
            { completed: true },
        ];
        const result = countCompletedTasks(tasks);
        expect(result).toBe(2);

        const noCompletedTasks = countCompletedTasks([{ completed: false }]);
        expect(noCompletedTasks).toBe(0);
    });
});
