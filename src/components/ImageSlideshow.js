import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/ImageSlideshow.css';

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

function ImageSlideshow({ items }) {
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
            {items.map((item, index) => (
                <div key={index}>
                    <img
                        className="carousel-image"
                        src={item.image}
                        alt={`Slide ${index}`}
                    />
                    <div className="carousel-caption">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default ImageSlideshow;
