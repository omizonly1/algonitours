import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HajjUmrah from './pages/HajjUmrah';
import HolidayPackages from './pages/HolidayPackages';
import VisaAssistance from './pages/VisaAssistance';
import CustomTours from './pages/CustomTours';
import Travel_Insurance from './pages/Travel_Insurance';
import FlightBooking from './pages/FlightBooking';
import LuxuryUmrah from './pages/LuxuryUmrah';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hajj-umrah" element={<HajjUmrah />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
            <Route path="/visa-assistance" element={<VisaAssistance />} />
            <Route path="/custom-tours" element={<CustomTours />} />
            <Route path="/travel-insurance" element={<Travel_Insurance />} />
            <Route path="/flight-booking" element={<FlightBooking />} />
            <Route path="/luxury-umrah" element={<LuxuryUmrah />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
