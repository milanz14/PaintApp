import React, { useState, useEffect } from "react";
import "../css/Gallery.css";
import PaintrestAPI from "../apiHandler";
import GalleryImage from "./GalleryImage";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";

const Gallery = () => {
    const imageCount = 15;
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
            <h3>The Art Gallery of Paintrest</h3>
            {images.length === 0 ? (
                <div className="loader">
                    <Loader
                        type="ThreeDots"
                        color="#9a8c98"
                        height={100}
                        width={100}
                        timeout={4000} //3 secs
                    />
                </div>
            ) : (
                <div>
                    {images.map((image) => (
                        <div className="gallery-container" key={image.id}>
                            <GalleryImage
                                imageData={image.post_data}
                                person={image.username}
                            />
                            <p>
                                Created By:
                                <Link to={`/profile/${image.username}`}>
                                    {image.username}
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Gallery;
