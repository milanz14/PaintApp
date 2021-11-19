import React from "react";

const Register = () => {
    const handleSubmit = () => {
        //
    };

    return (
        <div>
            <div>
                <h3>
                    Already Registered? Log in <a href="/login">here.</a>
                </h3>
                <form className="my-5" onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            aria-label="Username"
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Password"
                            aria-label="password"
                        />
                    </div>
                    <button className="btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
