import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What documents are required for Umrah visa?",
        answer: "For an Umrah visa, you typically need a valid passport with at least 6 months validity, recent passport-sized photographs, and proof of vaccination. Our team will guide you through the specific requirements based on your nationality."
    },
    {
        question: "Do you provide custom holiday packages?",
        answer: "Yes, we specialize in tailor-made holiday packages. Whether you want a family vacation, a honeymoon, or a solo trip, we can customize the itinerary, hotels, and flights to suit your budget and preferences."
    },
    {
        question: "How long does it take to process a tourist visa?",
        answer: "Visa processing times vary by country. For example, a UAE tourist visa usually takes 2-3 working days, while a Schengen visa may take 15-20 days. We recommend applying well in advance of your travel dates."
    },
    {
        question: "Is travel insurance mandatory?",
        answer: "While not mandatory for all destinations, we highly recommend travel insurance to cover unexpected medical expenses, trip cancellations, or lost luggage. Some countries do require it for visa approval."
    },
    {
        question: "Can I book flights only without a tour package?",
        answer: "Absolutely! We offer standalone flight booking services for both domestic and international travel at competitive rates."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-padding" style={{ backgroundColor: 'var(--color-soft-beige)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked <span style={{ color: 'var(--color-gold)' }}>Questions</span></h2>
                    <p style={{ color: 'var(--color-text-light)' }}>Find answers to common questions about our services</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                            }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: activeIndex === index ? 'var(--color-gold)' : 'var(--color-text-dark)'
                                }}
                            >
                                {faq.question}
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 20px 20px 20px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
