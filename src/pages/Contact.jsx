import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
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
          <h1 style={{ fontSize: '3rem', color: 'var(--color-gold)' }}>Contact Us</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
            We are here to help you plan your next journey. Reach out to us today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="First Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'var(--color-soft-beige)' }} />
                  <input type="text" placeholder="Last Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'var(--color-soft-beige)' }} />
                </div>
                <input type="email" placeholder="Email Address" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'var(--color-soft-beige)' }} />
                <input type="text" placeholder="Subject" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'var(--color-soft-beige)' }} />
                <textarea rows="6" placeholder="Your Message" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'var(--color-soft-beige)' }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} color="var(--color-gold)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Our Office</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>Alam Market, Pandua, Hooghly<br />West Bengal, India, 712149</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} color="var(--color-gold)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone Number</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>+91 94341 35749<br />+91 95646 20164</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} color="var(--color-gold)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email Address</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>al.goni.tours.and.travels@gmail.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={24} color="var(--color-gold)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Working Hours</h3>
                    <p style={{ color: 'var(--color-text-light)' }}>Saturday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
