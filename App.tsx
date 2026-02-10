
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesOverview from './pages/ServicesOverview';
import LTLFreight from './pages/LTLFreight';
import TimeCritical from './pages/TimeCritical';
import Warehousing from './pages/Warehousing';
import ServiceAreas from './pages/ServiceAreas';
import Industries from './pages/Industries';
import Resources from './pages/Resources';
import TrackQuote from './pages/TrackQuote';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/ltl" element={<LTLFreight />} />
        <Route path="/services/time-critical" element={<TimeCritical />} />
        <Route path="/services/warehousing" element={<Warehousing />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/track-quote" element={<TrackQuote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
