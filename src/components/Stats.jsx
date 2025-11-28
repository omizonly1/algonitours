import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, Award } from 'lucide-react';

const stats = [
    { id: 1, label: "Happy Travelers", value: "5000+", icon: <Users size={30} /> },
    { id: 2, label: "Years Experience", value: "15+", icon: <Briefcase size={30} /> },
    { id: 3, label: "Destinations", value: "20+", icon: <Globe size={30} /> },
    { id: 4, label: "Awards Won", value: "10+", icon: <Award size={30} /> }
];

const Stats = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
            {stats.map((stat) => (
                <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                    style={{ textAlign: 'center', padding: '10px' }}
                >
                    <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'var(--color-soft-beige)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px',
                        color: 'var(--color-gold)'
                    }}>
                        {stat.icon}
                    </div>
                    <h3 style={{ fontSize: '2rem', color: 'var(--color-text-dark)', marginBottom: '5px' }}>{stat.value}</h3>
                    <p style={{ color: 'var(--color-text-light)', fontWeight: '600' }}>{stat.label}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default Stats;
