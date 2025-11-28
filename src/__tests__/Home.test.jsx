import { render, screen } from '@testing-library/react';
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
    it('renders home page content', () => {
        render(
            <BrowserRouter>
                <PackageProvider>
                    <Home />
                </PackageProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Discover the World with/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Al Goni Tours and Travels/i).length).toBeGreaterThan(0);
        expect(screen.getByText(/Our Premium Services/i)).toBeInTheDocument();
    });
});
