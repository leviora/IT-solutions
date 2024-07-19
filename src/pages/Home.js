import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';
import AboutUsPage from './AboutUsPage';
import WelcomeSection from '../components/WelcomeSection';
import BudgetInput from '../components/BudgetInput';
import ContactButton from '../components/ContactButton';

function Home() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <section id="home"></section>
            <section id="welcome"><WelcomeSection /></section>
            <section id="about"> <AboutUsPage /> </section>
            <section id="services"><ServicesPage /></section>
            <section id="portfolio"><PortfolioPage /></section>
            {/* <section id='budget'><BudgetInput /></section>
            <section id="contact"><ContactPage /></section>
            <ContactButton /> */}
        </div>
    ); 
}

export default Home;
