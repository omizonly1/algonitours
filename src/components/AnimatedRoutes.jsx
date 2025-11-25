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
import UmrahGuideSection from '../pages/UmrahGuideSection';

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
                <Route path="/holiday-packages" element={<PageTransition><HolidayPackages /></PageTransition>} />
                <Route path="/visa-assistance" element={<PageTransition><VisaAssistance /></PageTransition>} />
                <Route path="/custom-tours" element={<PageTransition><CustomTours /></PageTransition>} />
                <Route path="/travel-insurance" element={<PageTransition><Travel_Insurance /></PageTransition>} />
                <Route path="/flight-booking" element={<PageTransition><FlightBooking /></PageTransition>} />
                <Route path="/luxury-umrah" element={<PageTransition><LuxuryUmrah /></PageTransition>} />
                <Route path="/umrah-guide" element={<PageTransition><UmrahGuideSection /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
