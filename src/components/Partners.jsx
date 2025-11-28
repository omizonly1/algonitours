import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
    { name: "Saudia", logo: "/src/assets/saudia-airlines-seeklogo.png" },
    { name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png" },
    { name: "Hilton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hilton_Worldwide_logo.svg/2560px-Hilton_Worldwide_logo.svg.png" },
    { name: "Marriott", logo: "/src/assets/Marriott_International.svg" },
    { name: "IndiGo", logo: "/src/assets/IndiGo_Airlines_logo.svg" }
];

const Partners = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'white', overflow: 'hidden' }}>
            <div className="container">
                <h3 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-light)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Trusted Partners</h3>

                <div style={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{ display: 'flex', gap: '60px', alignItems: 'center' }}
                    >
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} style={{ width: '150px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s' }}>
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = 1; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = 0.7; }}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
