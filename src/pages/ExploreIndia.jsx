import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const indianDestinations = [
    {
        id: 'kashmir',
        name: "Kashmir",
        state: "Jammu & Kashmir",
        image: "../src/assets/Kashmir_3.jpg",
        description: "Paradise on Earth, known for its pristine lakes and snow-capped mountains.",
        price: "From ₹25,000"
    },
    {
        id: 'kerala',
        name: "Kerala",
        state: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "God's Own Country, famous for its backwaters, beaches, and tea plantations.",
        price: "From ₹20,000"
    },
    {
        id: 'rajasthan',
        name: "Rajasthan",
        state: "Rajasthan",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "The Land of Kings, home to majestic forts, palaces, and vibrant culture.",
        price: "From ₹22,000"
    },
    {
        id: 'goa',
        name: "Goa",
        state: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Sun, sand, and sea. The perfect destination for relaxation and nightlife.",
        price: "From ₹15,000"
    },
    {
        id: 'himachal',
        name: "Himachal Pradesh",
        state: "Himachal Pradesh",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A haven for nature lovers and adventure enthusiasts.",
        price: "From ₹18,000"
    },
    {
        id: 'andaman',
        name: "Andaman & Nicobar",
        state: "Andaman",
        image: "../src/assets/andaman_2.jpg",
        description: "Exotic islands with crystal clear waters and white sandy beaches.",
        price: "From ₹35,000"
    }
];

const ExploreIndia = () => {
    return (
        <div className="visa-section">
            <div className="visa-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="visa-header text-center"
                >
                    <div className="visa-kicker">Incredible India</div>
                    <h1 className="visa-title">Explore <span className="text-gold">India</span></h1>
                    <p className="visa-subtitle" style={{ margin: '0 auto' }}>Discover the incredible diversity and beauty of India with our curated travel packages.</p>
                </motion.div>

                <div className="visa-grid">
                    {indianDestinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="visa-card"
                            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ position: 'relative', height: '200px' }}>
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
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    padding: '1rem',
                                    color: 'white'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                                        <MapPin size={14} style={{ marginRight: '0.25rem', color: 'var(--color-gold)' }} />
                                        {dest.state}
                                    </div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: 0, color: 'white' }}>{dest.name}</h3>
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', fontSize: '0.95rem', flex: 1 }}>{dest.description}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <div>
                                        <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>Starting from</span>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-gold)' }}>{dest.price}</span>
                                    </div>
                                    <Link
                                        to={`/destination/${dest.id}`}
                                        className="visa-button"
                                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}
                                    >
                                        View <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreIndia;
