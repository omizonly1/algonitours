import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { PackageProvider } from '../context/PackageContext';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        section: ({ children, ...props }) => <section {...props}>{children}</section>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}));

describe('Home Page', () => {
    it('renders all major sections', () => {
        render(
            <BrowserRouter>
                <PackageProvider>
                    <Home />
                </PackageProvider>
            </BrowserRouter>
        );

        // Hero
        expect(screen.getByText(/Discover the World with/i)).toBeInTheDocument();

        // Services
        expect(screen.getByText(/Our Premium Services/i)).toBeInTheDocument();
        expect(screen.getByText(/Hajj & Umrah/i)).toBeInTheDocument();
        expect(screen.getByText(/Flight Booking/i)).toBeInTheDocument();
        expect(screen.getByText(/Visa Assistance/i)).toBeInTheDocument();

        // Why Choose Us
        expect(screen.getByText(/Why Choose/i)).toBeInTheDocument();
        expect(screen.getByText(/Trusted & Reliable Service/i)).toBeInTheDocument();

        // CTA
        expect(screen.getByText(/Ready to Start Your Journey\?/i)).toBeInTheDocument();
    });

    it('renders service cards with correct links and hover effects', () => {
        render(
            <BrowserRouter>
                <PackageProvider>
                    <Home />
                </PackageProvider>
            </BrowserRouter>
        );

        const hajjLink = screen.getByRole('link', { name: /Hajj & Umrah/i });
        expect(hajjLink).toHaveAttribute('href', '/hajj-umrah');

        const flightLink = screen.getByRole('link', { name: /Flight Booking/i });
        expect(flightLink).toHaveAttribute('href', '/flight-booking');

        // Test hover effects using data-testid

        // Hajj Card
        const hajjCard = screen.getByTestId('service-card-hajj');
        expect(hajjCard).toBeInTheDocument();
        fireEvent.mouseEnter(hajjCard);
        expect(hajjCard).toHaveStyle({ transform: 'translateY(-5px)' });
        fireEvent.mouseLeave(hajjCard);
        expect(hajjCard).toHaveStyle({ transform: 'translateY(0)' });

        // Flight Card
        const flightCard = screen.getByTestId('service-card-flight');
        expect(flightCard).toBeInTheDocument();
        fireEvent.mouseEnter(flightCard);
        expect(flightCard).toHaveStyle({ transform: 'translateY(-5px)' });
        fireEvent.mouseLeave(flightCard);
        expect(flightCard).toHaveStyle({ transform: 'translateY(0)' });

        // Visa Card
        const visaCard = screen.getByTestId('service-card-visa');
        expect(visaCard).toBeInTheDocument();
        fireEvent.mouseEnter(visaCard);
        expect(visaCard).toHaveStyle({ transform: 'translateY(-5px)' });
        fireEvent.mouseLeave(visaCard);
        expect(visaCard).toHaveStyle({ transform: 'translateY(0)' });
    });
});
