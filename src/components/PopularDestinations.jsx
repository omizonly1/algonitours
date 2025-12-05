import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { usePackages } from '../context/PackageContextDefinition';

const PopularDestinations = () => {
    const { packages } = usePackages();
    const displayedDestinations = packages
        .filter(pkg => pkg.type === 'Destination')
        .slice(0, 3);

    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Popular <span style={{ color: 'var(--color-gold)' }}>Destinations</span></h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Explore our top-rated travel locations</p>
                    </div>
                    <Link to="/holiday-packages" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                        View All <ArrowRight size={18} />
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {displayedDestinations.map((dest) => (
                        <motion.div
                            key={dest.id}
                            whileHover={{ y: -10 }}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                position: 'relative',
                                height: '400px',
                                cursor: 'pointer'
                            }}
                        >
                            <Link to={dest.link} style={{ display: 'block', height: '100%', width: '100%' }}>
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div className="glass-text-overlay" style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '25px',
                                    color: 'white'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px', fontSize: '0.9rem', opacity: 0.9 }}>
                                        <MapPin size={16} color="var(--color-gold)" />
                                        {dest.country}
                                    </div>
                                    <h4 className="destination-card-title">{dest.name}</h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-gold)' }}>{dest.price}</span>
                                        <span style={{
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            backdropFilter: 'blur(5px)',
                                            padding: '5px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem'
                                        }}>
                                            Explore
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
