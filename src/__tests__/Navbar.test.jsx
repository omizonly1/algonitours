import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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

        const buttons = screen.getAllByRole('button');
        const menuButton = buttons.find(btn => btn.className.includes('mobile-menu-btn'));

        expect(menuButton).toBeInTheDocument();

        // "Hajj & Umrah" is only in the mobile menu
        expect(screen.queryByText('Hajj & Umrah')).not.toBeInTheDocument();

        fireEvent.click(menuButton);

        expect(screen.getByText('Hajj & Umrah')).toBeInTheDocument();
    });
});
