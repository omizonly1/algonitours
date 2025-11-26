import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Calendar, MapPin, Users, Briefcase, User, Phone, Mail } from 'lucide-react';

const CustomPackage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination: '',
        travelDate: '',
        duration: '',
        travelers: '',
        budget: '',
        accommodation: '3 Star',
        requirements: '',
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        if (location.state && location.state.destination) {
            setFormData(prev => ({
                ...prev,
                destination: location.state.destination
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! Our travel experts will contact you shortly.');
        navigate('/');
    };

    return (
        <div className="visa-section">
            <div className="visa-container">
                <div className="visa-header text-center">
                    <div className="visa-kicker">Tailored Just For You</div>
                    <h1 className="visa-title">Customize Your <span className="text-gold">Journey</span></h1>
                    <p className="visa-subtitle" style={{ margin: '0 auto' }}>
                        Tell us your preferences, and let us craft the perfect itinerary for your dream vacation.
                    </p>
                </div>

                <div className="visa-card visa-card--primary" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <form onSubmit={handleSubmit} className="visa-form">

                        {/* Trip Details Section */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trip Details</h3>

                            <div className="visa-form-row">
                                <div className="visa-form-field">
                                    <label htmlFor="destination">Destination</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleChange}
                                            placeholder="Where do you want to go?"
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <MapPin size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                                <div className="visa-form-field">
                                    <label htmlFor="travelDate">Travel Date</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="date"
                                            name="travelDate"
                                            value={formData.travelDate}
                                            onChange={handleChange}
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <Calendar size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="visa-form-row">
                                <div className="visa-form-field">
                                    <label htmlFor="duration">Duration (Days)</label>
                                    <input
                                        type="number"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        placeholder="e.g. 5"
                                        min="1"
                                    />
                                </div>
                                <div className="visa-form-field">
                                    <label htmlFor="travelers">No. of Travelers</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="number"
                                            name="travelers"
                                            value={formData.travelers}
                                            onChange={handleChange}
                                            placeholder="e.g. 2"
                                            min="1"
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <Users size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="visa-form-row">
                                <div className="visa-form-field">
                                    <label htmlFor="budget">Budget per Person (₹)</label>
                                    <input
                                        type="number"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        placeholder="e.g. 25000"
                                    />
                                </div>
                                <div className="visa-form-field">
                                    <label htmlFor="accommodation">Accommodation</label>
                                    <div style={{ position: 'relative' }}>
                                        <select
                                            name="accommodation"
                                            value={formData.accommodation}
                                            onChange={handleChange}
                                            style={{ paddingLeft: '2.5rem' }}
                                        >
                                            <option value="3 Star">3 Star</option>
                                            <option value="4 Star">4 Star</option>
                                            <option value="5 Star">5 Star</option>
                                            <option value="Homestay">Homestay</option>
                                        </select>
                                        <Briefcase size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="visa-form-row">
                                <div className="visa-form-field visa-form-field--full">
                                    <label htmlFor="requirements">Special Requirements</label>
                                    <textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Any specific places you want to visit, dietary restrictions, etc."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Section */}
                        <div style={{ marginBottom: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact Details</h3>

                            <div className="visa-form-row">
                                <div className="visa-form-field">
                                    <label htmlFor="name">Full Name</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <User size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                                <div className="visa-form-field">
                                    <label htmlFor="phone">Phone Number</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <Phone size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="visa-form-row">
                                <div className="visa-form-field visa-form-field--full">
                                    <label htmlFor="email">Email Address</label>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            style={{ paddingLeft: '2.5rem' }}
                                        />
                                        <Mail size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="visa-form-actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                            <button
                                type="submit"
                                className="visa-button"
                                style={{ width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                <Send size={18} />
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomPackage;
