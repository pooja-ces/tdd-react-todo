// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Task Manager heading', () => {
    render(<App />);
    const heading = screen.getByText(/Task Manager/i);
    expect(heading).toBeInTheDocument();
});
