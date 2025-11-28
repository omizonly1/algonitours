import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ArrowRight, Camera, Bike } from 'lucide-react';

import { pastEvents } from '../data/bikeTripsData';
import { usePackages } from '../context/PackageContextDefinition';

const BikeTrips = () => {
    const navigate = useNavigate();
    const { packages } = usePackages();

    // Find the active bike trip package
    const nextTrip = packages.find(pkg => pkg.type === 'Bike Trip');

    const handleRegister = () => {
        navigate('/custom-package', { state: { destination: "Bike Trip Adventure" } });
    };

    return (
        <div>
            {/* Hero Section */}
            <div style={{ position: 'relative', height: '80vh' }}>
                <img
                    src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Bike Trip Adventure"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="container" style={{ textAlign: 'center', color: 'white' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                                Ride the <span style={{ color: 'var(--color-primary)' }}>Legend</span>
                            </h1>
                            <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                                Join our community of riders and explore the world on two wheels. Experience the thrill, the brotherhood, and the freedom.
                            </p>
                            <button
                                onClick={handleRegister}
                                className="btn btn-primary"
                                style={{ fontSize: '1.2rem', padding: '1rem 3rem', borderRadius: '50px' }}
                            >
                                Join the Next Ride
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Next Trip Promotion */}
            <section style={{ padding: '5rem 0', backgroundColor: '#f4f4f4' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <motion.img
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                src={nextTrip.image}
                                alt={nextTrip.title}
                                style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 500px' }}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '50px', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    UPCOMING ADVENTURE
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>{nextTrip.title}</h2>
                                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', color: '#666' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={20} color="var(--color-primary)" />
                                        <span>{nextTrip.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={20} color="var(--color-primary)" />
                                        <span>{nextTrip.location}</span>
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Why Join This Ride?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                    {nextTrip.advantages.map((adv, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '1.1rem', color: '#555' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                                            {adv}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleRegister}
                                    className="btn btn-primary"
                                    style={{ padding: '0.8rem 2rem' }}
                                >
                                    Register Now
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Showcase */}
            <section style={{ padding: '5rem 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Past Event Highlights</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            Relive the memories from our previous expeditions. From the mountains to the coast, we've conquered it all together.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', height: '300px', cursor: 'pointer' }}
                                className="event-card"
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '1.5rem'
                                }}>
                                    <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{event.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ddd' }}>
                                        <Calendar size={16} />
                                        <span>{event.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ padding: '5rem 0', backgroundColor: '#222', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <Bike size={48} color="var(--color-primary)" style={{ marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to Start Your Engine?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Don't miss out on the next big adventure. Slots are limited and filling up fast!
                    </p>
                    <button
                        onClick={handleRegister}
                        className="btn btn-primary"
                        style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}
                    >
                        Book Your Spot
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BikeTrips;
