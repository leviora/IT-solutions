import React from 'react';
import 'animate.css/animate.min.css';
import '../styles/AboutUs.css';

function AboutUs() {
    const imagesAboutUs = [
        { src: '../Pictures/AboutUsPic/pic1.jpg', description: 'Nasza liderka, Anna, która prowadzi nasz zespół z pasją i wizją.' },
        { src: '../Pictures/AboutUsPic/pic2.jpg', description: 'Nasz zespół deweloperów, zawsze gotowy do realizacji najbardziej ambitnych projektów.' },
        { src: '../Pictures/AboutUsPic/pic3.jpg', description: 'Specjaliści od wsparcia klienta, którzy zawsze służą pomocą.' }
    ];

    return (
        <section id="about" className="about-section"> 
            <div className="container">
            <h3>Wkraczając do IT Solution wkraczasz w przyszłość</h3>
            
                <div className="aboutUsDescription animate__animated animate__zoomIn">
                    <div className="text">   
                        <p>Jesteśmy firmą, która wierzy w potęgę innowacji i nieustannego rozwoju. Nasze rozwiązania technologiczne są projektowane z myślą o przyszłości, aby zapewnić naszym klientom przewagę konkurencyjną w dynamicznie zmieniającym się świecie.</p>
                    </div>
                    <img src="../Pictures/welcomePic.jpg" alt="welcome picture" />
                </div>

                <div className="gallery">
                    {imagesAboutUs.map((image, index) => (
                        <div key={index} className="gallery-item animate__animated animate__fadeIn">
                            <img src={image.src} alt={image.description} />
                            <p>{image.description}</p>
                        </div>
                    ))}
                </div>

                <div className="aboutUsMission animate__animated animate__fadeIn">
                    <div className="text">
                        <p>Jesteśmy pionierami technologii, architektami cyfrowego świata. Nasza misja to nie tylko tworzenie rozwiązań, ale inspiracja do przekształceń. Podążamy za innowacją, byście Państwo mogli przekraczać granice możliwości.</p>
                    </div>
                    <img src="../Pictures/AboutUsPic/pic1.jpg" alt="Nasza Misja" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
