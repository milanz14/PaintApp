import React from "react";
import "../css/GalleryImage.css";

const GalleryImage = ({ image, person }) => {
    return (
        <div className="gallery-image-container">
            <img
                src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg"
                alt={`Created by ${person}`}
            />
        </div>
    );
};

export default GalleryImage;
