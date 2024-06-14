import React from 'react';
import 'animate.css/animate.min.css';
import '../styles/AboutUs.css';

function AboutUs() {
    const imagesAboutUs = [
        { 
            src: '../Pictures/AboutUsPic/pic1.jpg', 
            description: 'Nasza liderka, Anna, która prowadzi nasz zespół z pasją i wizją. Anna posiada ponad 10-letnie doświadczenie w branży technologicznej i jest znana z innowacyjnego podejścia do zarządzania. Jej zdolność do inspirowania i motywowania zespołu jest kluczowym elementem naszego sukcesu.' 
        },
        { 
            src: '../Pictures/AboutUsPic/pic2.jpg', 
            description: 'Nasz zespół deweloperów, zawsze gotowy do realizacji najbardziej ambitnych projektów. Składa się z ekspertów o różnorodnych specjalizacjach, którzy współpracują, aby tworzyć innowacyjne rozwiązania. Dzięki ich zaangażowaniu i umiejętnościom technicznym, jesteśmy w stanie dostarczać najwyższej jakości produkty i usługi.' 
        },
        { 
            src: '../Pictures/AboutUsPic/pic3.jpg', 
            description: 'Specjaliści od wsparcia klienta, którzy zawsze służą pomocą. Nasi dedykowani profesjonaliści zapewniają, że każdy klient otrzymuje indywidualną opiekę i wsparcie na najwyższym poziomie. Dzięki ich wiedzy i zaangażowaniu, jesteśmy w stanie szybko i skutecznie rozwiązywać wszelkie problemy i odpowiadać na potrzeby naszych klientów.' 
        }
    ];
    

    return (
        <section id="about" className="about-section"> 
            <div className="container">
            <h3>Wkraczając do IT Solution wkraczasz w przyszłość</h3>
            
                <div className="aboutUsDescription animate__animated animate__zoomIn">
                    <div className="text">   
                    <p>Jesteśmy firmą, która głęboko wierzy w potęgę innowacji i nieustannego rozwoju. Nasza misja opiera się na tworzeniu zaawansowanych rozwiązań technologicznych, które nie tylko odpowiadają na bieżące potrzeby naszych klientów, ale także przewidują i kształtują przyszłe trendy. Dzięki naszemu zaangażowaniu w badania i rozwój, dostarczamy produkty i usługi, które zapewniają naszym klientom znaczącą przewagę konkurencyjną. W dynamicznie zmieniającym się świecie, nasze innowacyjne podejście pozwala nam wspierać przedsiębiorstwa w osiąganiu ich celów i adaptacji do nowych wyzwań. Nasze wartości to jakość, niezawodność i wizja przyszłości, dzięki którym budujemy długotrwałe relacje z naszymi klientami i partnerami.</p>
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
                    <p>Jesteśmy pionierami technologii, architektami cyfrowego świata. Nasza misja to nie tylko tworzenie rozwiązań, ale również inspiracja do przekształceń, które zmieniają oblicze biznesu i życia codziennego. Z pasją podążamy za innowacją, nieustannie poszukując nowych sposobów, abyście Państwo mogli przekraczać granice możliwości. Każdego dnia dążymy do tego, aby nasze zaawansowane technologie napędzały rozwój i sukces naszych klientów. Wierzymy, że dzięki synergii wiedzy, doświadczenia i kreatywności możemy kształtować przyszłość, dostarczając rozwiązania, które są zarówno funkcjonalne, jak i wizjonerskie. W dynamicznie zmieniającym się świecie, jesteśmy Waszym niezawodnym partnerem w dążeniu do doskonałości i innowacyjności.</p>
                    </div>
                    <img src="../Pictures/AboutUsPic/pic1.jpg" alt="Nasza Misja" />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
