import React, { useState, useEffect } from 'react';
import '../css/Gallery.css';
import PaintrestAPI from '../apiHandler';
import GalleryImage from './GalleryImage';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const Gallery = () => {
    const incrementBy = 9;
    const [images, setImages] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [currLastId, setCurrLastId] = useState(0);

    console.log(images);

    // used for inital render
    useEffect(() => {
        async function getImages() {
            const newImages = await PaintrestAPI.getImages(incrementBy);
            setImages(newImages.posts);
            setCurrLastId(newImages.posts[newImages.posts.length - 1].id);
        }
        getImages();
    }, []);

    // used for infinite scroll
    const loadMore = () => {
        async function nextBatch() {
            const newImages = await PaintrestAPI.getNextBatch(
                incrementBy,
                currLastId
            );
            if (newImages.posts[newImages.posts.length - 1].id === 1) {
                setHasMore(false);
            }
            setCurrLastId(newImages.posts[newImages.posts.length - 1].id);
            setImages([...images, ...newImages.posts]);
        }

        // Timeout is simply to make it obvious Infinite Scroll was added
        setTimeout(() => nextBatch(), 1500);
    };

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
                        timeout={8000} //8 secs
                    />
                </div>
            ) : (
                <div>
                    <InfiniteScroll
                        dataLength={images.length}
                        next={loadMore}
                        hasMore={hasMore}
                        loader={
                            <Loader
                                type="ThreeDots"
                                color="#9a8c98"
                                height={100}
                                width={100}
                                timeout={4000} //3 secs
                            />
                        }
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Congrats... You've reached the end!</b>
                            </p>
                        }
                    >
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
                    </InfiniteScroll>
                </div>
            )}
        </>
    );
};

export default Gallery;
