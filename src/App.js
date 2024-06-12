import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NavigationPage from './pages/NavigationPage';
import SideNavigation from './components/SideNavigation';
import './App.css';



function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <SideNavigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/navigation" element={<NavigationPage />} />
                        <Route path="/about" element={<AboutUsPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;