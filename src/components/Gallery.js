import React, { useState, useEffect } from "react";
import "../css/Gallery.css";
import PaintrestAPI from "../apiHandler";
import GalleryImage from "./GalleryImage";

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

    console.log(images);

    return (
        <>
            <h3>You may like these.</h3>
            <div>
                {images.map((image) => (
                    <div className="gallery-container flex-direction">
                        <span key={image.id}>
                            <GalleryImage
                                className="gallery-children"
                                image={image.post_data}
                                person={image.username}
                            />
                            <a href="#">
                                <p>{image.username}</p>
                            </a>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
