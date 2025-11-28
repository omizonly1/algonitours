import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from '../pages/Services';
import { describe, it, expect } from 'vitest';

describe('Services Page', () => {
    it('renders services page content', () => {
        render(
            <BrowserRouter>
                <Services />
            </BrowserRouter>
        );

        expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
        expect(screen.getByText(/Comprehensive travel solutions/i)).toBeInTheDocument();
    });

    it('renders all service cards with hover effects', () => {
        render(
            <BrowserRouter>
                <Services />
            </BrowserRouter>
        );

        // There are 6 services
        for (let i = 0; i < 6; i++) {
            const card = screen.getByTestId(`service-card-${i}`);
            expect(card).toBeInTheDocument();

            // Test hover
            fireEvent.mouseEnter(card);
            expect(card).toHaveStyle({ transform: 'translateY(-5px)' });

            fireEvent.mouseLeave(card);
            expect(card).toHaveStyle({ transform: 'translateY(0)' });
        }
    });
});
