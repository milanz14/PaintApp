import React, { useState, useContext } from "react";
import links from "../config";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../helper/Context";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const BACKEND_BASE_URL = links.REACT_APP_BASE_URL;
    const INITIAL_FORM_STATE = { username: "", password: "" };
    const navigate = useNavigate();

    const [registerData, setRegisterData] = useState(INITIAL_FORM_STATE);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!registerData.username || !registerData.password) {
            return toast.error(
                "You can't have an empty username or password when you are trying to register... "
            );
        }
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
                const { token, user } = res.data;
                console.log(res.data);
                sessionStorage.setItem("_token", token);
                sessionStorage.setItem("username", user);
                setLoggedIn(true);
                toast.success(`Welcome to Paintrest, ${registerData.username}`);
                clearInputs();
                navigate("/create");
            })
            .catch((err) => {
                toast.error("Username already in use. Please try again.");
                clearInputs();
                navigate("/register");
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
                <h2>Register.</h2>
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
