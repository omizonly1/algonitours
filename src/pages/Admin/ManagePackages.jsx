import React from 'react';
import { usePackages } from '../../context/PackageContextDefinition';
import { Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManagePackages = () => {
    const { packages, deletePackage } = usePackages();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this package?')) {
            deletePackage(id);
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/dashboard/edit-package/${id}`);
    };

    return (
        <div>
            <h1 style={{ marginBottom: '2rem', color: '#333' }}>Manage Packages</h1>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #eee' }}>
                        <tr>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Type</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Image</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Name</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Country</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Price</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#666' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((pkg) => (
                            <tr key={pkg.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem', color: '#666', fontSize: '0.9rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        backgroundColor: pkg.type === 'Hajj' || pkg.type === 'Umrah' ? 'rgba(212, 175, 55, 0.1)' : '#eee',
                                        color: pkg.type === 'Hajj' || pkg.type === 'Umrah' ? 'var(--color-gold)' : '#666',
                                        fontWeight: 'bold'
                                    }}>
                                        {pkg.type}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <img src={pkg.image} alt={pkg.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                                </td>
                                <td style={{ padding: '1rem', fontWeight: 'bold', color: '#333' }}>{pkg.name}</td>
                                <td style={{ padding: '1rem', color: '#666' }}>{pkg.country}</td>
                                <td style={{ padding: '1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>{pkg.price}</td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            onClick={() => handleEdit(pkg.id)}
                                            style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#666' }}
                                        >
                                            <Edit size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(pkg.id)}
                                            style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#ff6b6b' }}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePackages;
