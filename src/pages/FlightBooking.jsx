import React, { useState } from "react";

const FlightBooking = ({
    logoSrc = "logo.png",
    companyName = "Al Goni Tours & Travels",
    tagline = "Crafting Your Perfect Getaway",
}) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        fromCity: "",
        toCity: "",
        tripType: "one-way",
        departDate: "",
        returnDate: "",
        adults: 1,
        children: 0,
        infants: 0,
        cabinClass: "Economy",
        airlinePreference: "",
        notes: "",
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Flight booking request:", formData);
        alert("Thank you! Your flight request has been submitted.");
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            fromCity: "",
            toCity: "",
            tripType: "one-way",
            departDate: "",
            returnDate: "",
            adults: 1,
            children: 0,
            infants: 0,
            cabinClass: "Economy",
            airlinePreference: "",
            notes: "",
        });
    };

    return (
        <section className="flight-section">
            <div className="flight-container">
                {/* Top label */}
                <div className="flight-kicker">Flight Booking Request</div>

                {/* Header with logo + tagline */}
                <header className="flight-header">
                    <div className="flight-brand">
                        <div className="visa-logo-wrap">
                            <img src={logoSrc} alt={`${companyName} logo`} className="flight-logo" />
                        </div>
                        <div className="flight-brand-text">
                            <span className="flight-company">{companyName}</span>
                            <span className="flight-tagline">{tagline}</span>
                        </div>
                    </div>

                    <h1 className="flight-title">Share Your Flight Requirements</h1>
                    <p className="flight-subtitle">
                        Tell us your travel details and our team will find the best flight options
                        for you at competitive prices.
                    </p>
                </header>

                {/* Form + summary layout */}
                <div className="flight-layout">
                    {/* Main form */}
                    <form className="flight-form" onSubmit={handleSubmit}>
                        {/* Traveller details */}
                        <div className="flight-block">
                            <h2>Traveller Details</h2>
                            <div className="flight-row">
                                <div className="flight-field">
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
                                <div className="flight-field">
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

                            <div className="flight-row">
                                <div className="flight-field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Trip details */}
                        <div className="flight-block">
                            <h2>Trip Details</h2>
                            <div className="flight-row">
                                <div className="flight-field">
                                    <label htmlFor="fromCity">From City / Airport*</label>
                                    <input
                                        id="fromCity"
                                        name="fromCity"
                                        type="text"
                                        required
                                        placeholder="Kolkata (CCU)"
                                        value={formData.fromCity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flight-field">
                                    <label htmlFor="toCity">To City / Airport*</label>
                                    <input
                                        id="toCity"
                                        name="toCity"
                                        type="text"
                                        required
                                        placeholder="Jeddah (JED)"
                                        value={formData.toCity}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flight-row">
                                <div className="flight-field">
                                    <label>Trip Type</label>
                                    <div className="flight-trip-toggle">
                                        <button
                                            type="button"
                                            className={
                                                formData.tripType === "one-way"
                                                    ? "flight-trip-btn flight-trip-btn--active"
                                                    : "flight-trip-btn"
                                            }
                                            onClick={() => setFormData((p) => ({ ...p, tripType: "one-way", returnDate: "" }))}
                                        >
                                            One-way
                                        </button>
                                        <button
                                            type="button"
                                            className={
                                                formData.tripType === "round-trip"
                                                    ? "flight-trip-btn flight-trip-btn--active"
                                                    : "flight-trip-btn"
                                            }
                                            onClick={() => setFormData((p) => ({ ...p, tripType: "round-trip" }))}
                                        >
                                            Round-trip
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flight-row">
                                <div className="flight-field">
                                    <label htmlFor="departDate">Departure Date*</label>
                                    <input
                                        id="departDate"
                                        name="departDate"
                                        type="date"
                                        required
                                        value={formData.departDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flight-field">
                                    <label htmlFor="returnDate">
                                        Return Date{formData.tripType === "round-trip" ? "*" : " (if round-trip)"}
                                    </label>
                                    <input
                                        id="returnDate"
                                        name="returnDate"
                                        type="date"
                                        required={formData.tripType === "round-trip"}
                                        disabled={formData.tripType !== "round-trip"}
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Passenger details */}
                        <div className="flight-block">
                            <h2>Passengers & Cabin</h2>
                            <div className="flight-row">
                                <div className="flight-field">
                                    <label htmlFor="adults">Adults (12+)*</label>
                                    <input
                                        id="adults"
                                        name="adults"
                                        type="number"
                                        min="1"
                                        max="9"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flight-field">
                                    <label htmlFor="children">Children (2–11)</label>
                                    <input
                                        id="children"
                                        name="children"
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={formData.children}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flight-field">
                                    <label htmlFor="infants">Infants (&lt;2)</label>
                                    <input
                                        id="infants"
                                        name="infants"
                                        type="number"
                                        min="0"
                                        max="9"
                                        value={formData.infants}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flight-row">
                                <div className="flight-field">
                                    <label htmlFor="cabinClass">Cabin Class</label>
                                    <select
                                        id="cabinClass"
                                        name="cabinClass"
                                        value={formData.cabinClass}
                                        onChange={handleChange}
                                    >
                                        <option>Economy</option>
                                        <option>Premium Economy</option>
                                        <option>Business</option>
                                        <option>First Class</option>
                                    </select>
                                </div>
                                <div className="flight-field">
                                    <label htmlFor="airlinePreference">Airline Preference</label>
                                    <input
                                        id="airlinePreference"
                                        name="airlinePreference"
                                        type="text"
                                        placeholder="Emirates, Saudia, etc. (optional)"
                                        value={formData.airlinePreference}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Extra notes */}
                        <div className="flight-block">
                            <h2>Additional Notes</h2>
                            <div className="flight-row">
                                <div className="flight-field flight-field--full">
                                    <label htmlFor="notes">Special Requests / Remarks</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows="4"
                                        placeholder="Preferred time, budget range, special assistance, transit preferences, etc."
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flight-actions">
                            <button type="submit" className="flight-button">
                                Submit Flight Request
                            </button>
                            <a
                                className="flight-wa-link"
                                href="https://wa.me/919434135749?text=I%20want%20to%20book%20a%20flight"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Or chat on WhatsApp
                            </a>
                        </div>
                    </form>

                    {/* Side info card */}
                    <aside className="flight-aside">
                        <div className="flight-info-card flight-info-card--highlight">
                            <h3>What Happens Next?</h3>
                            <ul>
                                <li>Our team checks real-time fares and airline options.</li>
                                <li>You receive curated options on WhatsApp / email.</li>
                                <li>Once you confirm, we issue the ticket and share e-ticket.</li>
                            </ul>
                        </div>

                        <div className="flight-info-card flight-info-card--highlight">
                            <h3>Need Urgent Booking?</h3>
                            <p>For last-minute or emergency bookings, please contact us directly:</p>
                            <p className="flight-contact-line">
                                📞 <strong>+91 94341 35749</strong>
                            </p>
                            <p className="flight-contact-line">
                                📧 <strong>al.goni.tours.and.travels@gmail.com</strong>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default FlightBooking;
