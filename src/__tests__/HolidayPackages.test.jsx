import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HolidayPackages from '../pages/HolidayPackages';
import { describe, it, expect, vi } from 'vitest';
import * as PackageContext from '../context/PackageContextDefinition';

// Mock the usePackages hook
vi.mock('../context/PackageContextDefinition', () => ({
    usePackages: vi.fn(),
}));

describe('HolidayPackages Component', () => {
    it('renders holiday packages', () => {
        const mockPackages = [
            { id: 1, type: 'Destination', name: 'Paris', price: '1000', image: 'paris.jpg', duration: '5 days', link: '/paris', country: 'France' },
            { id: 2, type: 'Destination', name: 'London', price: '1200', image: 'london.jpg', duration: '6 days', link: '/london', country: 'UK' },
        ];

        PackageContext.usePackages.mockReturnValue({ packages: mockPackages });

        render(
            <BrowserRouter>
                <HolidayPackages />
            </BrowserRouter>
        );

        expect(screen.getByText('Paris')).toBeInTheDocument();
        expect(screen.getByText('London')).toBeInTheDocument();
    });

    it('filters out non-destination packages', () => {
        const mockPackages = [
            { id: 1, type: 'Destination', name: 'Paris', price: '1000', image: 'paris.jpg', duration: '5 days', link: '/paris', country: 'France' },
            { id: 3, type: 'Hajj', name: 'Hajj Package', price: '5000', image: 'hajj.jpg', duration: '15 days', link: '/hajj', country: 'Saudi Arabia' },
        ];

        PackageContext.usePackages.mockReturnValue({ packages: mockPackages });

        render(
            <BrowserRouter>
                <HolidayPackages />
            </BrowserRouter>
        );

        expect(screen.getByText('Paris')).toBeInTheDocument();
        expect(screen.queryByText('Hajj Package')).not.toBeInTheDocument();
    });
});
