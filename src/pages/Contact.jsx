import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travelCountry: "",
    travelType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact enquiry submitted:", formData);
    alert("Thank you! We have received your enquiry.");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      travelCountry: "",
      travelType: "",
      message: "",
    });
  };
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '200px' }}>

            {/* Contact form */}
            <div className="contact-us">
              <h3 className="visa-contact-title">Send Us a Message</h3>
              <p className="visa-contact-subtitle">
                Share your basic details and our team will get back to you with a customised guidance.
              </p>

              <form className="visa-form" onSubmit={handleSubmit}>
                <div className="visa-form-row">
                  <div className="visa-form-field">
                    <label htmlFor="fullName">Full Name*</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="visa-form-field">
                    <label htmlFor="phone">WhatsApp / Phone*</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="visa-form-row">
                  <div className="visa-form-field">
                    <label htmlFor="email">Email*</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="visa-form-field">
                    <label htmlFor="travelCountry">Country of Travel*</label>
                    <input
                      id="travelCountry"
                      name="travelCountry"
                      type="text"
                      required
                      placeholder="Saudi Arabia, UAE, etc."
                      value={formData.travelCountry}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="visa-form-row">
                  <div className="visa-form-field">
                    <label htmlFor="travelType">Purpose</label>
                    <select
                      id="travelType"
                      name="travelType"
                      value={formData.travelType}
                      onChange={handleChange}
                    >
                      <option value="">Select purpose</option>
                      <option value="Hajj / Umrah / Ziyarat">Hajj / Umrah / Ziyarat</option>
                      <option value="Tickets">Flight / Bus / Train Ticket</option>
                      <option value="Visa Assistance">Visa Assistance</option>
                      <option value="Hotel Booking">Hotel Booking</option>
                      {/* <option value="Car Rental">Car Rental</option> */}
                      <option value="Tour Packages">Tour Packages</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="visa-form-row">
                  <div className="visa-form-field visa-form-field--full">
                    <label htmlFor="message">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Share your tentative travel dates, number of passengers, or any special requirements."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="visa-form-actions">
                  <button type="submit" className="visa-button">
                    Submit Enquiry
                  </button>
                  <a
                    className="visa-wa-link"
                    href="https://wa.me/919434135749?text=I%20need%20help%20with%20travel%20assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Or chat on WhatsApp
                  </a>
                </div>
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
