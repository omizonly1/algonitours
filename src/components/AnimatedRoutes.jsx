import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import HajjUmrah from '../pages/HajjUmrah';
import HolidayPackages from '../pages/HolidayPackages';
import VisaAssistance from '../pages/VisaAssistance';
import CustomTours from '../pages/CustomTours';
import Travel_Insurance from '../pages/Travel_Insurance';
import FlightBooking from '../pages/FlightBooking';
import LuxuryUmrah from '../pages/LuxuryUmrah';
import BikeTrips from '../pages/BikeTrips';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import ManagePackages from '../pages/Admin/ManagePackages';
import AddDestination from '../pages/Admin/AddDestination';
import EditPackage from '../pages/Admin/EditPackage';
import UmrahGuideSection from '../pages/UmrahGuideSection';
import ExploreIndia from '../pages/ExploreIndia';
import DestinationDetail from '../pages/DestinationDetail';
import CustomPackage from '../pages/CustomPackage';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/hajj-umrah" element={<PageTransition><HajjUmrah /></PageTransition>} />
                <Route path="/luxury-umrah" element={<PageTransition><LuxuryUmrah /></PageTransition>} />
                <Route path="/bike-trips" element={<PageTransition><BikeTrips /></PageTransition>} />
                <Route path="/holiday-packages" element={<PageTransition><HolidayPackages /></PageTransition>} />
                <Route path="/visa-assistance" element={<PageTransition><VisaAssistance /></PageTransition>} />
                <Route path="/custom-tours" element={<PageTransition><CustomTours /></PageTransition>} />
                <Route path="/travel-insurance" element={<PageTransition><Travel_Insurance /></PageTransition>} />
                <Route path="/flight-booking" element={<PageTransition><FlightBooking /></PageTransition>} />
                <Route path="/umrah-guide" element={<PageTransition><UmrahGuideSection /></PageTransition>} />
                <Route path="/explore-india" element={<PageTransition><ExploreIndia /></PageTransition>} />
                <Route path="/destination/:id" element={<PageTransition><DestinationDetail /></PageTransition>} />
                <Route path="/custom-package" element={<PageTransition><CustomPackage /></PageTransition>} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />}>
                    <Route path="packages" element={<ManagePackages />} />
                    <Route path="add-destination" element={<AddDestination />} />
                    <Route path="edit-package/:id" element={<EditPackage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
