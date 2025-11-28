import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
    it('renders navbar logo', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByText(/Al Goni/i)).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Bike Trips')).toBeInTheDocument();
        expect(screen.getAllByText('Contact Us').length).toBeGreaterThan(0);
    });

    it('toggles mobile menu when button is clicked', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        // Find the toggle button (it has an icon inside)
        // Since there might be multiple buttons (like the new back button), we need to be specific.
        // The mobile menu button usually appears on small screens, but in JSDOM default width might be large.
        // However, the component renders it based on CSS media queries which JSDOM doesn't fully respect for display:none,
        // but the button IS in the DOM.

        // Let's find the button that toggles the menu. It's the one with onClick={toggleMenu}.
        // In the code: <button className="mobile-menu-btn" ...>

        // We can use class selector or role.
        // Let's use a more specific query if possible, or just getAllByRole('button') and find the one.
        // Actually, the previous test used: const menuButton = buttons.find(btn => btn.className.includes('mobile-menu-btn'));

        const buttons = screen.getAllByRole('button');
        const menuButton = buttons.find(btn => btn.className.includes('mobile-menu-btn'));

        expect(menuButton).toBeInTheDocument();

        fireEvent.click(menuButton);
        expect(screen.getByText('Hajj & Umrah')).toBeInTheDocument();
    });

    it('shows back button when not on home page', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <Navbar />
            </MemoryRouter>
        );

        const backButton = screen.getByLabelText('Go Back');
        expect(backButton).toBeInTheDocument();
    });

    it('hides back button on home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Navbar />
            </MemoryRouter>
        );

        const backButton = screen.queryByLabelText('Go Back');
        expect(backButton).not.toBeInTheDocument();
    });
});
