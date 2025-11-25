import React, { useState } from "react";

const VisaRequirementsSection = ({
    logoSrc = "logo.png",
    companyName = "Al Goni Tours & Travels",
    tagline = "Crafting Your Perfect Getaway",
}) => {
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
        // For now just log. Later you can connect to backend / email service.
        console.log("Visa enquiry submitted:", formData);
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
        <section id="visa-requirements" className="visa-section">
            <div className="visa-container">
                {/* Top badge */}
                <div className="visa-kicker">Visa Assistance</div>

                {/* Header with logo + tagline */}
                <header className="visa-header">
                    <div className="visa-brand">
                        <div className="visa-logo-wrap" style={{ backgroundColor: 'white' }}>
                            <img src={logoSrc} alt={`${companyName} logo`} className="visa-logo" />
                        </div>
                        <div className="visa-brand-text">
                            <span className="visa-company">{companyName}</span>
                            <span className="visa-tagline">{tagline}</span>
                        </div>
                    </div>

                    <h2 className="visa-title">Required Documents for Visa Processing</h2>
                    <p className="visa-subtitle">
                        Share these documents with <strong>{companyName}</strong> so that we
                        can handle your visa process smoothly, professionally, and with complete care.
                    </p>
                </header>

                {/* Main content cards */}
                <div className="visa-grid">
                    {/* Mandatory */}
                    <div className="visa-card visa-card--primary">
                        <div className="visa-card-header">
                            <span className="visa-card-chip">Mandatory</span>
                            <h3>Essential Documents</h3>
                            <p>These are required for almost all standard visa applications.</p>
                        </div>
                        <ul className="visa-list">
                            <li>Valid Passport (at least 6 months validity)</li>
                            <li>Passport Copy (front &amp; back pages)</li>
                            <li>Recent Passport-sized Photographs (white background)</li>
                            <li>Completed Visa Application Form</li>
                            <li>Proof of Accommodation (hotel booking or stay confirmation)</li>
                            <li>Flight Itinerary / Return Ticket</li>
                            <li>Bank Statement (last 6 months)</li>
                            <li>Employment Letter / Business Proof</li>
                            <li>Travel Insurance Policy (if required by destination)</li>
                        </ul>
                    </div>

                    {/* Additional */}
                    <div className="visa-card">
                        <div className="visa-card-header">
                            <span className="visa-card-chip visa-card-chip--soft">If Applicable</span>
                            <h3>Additional Supporting Documents</h3>
                            <p>
                                Some embassies or specific visa types may ask for extra documents.
                            </p>
                        </div>
                        <ul className="visa-list">
                            <li>Old Passports (if any)</li>
                            <li>Aadhaar Card / PAN Card (for Indian nationals)</li>
                            <li>Income Tax Returns (ITR) – last 1–2 years</li>
                            <li>Salary Slips – last 3 months</li>
                            <li>Invitation Letter / Sponsor Letter (visit &amp; business visas)</li>
                            <li>Sponsor ID Proof &amp; Bank Statement</li>
                            <li>Umrah / Ziyarat / Hajj Package Confirmation (for religious travel)</li>
                            <li>Vaccination Certificate (if required by destination)</li>
                            <li>Police Clearance Certificate (PCC)</li>
                            <li>Marriage Certificate / Relationship Proof</li>
                            <li>Consent Letter for Minors travelling with one parent/guardian</li>
                        </ul>
                    </div>
                </div>

                {/* Note + CTA */}
                <div className="visa-footer">
                    <div className="visa-note">
                        <strong>Note:</strong> Exact requirements may vary by country and visa type.
                        Our team will share a customised checklist based on your travel plan.
                    </div>
                    <div className="visa-cta">
                        <span>Need help with your documents?</span>
                        <button
                            className="visa-button"
                            onClick={() => {
                                window.location.href =
                                    "mailto:al.goni.tours.and.travels@gmail.com?subject=Visa%20Assistance%20Enquiry";
                            }}
                        >
                            Email Visa Support
                        </button>
                    </div>
                </div>

                {/* Contact form */}
                <div className="visa-contact">
                    <h3 className="visa-contact-title">Request Visa Assistance</h3>
                    <p className="visa-contact-subtitle">
                        Share your basic details and our team will get back to you with a customised
                        visa checklist and guidance.
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
                                <label htmlFor="travelType">Visa Type / Purpose</label>
                                <select
                                    id="travelType"
                                    name="travelType"
                                    value={formData.travelType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select purpose</option>
                                    <option value="Umrah / Ziyarat">Umrah / Ziyarat</option>
                                    <option value="Tourist">Tourist Visa</option>
                                    <option value="Visit">Family Visit Visa</option>
                                    <option value="Business">Business Visa</option>
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
                                href="https://wa.me/919434135749?text=I%20need%20help%20with%20visa%20assistance"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Or chat on WhatsApp
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default VisaRequirementsSection;
