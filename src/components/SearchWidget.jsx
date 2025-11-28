import React, { useState } from 'react';
import { Plane, Hotel, Map, Calendar, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchWidget = () => {
    const [activeTab, setActiveTab] = useState('flights');

    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            maxWidth: '900px',
            width: '95%',
            margin: '-50px auto 0', // Negative margin to overlap hero
            position: 'relative',
            zIndex: 10
        }}>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <button
                    onClick={() => setActiveTab('flights')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: activeTab === 'flights' ? 'var(--color-soft-beige)' : 'transparent',
                        color: activeTab === 'flights' ? 'var(--color-gold)' : 'var(--color-text-light)',
                        border: 'none',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                    }}
                >
                    <Plane size={18} /> Flights
                </button>
                <button
                    onClick={() => setActiveTab('hotels')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: activeTab === 'hotels' ? 'var(--color-soft-beige)' : 'transparent',
                        color: activeTab === 'hotels' ? 'var(--color-gold)' : 'var(--color-text-light)',
                        border: 'none',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                    }}
                >
                    <Hotel size={18} /> Hotels
                </button>
                <button
                    onClick={() => setActiveTab('packages')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: activeTab === 'packages' ? 'var(--color-soft-beige)' : 'transparent',
                        color: activeTab === 'packages' ? 'var(--color-gold)' : 'var(--color-text-light)',
                        border: 'none',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                    }}
                >
                    <Map size={18} /> Holidays
                </button>
            </div>

            {/* Search Form */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', alignItems: 'end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-light)' }}>From</label>
                    <input
                        type="text"
                        placeholder="City or Airport"
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-light)' }}>To</label>
                    <input
                        type="text"
                        placeholder="Destination"
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-light)' }}>Date</label>
                    <input
                        type="date"
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            width: '100%'
                        }}
                    />
                </div>

                <button
                    className="btn btn-primary"
                    style={{
                        height: '46px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        fontSize: '1rem'
                    }}
                >
                    <Search size={20} /> Search
                </button>
            </div>
        </div>
    );
};

export default SearchWidget;
