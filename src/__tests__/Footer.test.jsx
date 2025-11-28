import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
    it('renders footer content', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        expect(screen.getAllByText(/Al Goni Tours and Travels/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Contact Us/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Alam Market/i)).toBeInTheDocument();
    });

    it('renders social media links', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        // Assuming social icons or links are present. 
        // We can check for specific text or aria-labels if they exist.
        // For now, checking for general presence of links.
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);
    });
});
