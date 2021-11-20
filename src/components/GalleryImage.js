import React from 'react';
import '../css/GalleryImage.css';

const GalleryImage = ({ imageData, person }) => {
    return (
        <div className="gallery-image-container">
            <img src={imageData} alt={`Created by ${person}`} />
        </div>
    );
};

export default GalleryImage;
