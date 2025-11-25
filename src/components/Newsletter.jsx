import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail('');
        }
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-text-dark)', color: 'white', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-gold)' }}>Subscribe to Our Newsletter</h2>
                <p style={{ marginBottom: '2rem', color: '#ccc' }}>
                    Get the latest updates, exclusive offers, and travel inspiration delivered straight to your inbox.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            flex: 1,
                            padding: '15px',
                            borderRadius: '30px',
                            border: 'none',
                            outline: 'none',
                            minWidth: '250px'
                        }}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: '30px',
                            padding: '15px 30px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        Subscribe <Send size={18} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
