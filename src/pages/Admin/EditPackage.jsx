import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { usePackages } from '../../context/PackageContextDefinition';
import { useNavigate, useParams } from 'react-router-dom';

const EditPackage = () => {
    const { getPackage, updatePackage } = usePackages();
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        price: '',
        description: '',
        image: '',
        type: ''
    });

    useEffect(() => {
        const pkg = getPackage(id);
        if (pkg) {
            setFormData(pkg);
        } else {
            // If package not found (e.g. refresh on non-persisted data or invalid id), redirect
            navigate('/admin/dashboard/packages');
        }
    }, [id, getPackage, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePackage(id, formData);
        alert('Package updated successfully!');
        navigate('/admin/dashboard/packages');
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem', color: '#333' }}>Edit Package</h1>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', maxWidth: '800px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''} // Handle potential undefined
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country || ''}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price || ''}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                required
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image || ''}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}
                                required
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>Description (Optional)</label>
                        <textarea
                            name="description"
                            value={formData.description || ''}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}
                    >
                        <Save size={20} />
                        Update Package
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditPackage;
