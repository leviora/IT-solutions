import React from 'react';
import '../styles/Services.css';
import Counters from './Counters';

function Services() {
    return (
        <section id="services" className="services">  
            <div className="container">
                <h1>Nasza oferta</h1> 
                <div className='services-header'>
                    <Counters />  
                </div>
                <div className="services-grid">
                    <div className="service">
                        <h3 className="service-title">Projektowanie Stron Internetowych</h3>
                        <p className="service-description">Tworzymy nowoczesne i responsywne strony internetowe, które są optymalizowane pod kątem użytkowników i wyszukiwarek. Nasze projekty wyróżniają się estetyką i funkcjonalnością.</p>
                        <div className="service-overlay">
                            <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo"/>
                            <p className="service-overlay-text">Poznaj naszą ofertę</p>
                        </div>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Rozwój Aplikacji Mobilnych</h3>
                        <p className="service-description">Specjalizujemy się w tworzeniu aplikacji mobilnych dla systemów iOS i Android. Nasze aplikacje są intuicyjne, szybkie i niezawodne, co przekłada się na zadowolenie użytkowników.</p>
                        <div className="service-overlay">
                            <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo"/>
                            <p className="service-overlay-text">Poznaj naszą ofertę</p>
                        </div>
                    </div>
                    <div className="service">
                        <h3 className="service-title">SEO i Marketing Cyfrowy</h3>
                        <p className="service-description">Pomagamy firmom zwiększać widoczność w sieci poprzez efektywne strategie SEO i kampanie marketingowe. Zwiększamy ruch na stronach i konwersje, co przekłada się na większe zyski.</p>
                        <div className="service-overlay">
                            <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo"/>
                            <p className="service-overlay-text">Poznaj naszą ofertę</p>
                        </div>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Hosting i Zarządzanie Serwerami</h3>
                        <p className="service-description">Oferujemy bezpieczny i niezawodny hosting oraz zarządzanie serwerami. Zapewniamy pełne wsparcie techniczne, aby Twoja strona działała bez przerw.</p>
                        <div className="service-overlay">
                            <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo"/>
                            <p className="service-overlay-text">Poznaj naszą ofertę</p>
                        </div>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Analiza Danych i Raportowanie</h3>
                        <p className="service-description">Dostarczamy zaawansowane usługi analizy danych, pomagając firmom zrozumieć i wykorzystać swoje dane do podejmowania lepszych decyzji. Nasze raporty są szczegółowe i dostosowane do potrzeb klientów.</p>
                        <div className="service-overlay">
                            <img src="/Pictures/logo.png" alt="Logo firmy" className="service-overlay-logo"/>
                            <p className="service-overlay-text">Poznaj naszą ofertę</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
