import { render, screen, fireEvent } from '@testing-library/react';
import Newsletter from '../components/Newsletter';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('Newsletter Component', () => {
    beforeEach(() => {
        vi.spyOn(window, 'alert').mockImplementation(() => { });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders newsletter section', () => {
        render(<Newsletter />);
        expect(screen.getByText(/Subscribe to Our Newsletter/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Enter your email address/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument();
    });

    it('updates email input value', () => {
        render(<Newsletter />);
        const input = screen.getByPlaceholderText(/Enter your email address/i);
        fireEvent.change(input, { target: { value: 'test@example.com' } });
        expect(input.value).toBe('test@example.com');
    });

    it('submits the form and shows alert', () => {
        render(<Newsletter />);
        const input = screen.getByPlaceholderText(/Enter your email address/i);
        const button = screen.getByRole('button', { name: /Subscribe/i });

        fireEvent.change(input, { target: { value: 'test@example.com' } });
        fireEvent.click(button);

        expect(window.alert).toHaveBeenCalledWith('Thank you for subscribing with test@example.com!');
        expect(input.value).toBe('');
    });
});
