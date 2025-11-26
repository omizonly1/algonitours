import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, CheckCircle, MapPin } from 'lucide-react';
import { destinationDetails } from '../data/destinationDetails';

const DestinationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const destination = destinationDetails[id];

    if (!destination) {
        return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Destination not found</div>;
    }

    const handleCustomize = () => {
        navigate('/custom-package', { state: { destination: destination.name } });
    };

    return (
        <div>
            {/* Hero Section */}
            <div style={{ position: 'relative', height: '60vh' }}>
                <img
                    src={destination.image}
                    alt={destination.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="text-center" style={{ color: 'white' }}>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>{destination.name}</h1>
                        <p style={{ fontSize: '1.5rem' }}>{destination.title}</p>
                    </div>
                </div>
            </div>

            <div className="visa-section">
                <div className="visa-container">
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
                        {/* Main Content */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-text-dark)' }}>Itinerary</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {destination.itinerary.map((item, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--color-gold)',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                flexShrink: 0
                                            }}>
                                                {item.day}
                                            </div>
                                            {index !== destination.itinerary.length - 1 && (
                                                <div style={{ width: '2px', flex: 1, backgroundColor: '#e5e5e5', margin: '0.5rem 0' }}></div>
                                            )}
                                        </div>
                                        <div style={{ paddingBottom: '1rem' }}>
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#333' }}>{item.title}</h3>
                                            <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="visa-card" style={{ position: 'sticky', top: '100px' }}>
                                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                                    <span style={{ color: '#888', fontSize: '0.9rem' }}>Starting from</span>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-gold)' }}>{destination.price}</div>
                                    <span style={{ fontSize: '0.85rem', color: '#aaa' }}>per person</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                                        <Calendar size={20} color="var(--color-gold)" />
                                        <span>{destination.duration}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                                        <Users size={20} color="var(--color-gold)" />
                                        <span>Min. 2 Pax</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}>
                                        <MapPin size={20} color="var(--color-gold)" />
                                        <span>{destination.name}</span>
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Inclusions:</h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {destination.inclusions.map((inc, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '10px', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                                                <CheckCircle size={16} color="green" style={{ marginTop: '3px' }} />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={handleCustomize}
                                    className="visa-button"
                                    style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                                >
                                    Customize This Package
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;
