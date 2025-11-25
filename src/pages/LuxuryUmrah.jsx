import React from "react";

const LuxuryUmrah = ({
    logoSrc = "logo.png",
    companyName = "Al Goni Tours & Travels",
    tagline = "Crafting Your Perfect Getaway",
}) => {
    return (
        <section className="premium-inclusions-section">
            <div className="premium-inclusions-container">

                {/* Brand Top */}
                <div className="premium-brand">
                    <img src={logoSrc} alt="Logo" className="premium-logo" />
                    <div className="premium-brand-text">
                        <h4>{companyName}</h4>
                        <span>{tagline}</span>
                    </div>
                </div>

                {/* Section Title */}
                <h2 className="premium-title">Luxury Umrah Package</h2>
                <p className="premium-subtitle">
                    Experience a premium, comfortable, and spiritually enriching Umrah journey
                    with our exclusive, all-inclusive luxury package offerings.
                </p>

                {/* Cards Grid */}
                <div className="premium-grid">

                    <div className="premium-card">
                        <h3>Premium International Airlines</h3>
                        <p>Travel comfortably with Emirates or equivalent world-class carriers.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Luxury Hotel Accommodation</h3>
                        <p>Stay at top-tier hotels including Clock Tower or similar premium properties.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Visa Processing Included</h3>
                        <p>Complete Saudi visa assistance handled with care and professionalism.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Comprehensive Travel Insurance</h3>
                        <p>Full coverage throughout your journey for peace of mind.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Private Luxury Transport</h3>
                        <p>Exclusive GMC, SUV, or premium sedan for all intercity transfers.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Guided Ziyarat Tours</h3>
                        <p>Expert-led ziyarat tours covering major historical and spiritual sites.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Daily Buffet Meals</h3>
                        <p>Premium buffet dining with high-quality food options.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Laundry Services Included</h3>
                        <p>Complimentary laundry service for your entire stay.</p>
                    </div>

                    <div className="premium-card">
                        <h3>Gift of Barakah</h3>
                        <p>Experience a unique, spiritually inspired luxury gift curated exclusively for every honored pilgrim</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LuxuryUmrah;
