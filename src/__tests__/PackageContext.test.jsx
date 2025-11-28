import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PackageProvider } from '../context/PackageContext';
import { usePackages } from '../context/PackageContextDefinition';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock data modules
vi.mock('../data/destinations', () => ({
    destinations: [{ id: 1, title: 'Paris', price: '1000' }]
}));
vi.mock('../data/hajjUmrahPackages', () => ({
    hajjPackages: [],
    umrahPackages: []
}));
vi.mock('../data/bikeTripsData', () => ({
    nextTrip: null
}));

const TestComponent = () => {
    const { packages, addPackage, updatePackage, deletePackage } = usePackages();

    return (
        <div>
            <div data-testid="package-count">{packages.length}</div>
            <ul>
                {packages.map(pkg => (
                    <li key={pkg.id} data-testid={`package-${pkg.id}`}>
                        {pkg.title} - {pkg.price}
                    </li>
                ))}
            </ul>
            <button onClick={() => addPackage({ title: 'New Trip', price: '500' })}>Add</button>
            <button onClick={() => updatePackage(packages[0].id, { price: '2000' })}>Update</button>
            <button onClick={() => deletePackage(packages[0].id)}>Delete</button>
        </div>
    );
};

describe('PackageContext', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('provides initial packages', async () => {
        render(
            <PackageProvider>
                <TestComponent />
            </PackageProvider>
        );

        expect(screen.getByTestId('package-count')).toHaveTextContent('1');
        expect(screen.getByText('Paris - 1000')).toBeInTheDocument();
    });

    it('adds a package', async () => {
        render(
            <PackageProvider>
                <TestComponent />
            </PackageProvider>
        );

        fireEvent.click(screen.getByText('Add'));

        await waitFor(() => {
            expect(screen.getByTestId('package-count')).toHaveTextContent('2');
            expect(screen.getByText('New Trip - 500')).toBeInTheDocument();
        });
    });

    it('updates a package', async () => {
        render(
            <PackageProvider>
                <TestComponent />
            </PackageProvider>
        );

        fireEvent.click(screen.getByText('Update'));

        await waitFor(() => {
            expect(screen.getByText('Paris - 2000')).toBeInTheDocument();
        });
    });

    it('deletes a package', async () => {
        render(
            <PackageProvider>
                <TestComponent />
            </PackageProvider>
        );

        fireEvent.click(screen.getByText('Delete'));

        await waitFor(() => {
            expect(screen.getByTestId('package-count')).toHaveTextContent('0');
        });
    });
});
