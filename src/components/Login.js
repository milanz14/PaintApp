import axios from "axios";
import React, { useState, useContext } from "react";
import { LoginContext } from "../helper/Context";
import { useNavigate } from "react-router-dom";
import links from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();
    const BACKEND_BASE_URL = links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: "", password: "" };

    const [loginData, setLoginData] = useState(INITIAL_FORM_STATE);
    const [token, setToken] = useState("");
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
                setToken(token);
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
        <div>
            <h2>Login</h2>
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
