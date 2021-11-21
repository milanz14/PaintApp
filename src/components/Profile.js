import React, { useState, useEffect } from "react";
import PaintrestAPI from "../apiHandler";
import "../css/Profile.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GalleryImage from "./GalleryImage";

import { useParams } from "react-router-dom";

const Profile = () => {
    const data = useParams();
    const [images, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
            const username =
                data.userName || sessionStorage.getItem("username");
            const userImages = await PaintrestAPI.myProfile(username);
            setUser(userImages);
        }
        getUser();
    }, [data.userName]);

    return (
        <>
            {data.userName ? (
                <h3>
                    <b>{data.userName}'s</b> Showroom
                </h3>
            ) : (
                <h3>My Showroom</h3>
            )}

            {images.length === 0 ? (
                <div className="loader">
                    <Loader
                        type="ThreeDots"
                        color="#9a8c98"
                        height={120}
                        width={120}
                        timeout={3000} //3 secs
                    />
                </div>
            ) : (
                <div>
                    {images.map((image, idx) => (
                        <div className="profile-container" key={idx}>
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
