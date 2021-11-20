import React, { useState } from "react";
import links from "../config";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const BACKEND_BASE_URL = links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: "", password: "" };
    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState("");
    const [registerData, setRegisterData] = useState(INITIAL_FORM_STATE);

    const redirectUser = () => {
        if (!token) {
            return <Navigate to="/register" />;
        } else {
            return <Navigate to="/create" />;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(
                `${BACKEND_BASE_URL}/auth/register`,
                JSON.stringify(registerData),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                setToken(res.data.token);
                console.log(res.data.token);
                sessionStorage.setItem("_token", res.data.token);
                clearInputs();
                redirectUser();
                // navigate.push("/create");
                // navigate.go();
            })
            .catch((err) => {
                alert(err);
                clearInputs();
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
        setRegisterData({ username: "", password: "" });
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
