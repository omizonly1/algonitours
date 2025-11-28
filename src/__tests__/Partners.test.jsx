import { render, screen } from '@testing-library/react';
import Partners from '../components/Partners';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
}));

describe('Partners Component', () => {
    it('renders partners section', () => {
        render(<Partners />);
        expect(screen.getByText(/Trusted Partners/i)).toBeInTheDocument();
    });

    it('renders partner logos', () => {
        render(<Partners />);
        // Since the partners array is tripled in the component, we expect multiple instances
        const emiratesLogos = screen.getAllByAltText('Emirates');
        expect(emiratesLogos.length).toBeGreaterThan(0);

        const saudiaLogos = screen.getAllByAltText('Saudia');
        expect(saudiaLogos.length).toBeGreaterThan(0);
    });
});
