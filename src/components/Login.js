import React, { useState, useEffect } from "react";

const Login = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    useEffect(() => {
        //
    }, [loginData]);

    const handleSubmit = () => {};

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
                        aria-label="Username"
                        value={loginData.username}
                    />
                </div>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Password"
                        aria-label="password"
                        value={loginData.password}
                    />
                </div>
                <button className="btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
