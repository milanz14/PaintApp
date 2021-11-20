import React, { useState, useEffect } from 'react';
import PaintrestAPI from '../apiHandler';
import '../css/Profile.css';

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUser() {
            const username = sessionStorage.getItem('username');
            const token = sessionStorage.getItem('_token');
            const user = await PaintrestAPI.myProfile(token, username);
            setUser(user);
        }
        getUser();
    }, []);

    console.log(user);
    return (
        <div>
            <h3>PROFILE PLACEHOLDER</h3>
        </div>
    );
};

export default Profile;
