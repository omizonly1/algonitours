import React, { useState } from 'react';
import { Save } from 'lucide-react';
import { usePackages } from '../../context/PackageContextDefinition';
import { useNavigate } from 'react-router-dom';

const AddDestination = () => {
    const { addPackage } = usePackages();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        price: '',
        description: '',
        image: '',
        type: 'Destination' // Default type
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPackage(formData);
        alert('Destination added successfully!');
        navigate('/admin/dashboard/packages');
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem', color: '#333' }}>Add New Destination</h1>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', maxWidth: '800px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Destination Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                placeholder="e.g., Paris"
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                placeholder="e.g., France"
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Price (Starting From)</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                placeholder="e.g., ₹80,000"
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                placeholder="https://..."
                                required
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
                            placeholder="Enter a brief description..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}
                    >
                        <Save size={20} />
                        Save Destination
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDestination;
