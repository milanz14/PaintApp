import axios from "axios";
import React, { useState, useContext } from "react";
import { LoginContext } from "../helper/Context";
import { useNavigate } from "react-router-dom";
import links from "../config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const BACKEND_BASE_URL =
        process.env.REACT_APP_BASE_URL || links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: "", password: "" };

    const [loginData, setLoginData] = useState(INITIAL_FORM_STATE);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginData.username || !loginData.password) {
            return toast.error(
                "You must provide a valid username and password to login"
            );
        }
        await axios
            .post(`${BACKEND_BASE_URL}/auth/login`, JSON.stringify(loginData), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                const { token, username } = res.data;

                console.log(res.data);
                sessionStorage.setItem("_token", token);
                sessionStorage.setItem("username", username);
                setLoggedIn(true);
                toast.success(
                    `Welcome back to Paintrest, ${loginData.username}`
                );
                clearInputs();
                navigate("/profile");
            })
            .catch((err) => {
                console.log(err);
                clearInputs();
                toast.error("Wrong Username or Password");
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
        setLoginData({ username: "", password: "" });
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <h3>
                Not Registered? Sign up <a href="/register">here.</a>
            </h3>
            <div className="d-flex justify-content-center my-3">
                <div className="col-6">
                    <form className="my-5" onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                value={loginData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
