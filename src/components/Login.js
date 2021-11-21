import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import links from '../config';

const Login = () => {
    const navigate = useNavigate();
    const BACKEND_BASE_URL = links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: '', password: '' };

    const [loginData, setLoginData] = useState(INITIAL_FORM_STATE);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginData.username || !loginData.password) {
            alert('Please enter username and password to continue');
        }
        await axios
            .post(`${BACKEND_BASE_URL}/auth/login`, JSON.stringify(loginData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                const { token, username } = res.data;

                console.log(res.data);
                sessionStorage.setItem('_token', token);
                sessionStorage.setItem('username', username);
                clearInputs();
                navigate('/profile');
            })
            .catch((err) => {
                console.log(err);
                clearInputs();
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const clearInputs = () => {
        setLoginData({ username: '', password: '' });
    };

    return (
        <div>
            <h3>
                Not Registered? Sign up <a href="/register">here.</a>
            </h3>
            <form className="my-5" onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-group mb-3">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
