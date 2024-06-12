import React, { useState } from 'react';
import '../styles/OurValues.css';

function OurValues() {
    const [expanded, setExpanded] = useState({});

    const handleToggle = (value) => {
        setExpanded({ ...expanded, [value]: !expanded[value] });
    };

    return (
        <section id='our-values'>
            <div className='container-values'>
                <h2>Nasze Wartości</h2>
                <ul>
                    <li>
                        <h3>Innowacyjność</h3>
                        <p>Stale poszukujemy nowych sposobów na poprawę naszych produktów i usług, aby sprostać zmieniającym się potrzebom rynku.</p>
                        <button onClick={() => handleToggle('innowacyjność')}>{expanded['innowacyjność'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['innowacyjność'] && (
                            <div>
                                <p>Dodatkowe informacje o innowacyjności...</p>
                                <blockquote>"Nasze działania są motywowane nieustannym poszukiwaniem nowych rozwiązań." - CEO</blockquote>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3>Jakość</h3>
                        <p>Dbamy o najwyższą jakość we wszystkim, co robimy. Nasze produkty są testowane i weryfikowane, aby zapewnić ich niezawodność i wydajność.</p>
                        <button onClick={() => handleToggle('jakość')}>{expanded['jakość'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['jakość'] && (
                            <div>
                                <p>Dodatkowe informacje o jakości...</p>
                                <blockquote>"Jakość to nasz priorytet od początku naszej działalności." - Dyrektor ds. Jakości</blockquote>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3>Klient na Pierwszym Miejscu</h3>
                        <p>Naszym priorytetem jest zadowolenie klienta. Słuchamy, uczymy się i dostosowujemy nasze rozwiązania do indywidualnych potrzeb każdego klienta.</p>
                        <button onClick={() => handleToggle('klient')}>{expanded['klient'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['klient'] && (
                            <div>
                                <p>Dodatkowe informacje o kliencie...</p>
                                <blockquote>"Nasi klienci są najważniejsi dla naszej firmy." - Kierownik Obsługi Klienta</blockquote>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3>Integracja Zespołu</h3>
                        <p>Wierzymy, że sukces osiąga się dzięki współpracy. Nasz zespół składa się z utalentowanych osób, które pracują razem, aby osiągnąć wspólne cele.</p>
                        <button onClick={() => handleToggle('zespoł')}>{expanded['zespoł'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['zespoł'] && (
                            <div>
                                <p>Dodatkowe informacje o integracji zespołu...</p>
                                <blockquote>"Jesteśmy silni dzięki naszej zgranej drużynie." - Manager HR</blockquote>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3>Zrównoważony Rozwój</h3>
                        <p>Angażujemy się w działania na rzecz ochrony środowiska i społeczności. Dążymy do minimalizowania naszego wpływu na planetę i wspierania zrównoważonych praktyk.</p>
                        <button onClick={() => handleToggle('zrównoważony')}>{expanded['zrównoważony'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['zrównoważony'] && (
                            <div>
                                <p>Dodatkowe informacje o zrównoważonym rozwoju...</p>
                                <blockquote>"Dbamy o naszą planetę dla przyszłych pokoleń." - Koordynator CSR</blockquote>
                            </div>
                        )}
                    </li>
                    <li>
                        <h3>Transparentność</h3>
                        <p>Stawiamy na otwartą komunikację i uczciwość w relacjach z naszymi klientami, partnerami i pracownikami. Wierzymy, że zaufanie buduje się poprzez transparentność działań.</p>
                        <button onClick={() => handleToggle('transparentność')}>{expanded['transparentność'] ? 'Zwiń' : 'Dowiedz się więcej'}</button>
                        {expanded['transparentność'] && (
                            <div>
                                <p>Dodatkowe informacje o transparentności...</p>
                                <blockquote>"Nasza firma działa na zasadzie pełnej przejrzystości." - Dyrektor Finansowy</blockquote>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default OurValues;
