import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../pages/Contact';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('Contact Component', () => {
    beforeEach(() => {
        // Mock window.alert
        vi.spyOn(window, 'alert').mockImplementation(() => { });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders contact form', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Additional Details/i)).toBeInTheDocument();
    });

    it('submits the form', () => {
        render(<Contact />);

        fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/WhatsApp \/ Phone/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByLabelText(/Country of Travel/i), { target: { value: 'USA' } });

        const submitButton = screen.getByRole('button', { name: /Submit Enquiry/i });
        fireEvent.click(submitButton);

        expect(window.alert).toHaveBeenCalledWith("Thank you! We have received your enquiry.");
    });
});
