import React, { useState, useEffect } from 'react';
import '../css/randUserProfile.css';
import PaintrestAPI from '../apiHandler';
import GalleryImage from './GalleryImage';

const RandUserProfile = () => {
    // How to get a random user from the url
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function userProfile() {
            const images = await PaintrestAPI.userProfile();
            setImages(images.posts);
        }
        userProfile();
    }, []);

    return (
        <>
            <h3>Artwork Created By: {}</h3>

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

export default RandUserProfile;
