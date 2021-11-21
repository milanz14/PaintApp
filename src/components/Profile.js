import React, { useState, useEffect } from 'react';
import PaintrestAPI from '../apiHandler';
import '../css/Profile.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import GalleryImage from './GalleryImage';

const Profile = () => {
    const [images, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
            const username = sessionStorage.getItem('username');
            const userImages = await PaintrestAPI.myProfile(username);
            setUser(userImages);
        }
        getUser();
    }, []);

    console.log(images);
    return (
        <>
            <h3>My Showroom</h3>
            {images.length === 0 ? (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            ) : (
                <div>
                    {images.map((image) => (
                        <div className="profile-container" key={image.id}>
                            <GalleryImage
                                imageData={image.post_data}
                                person={image.username}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Profile;
