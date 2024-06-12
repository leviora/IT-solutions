// import React from 'react';
// import '../styles/OurPortfolio.css';
// import ImageSlideshow from './ImageSlideshow';

// function OurPortfolio() {
   
//     const ourPortfolioItems = [
//         {
//             image: '../pictures/portfolio/portfolio1.jpg',
//             title: 'Wypożyczalnia aut',
//             description: 'Stworzyliśmy intuicyjną platformę do zarządzania flotą pojazdów, umożliwiającą łatwe rezerwacje online oraz pełną kontrolę nad wynajmem aut.'
//         },
//         {
//             image: '../pictures/portfolio/portfolio2.jpg',
//             title: 'Aplikacja webowa dla psychologa',
//             description: 'Opracowaliśmy aplikację webową, która wspiera psychologów w zarządzaniu sesjami, notatkami oraz kontaktami z klientami, zapewniając jednocześnie bezpieczeństwo danych.'
//         },
        
//         {
//             image: '../pictures/portfolio/portfolio4.jpg',
//             title: 'Strona internetowa barbera',
//             description: 'Zaprojektowaliśmy atrakcyjną stronę internetową dla barbera, wzbogaconą o funkcje rezerwacji online, galerię prac oraz integrację z mediami społecznościowymi.'
//         },
//         {
//             image: '../pictures/portfolio/portfolio5.jpg',
//             title: 'Perfumeria online',
//             description: 'Stworzyliśmy elegancką perfumerię internetową, oferującą szeroki wybór ekskluzywnych perfum oraz akcesoriów, zapewniającą wygodne zakupy i szybką dostawę.'
//         }
//     ];
    
//     return (
//         <section id="portfolio">
//             <div className='our-portfolio'> 
//                 <h2>Nasi klienci</h2>
//                 <ImageSlideshow items={ourPortfolioItems} />
//              </div>
//         </section>
//     );
// }

// export default OurPortfolio;


import React from 'react';
import '../styles/OurPortfolio.css';

function OurPortfolio() {
    return (
        <div id='clients' className='clients'>
            <div className='container'>
                <div className="grid">
                    <div className="card">
                        <div className="card-img">
                            <img src="/pictures/portfolio/portfolio1.jpg" alt="Wypożyczalnia aut" />
                        </div>
                        <div className="card-box box-1 top-left">
                            <h3>Wypożyczalnia aut</h3>
                            <p>Stworzyliśmy intuicyjną platformę do zarządzania flotą pojazdów, umożliwiającą łatwe rezerwacje online oraz pełną kontrolę nad wynajmem aut</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="/pictures/portfolio/portfolio2.jpg" alt="Aplikacja webowa dla psychologa" />
                        </div>
                        <div className="card-box box-1 top-left">
                            <h3>Aplikacja webowa dla psychologa</h3>
                            <p>Opracowaliśmy aplikację webową, która wspiera psychologów w zarządzaniu sesjami, notatkami oraz kontaktami z klientami, zapewniając jednocześnie bezpieczeństwo danych.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="/pictures/portfolio/portfolio4.jpg" alt="Strona internetowa barbera" />
                        </div>
                        <div className="card-box box-1 top-left">
                            <h3>Strona internetowa barbera</h3>
                            <p>Zaprojektowaliśmy atrakcyjną stronę internetową dla barbera, wzbogaconą o funkcje rezerwacji online, galerię prac oraz integrację z mediami społecznościowymi.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src="/pictures/portfolio/portfolio5.jpg" alt="Perfumeria online" />
                        </div>
                        <div className="card-box box-1 top-left">
                            <h3>Perfumeria online</h3>
                            <p>Stworzyliśmy elegancką perfumerię internetową, oferującą szeroki wybór ekskluzywnych perfum oraz akcesoriów, zapewniającą wygodne zakupy i szybką dostawę.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurPortfolio;
