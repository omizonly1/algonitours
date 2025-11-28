import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Shield, Star, Globe, Clock } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import PopularDestinations from '../components/PopularDestinations';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import BlogPreview from '../components/BlogPreview';
import { usePackages } from '../context/PackageContextDefinition';

const Home = () => {
  const { packages } = usePackages();

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.2), rgba(183, 110, 121, 0.2))',
          pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--color-cream)', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Discover the World with <span style={{ color: 'var(--color-gold)' }}><br></br>Al Goni Tours and Travels</span>
          </h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Experience luxury travel and spiritual journeys tailored just for you. We turn your dreams into unforgettable memories.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>Explore Packages</Link>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '15px 35px', fontSize: '1.1rem', borderColor: 'var(--color-cream)', color: 'var(--color-cream)' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />

      {/* Popular Destinations */}
      <RevealOnScroll>
        <PopularDestinations />
      </RevealOnScroll>

      {/* Services Teaser */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text-dark)' }}>Our Premium Services</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--color-gold)', margin: '1rem auto' }}></div>
            <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We offer a wide range of services to cater to all your travel needs, ensuring a seamless and luxurious experience.
            </p>
          </div>

          <RevealOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {/* Service 1 */}
              <div
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--color-soft-beige)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                className="service-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Link to="/hajj-umrah" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <Globe size={30} color="var(--color-gold)" />
                  </div>
                  <h3 style={{ color: 'var(--color-text-dark)', marginBottom: '15px' }}>Hajj & Umrah</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>Spiritual journeys with complete peace of mind, luxury accommodations, and guided tours.</p>
                </Link>
              </div>
              {/* Service 2 */}
              <div
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--color-soft-beige)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                className="service-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Link to="/flight-booking" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <Plane size={30} color="var(--color-rose-gold)" />
                  </div>
                  <h3 style={{ color: 'var(--color-text-dark)', marginBottom: '15px' }}>Flight Booking</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>Explore exotic destinations with our curated international tour packages designed for comfort.</p>
                </Link>
              </div>
              {/* Service 3 */}
              <div
                style={{
                  padding: '40px',
                  backgroundColor: 'var(--color-soft-beige)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                className="service-card"
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Link to="/visa-assistance" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <Shield size={30} color="var(--color-gold)" />
                  </div>
                  <h3 style={{ color: 'var(--color-text-dark)', marginBottom: '15px' }}>Visa Assistance</h3>
                  <p style={{ color: 'var(--color-text-light)' }}>Hassle-free visa processing for all major destinations worldwide with expert guidance.</p>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <RevealOnScroll delay={0.2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Choose <span style={{ color: 'var(--color-gold)' }}>Al Goni Tours and Travels?</span></h2>
                <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                  We are committed to excellence in every aspect of your journey. Here is why thousands of travelers trust us.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ padding: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%', display: 'flex' }}>
                      <Shield size={16} color="white" />
                    </div>
                    <span style={{ fontWeight: '600' }}>Trusted & Reliable Service</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ padding: '8px', backgroundColor: 'var(--color-rose-gold)', borderRadius: '50%', display: 'flex' }}>
                      <Clock size={16} color="white" />
                    </div>
                    <span style={{ fontWeight: '600' }}>24/7 Customer Support</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ padding: '8px', backgroundColor: 'var(--color-gold)', borderRadius: '50%', display: 'flex' }}>
                      <Star size={16} color="white" />
                    </div>
                    <span style={{ fontWeight: '600' }}>Premium & Luxury Options</span>
                  </li>
                </ul>
                <Link to="/about" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Learn More About Us</Link>
              </div>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
                  alt="Travel"
                  style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats */}
      <div className="container">
        <RevealOnScroll>
          <Stats />
        </RevealOnScroll>
      </div>

      {/* Testimonials */}
      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>

      {/* FAQ */}
      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>

      {/* Blog Preview */}
      <RevealOnScroll>
        <BlogPreview />
      </RevealOnScroll>

      {/* Newsletter */}
      <RevealOnScroll>
        <Newsletter />
      </RevealOnScroll>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-text-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Ready to Start Your Journey?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#ccc' }}>
            Contact us today to plan your next adventure. We are here to make it perfect.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px' }}>Get a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
