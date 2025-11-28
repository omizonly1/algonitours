import React, { useState, useEffect } from 'react';
import PackageContext from './PackageContextDefinition';
import { destinations } from '../data/destinations';
import { hajjPackages, umrahPackages } from '../data/hajjUmrahPackages';
import { nextTrip } from '../data/bikeTripsData';


export const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);

    // Initialize data from LocalStorage or default files
    useEffect(() => {
        const storedPackages = localStorage.getItem('packages');
        if (storedPackages) {
            const parsedPackages = JSON.parse(storedPackages);

            // Sync static destinations from file to ensure updates (like price changes) are reflected
            const staticDestinations = (destinations || []).map(d => ({ ...d, type: 'Destination', id: `dest-${d.id}` }));

            // Create a map of static destinations for easy lookup
            const staticMap = new Map(staticDestinations.map(d => [d.id, d]));

            // Merge packages: Update existing static ones, keep dynamic ones, add new static ones
            const mergedPackages = parsedPackages.map(pkg => {
                // If this package exists in our static file (e.g. it's a destination), use the fresh data from file
                if (staticMap.has(pkg.id)) {
                    return staticMap.get(pkg.id);
                }
                return pkg;
            });

            // Add any new static destinations that weren't in local storage at all
            const existingIds = new Set(mergedPackages.map(p => p.id));
            const newDestinations = staticDestinations.filter(d => !existingIds.has(d.id));

            setPackages([...mergedPackages, ...newDestinations]);
        } else {
            // Combine initial data
            const initialData = [
                ...(destinations || []).map(d => ({ ...d, type: 'Destination', id: `dest-${d.id}` })),
                ...(hajjPackages || []).map(h => ({ ...h, type: 'Hajj', image: 'https://images.unsplash.com/photo-1565552629477-e254f38aa89d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', name: h.title, country: 'Saudi Arabia' })),
                ...(umrahPackages || []).map(u => ({ ...u, type: 'Umrah', image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', name: u.title, country: 'Saudi Arabia' })),
                ...(nextTrip ? [{ ...nextTrip, type: 'Bike Trip', name: nextTrip.title, country: 'India', id: nextTrip.id }] : [])
            ];
            setPackages(initialData);
            localStorage.setItem('packages', JSON.stringify(initialData));
        }
    }, []);

    // Save to LocalStorage whenever packages change
    useEffect(() => {
        if (packages.length > 0) {
            localStorage.setItem('packages', JSON.stringify(packages));
        }
    }, [packages]);

    const addPackage = (newPackage) => {
        const pkgWithId = { ...newPackage, id: `custom-${Date.now()}` };
        setPackages(prev => [...prev, pkgWithId]);
    };

    const updatePackage = (id, updatedData) => {
        setPackages(prev => prev.map(pkg => pkg.id === id ? { ...pkg, ...updatedData } : pkg));
    };

    const deletePackage = (id) => {
        setPackages(prev => prev.filter(pkg => pkg.id !== id));
    };

    const getPackage = (id) => {
        return packages.find(pkg => pkg.id === id);
    };

    return (
        <PackageContext.Provider value={{ packages, addPackage, updatePackage, deletePackage, getPackage }}>
            {children}
        </PackageContext.Provider>
    );
};
