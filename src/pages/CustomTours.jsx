import React from 'react';
import { Plane } from 'lucide-react';

const CustomTours = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            <Plane size={80} color="var(--color-gold)" style={{ marginBottom: '20px' }} />
            <h1 style={{ fontSize: '3rem', color: 'var(--color-text-dark)', marginBottom: '10px' }}>Coming Soon</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '500px' }}>
                We are currently curating the best holiday experiences for you. Stay tuned for our exclusive packages to exotic destinations!
            </p>
        </div>
    );
};

export default CustomTours;