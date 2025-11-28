import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, Star, Shield, Users } from 'lucide-react';

import { usePackages } from '../context/PackageContextDefinition';

const HajjUmrah = () => {
    const navigate = useNavigate();
    const { packages } = usePackages();

    const hajjPackages = packages.filter(pkg => pkg.type === 'Hajj');
    const umrahPackages = packages.filter(pkg => pkg.type === 'Umrah');

    const handleBookNow = (pkgTitle) => {
        navigate('/custom-package', { state: { destination: pkgTitle } });
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-text-dark)',
                color: 'white',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1565552629477-e254f38aa89d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--color-gold)', marginBottom: '20px' }}>Hajj & Umrah Services</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#eee' }}>
                        Embark on a spiritual journey of a lifetime with our comprehensive and worry-free packages.
                    </p>
                </div>
            </section>

            {/* Umrah Packages */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Umrah Packages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {umrahPackages.map((pkg, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                borderTop: `4px solid ${index % 2 === 0 ? 'var(--color-rose-gold)' : 'var(--color-gold)'}`
                            }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{pkg.title}</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text-dark)', marginBottom: '20px' }}>{pkg.price}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-light)' }}>
                                            <CheckCircle size={18} color="var(--color-rose-gold)" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {pkg.link ? (
                                    <Link to={pkg.link} className="btn btn-primary" style={{ width: '100%', marginTop: '20px', display: 'inline-block', textAlign: 'center' }}>
                                        View Details
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => handleBookNow(pkg.title)}
                                        className="btn btn-primary"
                                        style={{ width: '100%', marginTop: '20px' }}
                                    >
                                        Book Now
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hajj Packages */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center' }}>Hajj Packages</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {hajjPackages.map((pkg, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                borderTop: `4px solid ${index % 2 === 0 ? 'var(--color-gold)' : 'var(--color-rose-gold)'}`
                            }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{pkg.title}</h3>
                                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text-dark)', marginBottom: '20px' }}>{pkg.price}</p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--color-text-light)' }}>
                                            <CheckCircle size={18} color="var(--color-gold)" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handleBookNow(pkg.title)}
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginTop: '20px' }}
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        <div className="feature-card">
                            <Shield size={40} color="var(--color-gold)" style={{ marginBottom: '15px' }} />
                            <h3>Trusted Service</h3>
                            <p>Years of experience in organizing successful pilgrimages.</p>
                        </div>
                        <div className="feature-card">
                            <Star size={40} color="var(--color-rose-gold)" style={{ marginBottom: '15px' }} />
                            <h3>Premium Comfort</h3>
                            <p>Top-rated hotels and comfortable transportation.</p>
                        </div>
                        <div className="feature-card">
                            <Users size={40} color="var(--color-gold)" style={{ marginBottom: '15px' }} />
                            <h3>Expert Guidance</h3>
                            <p>Knowledgeable guides to assist you with rituals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HajjUmrah;
