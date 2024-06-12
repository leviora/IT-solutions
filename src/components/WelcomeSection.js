import React from 'react';
import '../styles/WelcomeSection.css';


function WelcomeSection() {
    return (
        <section id='welcome' className='welcome'>
            <div className='container'>
            <img src="/Pictures/logo.png" alt="IT Solutions Logo" className='logo' />
                <h1>Odkryj potencjał IT Solutions</h1>
                {/* <p>Poznaj nasze produkty i ofertę, która przyczyni się do sukcesu Twojej firmy.</p> */}
                <div className='heading-timeline'>
                    <span className='heading-timeline-year'>2014</span>
                    <span className='heading-timeline-line'> </span>
                    <span className='heading-timeline-year'>2024</span>
                </div>
               <div className='slidetel'>
                <a href='mailto:oferta@itsolutions.pl'>oferta@itsolutions.pl</a><br/>
                    <a href='tel:+48661189928'>661 189 928</a>
               </div>
            </div>
        </section>
    );
};

export default WelcomeSection;