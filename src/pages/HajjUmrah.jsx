import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, CheckCircle, Star, Shield, Users } from 'lucide-react';
import { usePackages } from '../context/PackageContextDefinition';
const missionImg = "/assets/mission.png";

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
            <section className="about-hero" style={{ textAlign: 'left', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={missionImg}
                                alt="Hajj Pilgrim Character"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '500px',
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                                    animation: 'float 6s ease-in-out infinite',
                                    borderRadius: '12px'
                                }}
                            />
                            <style>{`
                                @keyframes float {
                                    0% { transform: translateY(0px); }
                                    50% { transform: translateY(-20px); }
                                    100% { transform: translateY(0px); }
                                }
                            `}</style>
                        </div>
                        <div style={{ flex: '1 1 500px' }}>
                            <h1 className="about-title" style={{ color: 'var(--color-gold)', fontSize: '3.5rem', lineHeight: '1.2' }}>Hajj & Umrah Services</h1>
                            <p className="about-tagline" style={{ color: '#eee', fontSize: '1.5rem', marginTop: '10px' }}>Spiritual Journeys of a Lifetime</p>
                            <p className="about-subtext" style={{ color: '#ddd', fontSize: '1.1rem', marginTop: '20px', maxWidth: '600px' }}>
                                Embark on a spiritual journey of a lifetime with our comprehensive and worry-free packages.
                            </p>
                        </div>

                    </div>
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
