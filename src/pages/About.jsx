import React from 'react';
import { Target, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--color-text-dark)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: 'var(--color-gold)' }}>About Al Goni Tours and Travels</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
            Your trusted partner in spiritual and luxury travel since 2010.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca54d082238?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Mission"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                At Al Goni Tours and Travels, our mission is to provide seamless, spiritual, and luxurious travel experiences. We understand that travel is not just about moving from one place to another; it is about the journey, the memories, and the peace of mind.
              </p>
              <p style={{ color: 'var(--color-text-light)' }}>
                We strive to exceed expectations by offering personalized services, premium accommodations, and expert guidance, ensuring that every trip with us is a journey of a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-beige)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Target size={30} color="var(--color-gold)" />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Excellence</h3>
              <p style={{ color: 'var(--color-text-light)' }}>We aim for perfection in every service we provide.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Heart size={30} color="var(--color-rose-gold)" />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Integrity</h3>
              <p style={{ color: 'var(--color-text-light)' }}>We operate with honesty and transparency.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Users size={30} color="var(--color-gold)" />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Customer First</h3>
              <p style={{ color: 'var(--color-text-light)' }}>Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
