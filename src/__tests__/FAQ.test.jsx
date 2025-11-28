import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../components/FAQ';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('FAQ Component', () => {
    it('renders FAQ section', () => {
        render(<FAQ />);
        expect(screen.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeInTheDocument();
        expect(screen.getByText(/What documents are required for Umrah visa\?/i)).toBeInTheDocument();
    });

    it('toggles FAQ answer on click', () => {
        render(<FAQ />);

        const question = screen.getByText(/What documents are required for Umrah visa\?/i);
        const answerText = /For an Umrah visa, you typically need a valid passport/i;

        expect(screen.queryByText(answerText)).not.toBeInTheDocument();

        // Click to expand
        fireEvent.click(question);
        expect(screen.getByText(answerText)).toBeInTheDocument();

        // Click to collapse
        fireEvent.click(question);
        expect(screen.queryByText(answerText)).not.toBeInTheDocument();
    });
});
