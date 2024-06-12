import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseButton from './CloseButton';
import '../styles/NavigationLinks.css';

function NavigationLinks({ onClose }) {
    const navigate = useNavigate();

    const handleNavigation = (section) => {
        onClose();
        navigate(`/?section=${section}`, { replace: true });
    };

    const handleCloseButtonClick = () => {
        onClose();
        navigate('/', { replace: true });
    };

    return (
        <section id='menu-container' className='menu-container'>
            <CloseButton onClick={handleCloseButtonClick} />
            <div className='container'>
                <div className='menu-items-grid'>
                    <div className='link' onClick={() => navigate('/')}>
                        <div className="link-content">
                            Strona główna
                            <div className="service-overlay">
                                <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo" />
                                <p className="service-overlay-text">Strona główna</p>
                            </div>
                        </div>
                    </div>
                    <div className='link' onClick={() => handleNavigation('about')}>
                        <div className="link-content">
                            O nas
                            <div className="service-overlay">
                                <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo" />
                                <p className="service-overlay-text">O nas</p>
                            </div>
                        </div>
                    </div>
                    <div className='link' onClick={() => handleNavigation('services')}>
                        <div className="link-content">
                            Oferta
                            <div className="service-overlay">
                                <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo" />
                                <p className="service-overlay-text">Oferta</p>
                            </div>
                        </div>
                    </div>
                    <div className='link' onClick={() => handleNavigation('portfolio')}>
                        <div className="link-content">
                            Portfolio
                            <div className="service-overlay">
                                <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo" />
                                <p className="service-overlay-text">Portfolio</p>
                            </div>
                        </div>
                    </div>
                    <div className='link' onClick={() => handleNavigation('contact')}>
                        <div className="link-content">
                            Kontakt
                            <div className="service-overlay">
                                <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo" />
                                <p className="service-overlay-text">Kontakt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavigationLinks;
