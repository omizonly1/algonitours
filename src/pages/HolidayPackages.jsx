import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { usePackages } from '../context/PackageContextDefinition';
import DestinationCard from '../components/DestinationCard';

const HolidayPackages = () => {
    const { packages } = usePackages();
    // Filter for destinations (excluding Hajj, Umrah, Bike Trips)
    const destinations = packages.filter(pkg => pkg.type === 'Destination');
    return (
        <div className="visa-section">
            <div className="visa-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="visa-header text-center"
                >
                    <div className="visa-kicker">Travel The World</div>
                    <h1 className="visa-title">Holiday <span className="text-gold">Packages</span></h1>
                    <p className="visa-subtitle" style={{ margin: '0 auto' }}>Explore our wide range of holiday packages to exotic destinations around the world.</p>
                </motion.div>

                <div className="visa-grid">
                    {destinations.map((dest, index) => (
                        <DestinationCard key={dest.id} dest={dest} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HolidayPackages;
