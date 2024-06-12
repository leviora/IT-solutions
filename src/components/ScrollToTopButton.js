import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import '../styles/ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        console.log('Przewijam do góry');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-to-top">
            <button onClick={scrollToTop} className="scroll-button" aria-label="Przewiń do góry">
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
