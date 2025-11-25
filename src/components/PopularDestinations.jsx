import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        name: "Mecca & Medina",
        country: "Saudi Arabia",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From ₹90,000",
        link: "/hajj-umrah"
    },
    {
        id: 2,
        name: "Dubai",
        country: "UAE",
        image: "src/assets/burj_al_arab_1.jpg",
        price: "From ₹65,000",
        link: "/holiday-packages"
    },
    {
        id: 3,
        name: "Istanbul",
        country: "Turkey",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From ₹85,000",
        link: "/holiday-packages"
    },
    {
        id: 4,
        name: "Bangkok",
        country: "Thailand",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From ₹55,000",
        link: "/holiday-packages"
    },
    {
        id: 5,
        name: "Vietnam",
        country: "Vietnam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From ₹40,000",
        link: "/holiday-packages"
    },
    {
        id: 6,
        name: "Maldives",
        country: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: "From ₹1,55,000",
        link: "/holiday-packages"
    }
];

const PopularDestinations = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Popular <span style={{ color: 'var(--color-gold)' }}>Destinations</span></h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Explore our top-rated travel locations</p>
                    </div>
                    <Link to="/holiday-packages" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        View All <ArrowRight size={18} />
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {destinations.map((dest) => (
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
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '25px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
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
