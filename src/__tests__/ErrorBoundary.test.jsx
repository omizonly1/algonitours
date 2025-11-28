import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, it, expect, vi } from 'vitest';

// Component that throws an error
const ThrowError = () => {
    throw new Error('Test Error');
};

describe('ErrorBoundary Component', () => {
    it('renders children when no error occurs', () => {
        render(
            <ErrorBoundary>
                <div>Safe Content</div>
            </ErrorBoundary>
        );
        expect(screen.getByText('Safe Content')).toBeInTheDocument();
    });

    it('renders error message when an error occurs', () => {
        // Prevent console.error from cluttering the test output
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });

        render(
            <ErrorBoundary>
                <ThrowError />
            </ErrorBoundary>
        );

        expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
        expect(screen.getByText(/Test Error/)).toBeInTheDocument();

        consoleSpy.mockRestore();
    });
});
