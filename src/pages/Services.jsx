import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Map, FileText, Globe, Sun, Umbrella } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Globe size={40} color="var(--color-gold)" />,
            title: "Hajj & Umrah Packages",
            description: "Experience a spiritual journey like no other with our all-inclusive Hajj and Umrah packages. We handle everything from visa processing to luxury accommodation near the Haram.",
            link: "/hajj-umrah"
        },
        {
            icon: <Sun size={40} color="var(--color-rose-gold)" />,
            title: "Holiday Packages",
            description: "Discover the world's most beautiful destinations. Whether you want a relaxing beach holiday or an adventurous mountain trek, we have the perfect package for you.",
            link: "/holiday-packages"
        },
        {
            icon: <Plane size={40} color="var(--color-gold)" />,
            title: "Flight Bookings",
            description: "Get the best deals on domestic and international flights. We partner with major airlines to provide you with competitive rates and flexible booking options.",
            link: "/flight-booking"
        },
        {
            icon: <FileText size={40} color="var(--color-rose-gold)" />,
            title: "Visa Assistance",
            description: "Navigating visa requirements can be complex. Our experts guide you through the process, ensuring a high success rate for tourist, business, and student visas.",
            link: "/visa-assistance"
        },
        {
            icon: <Map size={40} color="var(--color-gold)" />,
            title: "Custom Tours",
            description: "Don't like pre-packaged tours? Let us design a custom itinerary just for you. Tell us your preferences, and we will create a personalized travel experience.",
            link: "/custom-package"
        },
        {
            icon: <Umbrella size={40} color="var(--color-rose-gold)" />,
            title: "Travel Insurance",
            description: "Travel with peace of mind. We offer comprehensive travel insurance plans that cover medical emergencies, trip cancellations, and lost luggage.",
            link: "/travel-insurance"
        }
    ];

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
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-gold)' }}>Our Services</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
                        Comprehensive travel solutions tailored to your needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {services.map((service, index) => {
                            const cardContent = (
                                <>
                                    <div style={{ marginBottom: '20px' }}>{service.icon}</div>
                                    <h3 style={{ marginBottom: '15px', fontSize: '1.5rem' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--color-text-light)' }}>{service.description}</p>
                                </>
                            );

                            const cardStyle = {
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer',
                                display: 'block',
                                textDecoration: 'none',
                                color: 'inherit',
                                height: '100%'
                            };

                            if (service.link) {
                                return (
                                    <Link
                                        key={index}
                                        to={service.link}
                                        style={cardStyle}
                                        data-testid={`service-card-${index}`}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        {cardContent}
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={index}
                                    style={cardStyle}
                                    data-testid={`service-card-${index}`}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
