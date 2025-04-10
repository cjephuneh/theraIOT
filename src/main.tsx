import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your page components
import LandingPage from './landing/page.tsx';
import PreorderPage from './preorder/page.tsx';
import InvestPage from './invest/page.tsx';
import ContactPage from './contact/page.tsx'; // Import the new ContactPage

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/preorder" element={<PreorderPage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  </StrictMode>
);