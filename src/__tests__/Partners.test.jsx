import { render, screen, fireEvent } from '@testing-library/react';
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

    it('renders all partner logos', () => {
        render(<Partners />);
        const partners = ['Emirates', 'Saudia', 'Qatar Airways', 'Hilton', 'Marriott', 'IndiGo'];

        partners.forEach(partner => {
            const logos = screen.getAllByAltText(partner);
            // The list is tripled, so we expect at least 3 of each
            expect(logos.length).toBeGreaterThanOrEqual(3);
        });
    });

    it('applies hover effects to partner logos', () => {
        render(<Partners />);
        const logo = screen.getAllByAltText('Emirates')[0];

        // Initial state (grayscale and opacity) - checking style directly might be tricky if not set explicitly in JS initially, 
        // but the component sets it in the parent div or img. 
        // Looking at component: img has onMouseEnter/Leave. Parent div has filter/opacity.
        // Wait, the component code shows:
        // <div ... filter: 'grayscale(100%)', opacity: 0.7 ...>
        //    <img ... onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; ... }} ... />
        // </div>
        // Actually, the onMouseEnter is on the IMG, but it sets style on e.currentTarget (the img).
        // BUT the initial filter/opacity is on the PARENT div.
        // Let's re-read the component code carefully.

        // Line 26: <div ... style={{ ... filter: 'grayscale(100%)', opacity: 0.7 ... }}>
        // Line 27: <img ... onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; ... }} ... />

        // This looks like a bug or at least confusing implementation in the component. 
        // The parent div has the initial grayscale. The img hover changes the IMG's style.
        // If the parent is grayscale, the child img being non-grayscale might not work as expected depending on stacking, 
        // but usually filter on parent applies to children.
        // However, for the purpose of testing *what the code does*:

        // We can test that the event handlers fire and update the element's style.

        fireEvent.mouseEnter(logo);
        expect(logo.style.filter).toBe('grayscale(0%)');
        expect(logo.style.opacity).toBe('1');

        fireEvent.mouseLeave(logo);
        expect(logo.style.filter).toBe('grayscale(100%)');
        expect(logo.style.opacity).toBe('0.7');
    });
});
