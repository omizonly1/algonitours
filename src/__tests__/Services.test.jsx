import { render, screen } from '@testing-library/react';
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
    });
});
