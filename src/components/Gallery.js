import React, { useState, useEffect } from 'react';
import '../css/Gallery.css';
import PaintrestAPI from '../apiHandler';
import GalleryImage from './GalleryImage';

const Gallery = () => {
    const imageCount = 10;
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function getImages() {
            const images = await PaintrestAPI.getImages(imageCount);
            setImages(images.posts);
        }
        getImages();
    }, []);

    return (
        <>
            <h3>Inspiration to help you get started</h3>

            <div>
                {images.map((image) => (
                    <div className="gallery-container" key={image.id}>
                        <GalleryImage
                            imageData={image.post_data}
                            person={image.username}
                        />
                        <a href="#">
                            <p>
                                <span className="black">Created By:</span>{' '}
                                {image.username}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
