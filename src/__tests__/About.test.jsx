import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../pages/About';
import { describe, it, expect } from 'vitest';

describe('About Page', () => {
    it('renders about page content', () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );

        expect(screen.getByText(/About Al Goni Tours & Travels/i)).toBeInTheDocument();
    });
});
