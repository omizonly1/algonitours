import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', boxShadow: '0 4px 30px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid rgba(255, 255, 255, 0.3)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 20px' }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Al Goni Tours and Travels" style={{ height: '60px' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-text-dark)' }}>
            Al Goni Tours and Travels
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem' }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-menu { display: flex !important; }
              .mobile-menu-btn { display: none !important; }
            }
          `}</style>
          <Link to="/" style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>Home</Link>
          <Link to="/about" style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>About Us</Link>
          <Link to="/bike-trips" style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>Bike Trips</Link>
          <Link to="/services" style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>Services</Link>
          <Link to="/contact" className="btn btn-outline" style={{ padding: '8px 20px', color: 'var(--color-text-dark)' }}>Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: 'var(--color-text-dark)' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'var(--color-white)',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              textAlign: 'center',
              overflow: 'hidden'
            }}
          >
            <Link to="/" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '600' }}>Home</Link>
            <Link to="/about" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '600' }}>About Us</Link>
            <Link to="/hajj-umrah" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '600' }}>Hajj & Umrah</Link>
            <Link to="/bike-trips" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '600' }}>Bike Trips</Link>
            <Link to="/services" onClick={toggleMenu} style={{ fontSize: '1.1rem', fontWeight: '600' }}>Services</Link>
            <Link to="/contact" onClick={toggleMenu} className="btn btn-outline" style={{ color: 'var(--color-text-dark)', display: 'inline-block' }}>Contact Us</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
