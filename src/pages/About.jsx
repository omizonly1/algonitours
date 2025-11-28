import React from "react";

const AboutUs = () => {
  return (
    <main className="about-page">
      {/* Hero / Page Header */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-title">About Al Goni Tours &amp; Travels</h1>
          <p className="about-tagline">Crafting Your Perfect Getaway</p>
          <p className="about-subtext">
            Trusted Umrah, Ziyarat, Air Ticketing &amp; Travel Experts
          </p>
        </div>
      </section>

      <div className="about-container">
        {/* Overview */}
        <section className="about-section" id="overview">
          <h2 className="section-title">Overview of Our Company</h2>
          <p className="section-text">
            <strong>Al Goni Tours &amp; Travels</strong> is a premium travel company
            dedicated to providing seamless Umrah, Ziyarat, international tours,
            air ticketing, and personalized travel services. Rooted in trust,
            transparency, and exceptional service, we ensure every journey is
            comfortable, spiritually enriching, and stress-free.
          </p>
          <p className="section-text">
            With a commitment to excellence, we offer thoughtfully designed travel
            experiences, luxurious accommodations, guided Ziyarat, premium
            transfers, and end-to-end assistance—making every trip smooth from
            start to finish. Driven by our passion for hospitality and devotion to
            serving guests, we have become a trusted travel partner for families,
            pilgrims, and explorers.
          </p>
        </section>

        {/* Founder Message */}
        <section className="about-section" id="founder-message">
          <h2 className="section-title">Founder’s Message</h2>
          <h3 className="section-subtitle">Moulana Shamsul Huda</h3>
          <div className="founder-message-card">
            <p className="section-text italic">
              “At Al Goni Tours &amp; Travels, we believe that travel is not just
              movement—it is a journey of the heart. For pilgrims undertaking
              Umrah or Ziyarat, it is a sacred experience that must be handled
              with utmost sincerity and care.”
            </p>
            <p className="section-text italic">
              “My vision has always been to create a travel service where every
              guest feels respected, valued, and supported. We strive to provide
              comfort, guidance, and reliability at every step, treating every
              traveler as a part of our family.”
            </p>
            <p className="section-text italic">
              “May every journey you take with us bring peace, ease, and
              blessings. We look forward to serving you with dedication and
              excellence.”
            </p>
            <p className="founder-signature">
              — Moulana Shamsul Huda, <span>Founder</span>
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="about-section" id="vision-mission">
          <div className="two-column">
            <div className="card">
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                To become a globally trusted travel brand that delivers
                spiritually fulfilling, luxurious, and seamless travel
                experiences—enhancing the comfort and confidence of every traveler
                who chooses us.
              </p>
            </div>
            <div className="card">
              <h2 className="section-title">Our Mission</h2>
              <ul className="section-list">
                <li>
                  To provide high-quality, transparent, and reliable travel
                  solutions.
                </li>
                <li>
                  To deliver spiritually enriching Umrah and Ziyarat journeys
                  with premium comfort.
                </li>
                <li>
                  To support every traveler with personalized care from planning
                  to return.
                </li>
                <li>
                  To combine faith, hospitality, and modern travel convenience
                  into a single experience.
                </li>
                <li>
                  To continuously innovate and upgrade our services to meet
                  global standards.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="about-section" id="values">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3 className="value-title">Trust &amp; Integrity</h3>
              <p className="section-text">
                We offer honest pricing, transparent processes, and complete
                reliability—values that form the foundation of our service.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Hospitality with Heart</h3>
              <p className="section-text">
                Every traveler is treated with respect, warmth, and genuine care.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Spiritual Responsibility</h3>
              <p className="section-text">
                Our Umrah and Ziyarat services are delivered with sincerity,
                guidance, and respect for sacred traditions.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Excellence in Service</h3>
              <p className="section-text">
                From luxury transport to curated itineraries, we maintain premium
                quality in everything we do.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-title">Safety &amp; Comfort</h3>
              <p className="section-text">
                We ensure every journey is smooth, secure, and stress-free.
              </p>
            </div>
          </div>
        </section>

        {/* Why Travellers Trust Us */}
        <section className="about-section" id="why-trust">
          <h2 className="section-title">Why Travellers Trust Us</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <h3 className="trust-title">Experienced &amp; Reliable Team</h3>
              <p className="section-text">
                Years of expertise in pilgrimage and international travel
                planning.
              </p>
            </div>
            <div className="trust-item">
              <h3 className="trust-title">Premium Hospitality</h3>
              <p className="section-text">
                Luxury transportation, clean hotels, guided tours, and
                personalized attention.
              </p>
            </div>
            <div className="trust-item">
              <h3 className="trust-title">Transparent Pricing</h3>
              <p className="section-text">
                No hidden charges—every detail is communicated clearly.
              </p>
            </div>
            <div className="trust-item">
              <h3 className="trust-title">End-to-End Support</h3>
              <p className="section-text">
                We assist you with visas, flights, accommodation, guidance, and
                documentation.
              </p>
            </div>
            <div className="trust-item">
              <h3 className="trust-title">Spiritual Guidance</h3>
              <p className="section-text">
                Traveling with a knowledgeable scholar ensures a spiritually
                uplifting experience.
              </p>
            </div>
            <div className="trust-item">
              <h3 className="trust-title">Modern Travel Solutions</h3>
              <p className="section-text">
                Online bookings, digital itinerary sharing, 24/7 support, and
                expert assistance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
