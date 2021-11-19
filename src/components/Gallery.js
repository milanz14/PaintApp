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
        <div>
            <h1>Gallery of Fine Arts!</h1>
            {images.map((image) => (
                <div>
                    <span key={image.id}>
                        <GalleryImage
                            image={image.post_data}
                            person={image.username}
                        />
                    </span>
                    <p>Created By: {image.username}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
