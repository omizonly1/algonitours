import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, PlusCircle, LogOut } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
            {/* Sidebar */}
            <div style={{
                width: '250px',
                backgroundColor: '#333',
                color: 'white',
                padding: '2rem 1rem',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '3rem', textAlign: 'center', color: 'var(--color-gold)' }}>Admin Panel</h2>

                <nav style={{ flex: 1 }}>
                    <Link
                        to="/admin/dashboard"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            color: isActive('/admin/dashboard') ? 'var(--color-gold)' : 'white',
                            textDecoration: 'none',
                            backgroundColor: isActive('/admin/dashboard') ? 'rgba(255,255,255,0.1)' : 'transparent',
                            borderRadius: '8px',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <LayoutDashboard size={20} style={{ marginRight: '1rem' }} />
                        Dashboard
                    </Link>
                    <Link
                        to="/admin/dashboard/packages"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            color: isActive('/admin/dashboard/packages') ? 'var(--color-gold)' : 'white',
                            textDecoration: 'none',
                            backgroundColor: isActive('/admin/dashboard/packages') ? 'rgba(255,255,255,0.1)' : 'transparent',
                            borderRadius: '8px',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <Package size={20} style={{ marginRight: '1rem' }} />
                        Manage Packages
                    </Link>
                    <Link
                        to="/admin/dashboard/add-destination"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            color: isActive('/admin/dashboard/add-destination') ? 'var(--color-gold)' : 'white',
                            textDecoration: 'none',
                            backgroundColor: isActive('/admin/dashboard/add-destination') ? 'rgba(255,255,255,0.1)' : 'transparent',
                            borderRadius: '8px',
                            marginBottom: '0.5rem'
                        }}
                    >
                        <PlusCircle size={20} style={{ marginRight: '1rem' }} />
                        Add Destination
                    </Link>
                </nav>

                <button
                    onClick={handleLogout}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        color: '#ff6b6b',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: 'auto'
                    }}
                >
                    <LogOut size={20} style={{ marginRight: '1rem' }} />
                    Logout
                </button>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                <Outlet />
                {/* Default Dashboard View if on /admin/dashboard */}
                {location.pathname === '/admin/dashboard' && (
                    <div>
                        <h1 style={{ marginBottom: '2rem', color: '#333' }}>Dashboard Overview</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: '#666', marginBottom: '1rem' }}>Total Bookings</h3>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1,245</p>
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: '#666', marginBottom: '1rem' }}>Active Packages</h3>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>15</p>
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: '#666', marginBottom: '1rem' }}>New Inquiries</h3>
                                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>28</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
