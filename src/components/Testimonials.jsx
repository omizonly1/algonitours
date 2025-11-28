import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Mohammed Ali",
        location: "Kolkata, West Bengal",
        rating: 5,
        text: "Al Goni Tours made our Umrah journey absolutely seamless. From visa processing to the hotel near Haram, everything was perfect. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        name: "Sarah Khan",
        location: "Mumbai, Maharashtra",
        rating: 5,
        text: "The luxury holiday package to Dubai was an experience of a lifetime. The team took care of every detail, and the private transfers were a nice touch.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        name: "Ahmed Raza",
        location: "Dhaka, Bangladesh",
        rating: 5,
        text: "Excellent service for visa assistance. I got my Saudi tourist visa within 24 hours. Very professional and responsive team.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-beige)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What Our <span style={{ color: 'var(--color-gold)' }}>Travelers Say</span></h2>
                    <p style={{ color: 'var(--color-text-light)' }}>Real stories from our happy customers</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-20px', left: '-20px', opacity: 0.1 }}>
                        <Quote size={80} color="var(--color-gold)" />
                    </div>

                    <div className="glass-card" style={{
                        padding: '40px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                            >
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        marginBottom: '20px',
                                        border: '3px solid var(--color-gold)'
                                    }}
                                />

                                <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="var(--color-gold)" color="var(--color-gold)" />
                                    ))}
                                </div>

                                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '25px', lineHeight: '1.8' }}>
                                    "{testimonials[currentIndex].text}"
                                </p>

                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{testimonials[currentIndex].name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>{testimonials[currentIndex].location}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevTestimonial}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'white',
                                border: '1px solid #eee',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                            }}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'white',
                                border: '1px solid #eee',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                            }}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    backgroundColor: index === currentIndex ? 'var(--color-gold)' : '#ddd',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
