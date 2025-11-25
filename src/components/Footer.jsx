import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-text-dark)', color: 'var(--color-white)', paddingTop: '60px', paddingBottom: '20px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>

                    {/* Brand Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <img src="/logo.png" alt="Al Goni Tours and Travels" style={{ height: '40px' }} />
                            <h3 style={{ color: 'var(--color-white)', margin: 0 }}>Al Goni Tours and Travels</h3>
                        </div>
                        <p style={{ color: '#ccc', marginBottom: '20px' }}>
                            Your trusted partner for spiritual journeys and luxury travel experiences. We make your dreams come true with our premium services.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.instagram.com/algonitours/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}><Instagram size={20} /></a>
                            <a href="https://www.facebook.com/algonitours" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}><Facebook size={20} /></a>
                            <a href="https://twitter.com/algonitours" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-gold)' }}><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '10px' }}><Link to="/" style={{ color: '#ccc' }}>Home</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: '#ccc' }}>About Us</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/services" style={{ color: '#ccc' }}>Services</Link></li>
                            <li style={{ marginBottom: '10px' }}><Link to="/contact" style={{ color: '#ccc' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--color-gold)', marginBottom: '20px' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', color: '#ccc' }}>
                                <MapPin size={40} style={{ color: 'var(--color-gold)', minWidth: '20px' }} />
                                <span>Alam Market, Pandua, Hooghly, West Bengal, India, 712149</span>
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', color: '#ccc' }}>
                                <Phone size={25} style={{ color: 'var(--color-gold)', minWidth: '20px' }} />
                                <span>+91 94341 35749</span>
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', color: '#ccc' }}>
                                <Mail size={25} style={{ color: 'var(--color-gold)', minWidth: '20px' }} />
                                <span>al.goni.tours.and.travels@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #444', paddingTop: '20px', textAlign: 'center', color: '#888' }}>
                    <p>&copy; {new Date().getFullYear()} Al Goni Tours and Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
