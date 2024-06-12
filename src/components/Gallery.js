import React from 'react';
import '../styles/Gallery.css';

function Gallery({ images }) {
    return (
        <div className="gallery">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index}`} />
            ))}
        </div>
    );
}

export default Gallery;
