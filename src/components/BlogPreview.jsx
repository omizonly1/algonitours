import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "Complete Guide to Umrah 2025",
        excerpt: "Everything you need to know about the new visa rules, rituals, and best time to visit Mecca.",
        date: "Nov 20, 2024",
        image: "src/assets/kaaba.jpg",
        link: "/umrah-guide"
    },
    {
        id: 2,
        title: "Top 5 Halal-Friendly Destinations",
        excerpt: "Discover the best holiday spots that offer halal food, prayer facilities, and family-friendly activities.",
        date: "Nov 15, 2024",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Packing Tips for International Travel",
        excerpt: "Essential items you must carry for a hassle-free journey abroad. Don't forget these documents!",
        date: "Nov 10, 2024",
        image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const BlogPreview = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Travel <span style={{ color: 'var(--color-gold)' }}>Tips & News</span></h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Stay updated with the latest travel insights</p>
                    </div>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        View All Posts <ArrowRight size={18} />
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {blogPosts.map((post) => (
                        <div key={post.id} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                            </div>
                            <div style={{ padding: '25px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '10px' }}>
                                    <Calendar size={16} /> {post.date}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', lineHeight: '1.4' }}>{post.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', marginBottom: '20px', fontSize: '0.95rem' }}>{post.excerpt}</p>
                                <Link to={post.link || "#"} style={{ color: 'var(--color-gold)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
