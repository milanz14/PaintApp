import React, { useState } from 'react';
import links from '../config';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const BACKEND_BASE_URL = links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: '', password: '' };
    const navigate = useNavigate();

    const [token, setToken] = useState('');
    const [registerData, setRegisterData] = useState(INITIAL_FORM_STATE);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(
                `${BACKEND_BASE_URL}/auth/register`,
                JSON.stringify(registerData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((res) => {
                const { token, user } = res.data;
                setToken(token);
                console.log(res.data);
                sessionStorage.setItem('_token', token);
                sessionStorage.setItem('username', user);
                clearInputs();
                navigate('/create');
            })
            .catch((err) => {
                alert(err);
                clearInputs();
                navigate('/register');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const clearInputs = () => {
        setRegisterData({ username: '', password: '' });
    };

    return (
        <div>
            <div>
                <h3>
                    Already Registered? Log in <a href="/login">here.</a>
                </h3>
                <form className="my-5" onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={registerData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={registerData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
