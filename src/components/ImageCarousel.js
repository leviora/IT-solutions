import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/ImageCarousel.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ImageCarousel({ images }) {
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
            {images.map((img, index) => (
                <div key={index}>
                    <img
                        className="carousel-image"
                        src={img}
                        alt={`Slide ${index}`}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;
