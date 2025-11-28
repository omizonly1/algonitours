import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const DestinationCard = ({ dest, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video play failed:", error);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="visa-card"
            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={dest.link} style={{ display: 'block', height: '100%', width: '100%', textDecoration: 'none' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    {/* Image */}
                    <img
                        src={dest.image}
                        alt={dest.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: isHovered && dest.video ? 0 : 1,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />

                    {/* Video */}
                    {dest.video && (
                        <video
                            ref={videoRef}
                            src={dest.video}
                            muted
                            loop
                            playsInline
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.3s ease-in-out',
                                pointerEvents: 'none' // Ensure clicks go through to the Link
                            }}
                        />
                    )}

                    {/* Overlay Content */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        padding: '1rem',
                        color: 'white',
                        zIndex: 10 // Ensure text is above video
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                            <MapPin size={14} style={{ marginRight: '0.25rem', color: 'var(--color-gold)' }} />
                            {dest.country}
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: 0, color: 'white' }}>{dest.name}</h3>
                    </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                        <div>
                            <span style={{ fontSize: '0.75rem', color: '#888', display: 'block' }}>Starting from</span>
                            <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-gold)' }}>{dest.price}</span>
                        </div>
                        <span
                            className="visa-button"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}
                        >
                            View <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default DestinationCard;
